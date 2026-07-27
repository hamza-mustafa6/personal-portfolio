// Synthesized "click" sound via the Web Audio API — no audio asset needed.
// A short filtered noise burst produces a crisp mechanical tick.

let ctx: AudioContext | null = null;

export function playClick() {
  if (typeof window === "undefined") return;

  try {
    if (!ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctx = new AudioCtx();
    }
    // Browsers start the context suspended until a user gesture.
    if (ctx.state === "suspended") ctx.resume();

    const now = ctx.currentTime;
    const duration = 0.03;

    // Build a short noise burst that decays quickly.
    const frames = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, frames, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frames; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / frames, 3);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Band-pass gives it a tighter, more "tick"-like character.
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 2200;
    bandpass.Q.value = 0.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noise.connect(bandpass).connect(gain).connect(ctx.destination);
    noise.start(now);
    noise.stop(now + duration);
  } catch {
    // Audio is a nice-to-have; never let it break the UI.
  }
}

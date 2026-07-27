import "./globals.css";
import { Dongle, JetBrains_Mono } from "next/font/google";

const dongle = Dongle({
  subsets: ["latin"],
  weight: ["300"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dongle.className} ${jetbrains.variable} min-h-screen text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

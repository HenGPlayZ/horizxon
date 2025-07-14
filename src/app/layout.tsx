import type { Metadata } from "next";
import { Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizxon - Website Development",
  description:
    "Horizxon delivers cutting-edge website development solutions that transform your business vision into powerful digital experiences. From responsive design to full-stack development.",
  keywords:
    "website development, web design, frontend development, backend development, full-stack development, React, Next.js, Horizxon, HZN",
  authors: [{ name: "Horizxon (HZN)" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${openSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

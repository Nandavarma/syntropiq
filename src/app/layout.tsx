import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import Header from "./ui/Header";
import BackgroundGradient from "./ui/BackgroundGradient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syntropic",
  description: "A platform where learning becomes easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen bg-[#0b0e29]  text-white scroll-smooth overflow-x-hidden relative`}
      >
        <BackgroundGradient />
        <Header />
        {children}
      </body>
    </html>
  );
}

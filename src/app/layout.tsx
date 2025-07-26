import type { Metadata } from "next";
import { inter } from "../components/fonts";
import Header from "../components/Header";
import BackgroundGradient from "../components/BackgroundGradient";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";

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
        <ReduxProvider>
          <BackgroundGradient />
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

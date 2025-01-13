import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Navigation } from "./components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s - dperis00 HCI2024/25",
    default: "dperis00 HCI2024/25",
  },
  description: "Research blog website where the owner, an expert in their field, shares research findings and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Only one Navigation bar */}
        <Navigation />
        {/* Render children without including another Navigation */}
        <main>{children}</main>
      </body>
    </html>
  );
}


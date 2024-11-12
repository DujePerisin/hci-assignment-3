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

/*
// Define metadata for each route
const metadataMap = {
  "/": { title: "Home - HCI 2024/2025", description: "The home of all things you are about to explore." },
  "/about": { title: "About Us - HCI 2024/2025", description: "Learn more about us and what we do." },
  "/blog": { title: "Research Blogs - HCI 2024/2025", description: "Learn more about us and what we do." },
  "/contact": { title: "Contact us - HCI 2024/2025", description: "Get in touch with us!" },
  "/education": { title: "Education section - HCI 2024/2025", description: "Learn more about the topics we have covered." },
  "/forum": { title: "Forum - HCI 2024/2025", description: "Share your ideas and help other achieve theirs." },
  "/travel": { title: "Business travels - HCI 2024/2025", description: "Quick look into our conferences, networking events and more." },
};*/

export const metadata: Metadata = {
  title: "HCI - dperis00",
  description: "Research blog website where the owner, an expert in their field, shares research findings and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}


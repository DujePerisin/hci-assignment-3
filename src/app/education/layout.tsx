import type { Metadata } from "next";
import "../globals.css";

import { Navigation } from "./_components/navigation";

export const metadata: Metadata = {
    title: "Education",
  };

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mt-4">
      <Navigation />
      {children}
    </section>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business travels",
}

export default function Travel() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      
      <h1 className="text-6xl font-extrabold tracking-tight">Business travels</h1>
      <p className="text-2xl font-mono mt-6">Will all be on one single site.....</p>
      <p className="text-2xl font-mono">....in future development</p>
    </main>
  )
}
"use client";

import { Blogs } from "@/components/Blogs";
import { Footer } from "@/components/Footer";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Technical Writings
        </h1>
        <p className="text-gray-400">
          Deep dives into Cloud Architecture, Security, and Serverless patterns.
          <br />
          <span className="text-sm text-gray-500">Published on Medium</span>
        </p>
      </div>

      {/* Reusing your existing Blogs component */}
      <Blogs />

      <Footer />
    </main>
  );
}

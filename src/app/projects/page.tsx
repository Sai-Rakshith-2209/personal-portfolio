"use client";

import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black pt-24 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Project Archive
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my cloud infrastructure deployments, automation
          scripts, and full-stack applications.
        </p>
      </div>

      {/* Reusing the Projects component */}
      <Projects />

      <Footer />
    </main>
  );
}

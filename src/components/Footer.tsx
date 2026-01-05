"use client";

import React from "react";
import { Terminal } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-lg overflow-hidden bg-gray-900 shadow-2xl font-mono text-sm md:text-base">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-400 text-xs">
              sairakshith@admin:~/contact
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 text-gray-300 space-y-4">
            <div>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <span className="text-yellow-300">echo $CONTACT_INFO</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 border-l-2 border-gray-700">
              <div>
                <span className="text-gray-500">Email:</span>{" "}
                <a
                  href="mailto:sairakshith@sairakshith.com"
                  className="text-white hover:underline"
                >
                  sairakshith@sairakshith.com
                </a>
              </div>
              <div>
                <span className="text-gray-500">LinkedIn:</span>{" "}
                <a
                  href="https://linkedin.com/in/sai-rakshith"
                  className="text-white hover:underline"
                >
                  /in/sai-rakshith
                </a>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>{" "}
                <span className="text-white">Bengaluru, India</span>
              </div>
              <div>
                <span className="text-gray-500">Status:</span>{" "}
                <span className="text-green-400">Open to Opportunities</span>
              </div>
            </div>

            <div className="pt-4 animate-pulse">
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <span className="inline-block w-2 h-5 bg-gray-500 align-middle ml-1"></span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          © 2026 Sai Rakshith. Built with Next.js, Tailwind.
        </p>
      </div>
    </footer>
  );
};

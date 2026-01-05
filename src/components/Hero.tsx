"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gray-50 dark:bg-black text-gray-900 dark:text-white px-4 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-20 dark:opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] opacity-20 dark:opacity-30 pointer-events-none" />

      <div className="z-10 text-center max-w-4xl mx-auto space-y-6">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
            Open to Work
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
            Sai Rakshith
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Senior Cloud Engineer specializing in{" "}
          <span className="text-gray-900 dark:text-white font-medium">AWS</span>{" "}
          and{" "}
          <span className="text-gray-900 dark:text-white font-medium">
            Scalable Infrastructure
          </span>
          . architecting secure, high-availability AWS ecosystems. Driving operational excellence through advanced Infrastructure as Code and automation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          {/* Button 1: Download Resume */}
          <Link
            href="/resume.pdf"
            target="_blank" // Opens PDF in a new tab
            rel="noopener noreferrer" // Security best practice
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-700 dark:hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            <span>Download Resume</span>
          </Link>

          {/* Button 2: Email Me */}
          <Link
            href="mailto:your.email@example.com" // <--- REPLACE WITH YOUR ACTUAL EMAIL
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

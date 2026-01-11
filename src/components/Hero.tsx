"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Download, Mail, ArrowRight } from "lucide-react";

export const Hero = () => {
  // Mouse tracking for the spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black selection:bg-blue-500/30"
      onMouseMove={handleMouseMove}
    >
      {/* --- BACKGROUND EFFECTS --- */}

      {/* 1. Base Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* 2. Spotlight Follower */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 3. Static Ambient Glow (Purple/Blue) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-800/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-[120px] pointer-events-none" />

      {/* --- HERO CONTENT --- */}
      <div className="z-10 text-center max-w-5xl mx-auto px-4 space-y-8 relative">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">
              Available for Hire
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            Sai Rakshith
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium text-gray-400"
          >
            Architecting the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">
              Cloud
            </span>{" "}
            of Tomorrow.
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Senior Cloud Engineer specialized in building fault-tolerant AWS
          ecosystems. Expert in Infrastructure as Code, Serverless
          Architectures, and integrating AI into DevOps workflows.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            className="group relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-950/90 gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </span>
          </Link>

          <Link
            href="mailto:sairakshith10@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Download, Mail, ArrowRight } from "lucide-react";

// --- Looping Typewriter Component ---
const LoopingTypewriter = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // 1. Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // 2. Typing logic
  useEffect(() => {
    // Determine the current word to type
    const currentWord = words[index % words.length];

    // If typing is complete (full word is on screen) and not reversing yet
    if (subIndex === currentWord.length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    // If deleting is complete (screen is empty) and reversing
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1); // Move to next word
      return;
    }

    // Set the typing speed
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : subIndex === currentWord.length ? 2000 : 100, parseInt((Math.random() * 150).toString()))); // Randomize slightly for realism

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <h2 className={className}>
      {/* The text content */}
      {words[index % words.length].substring(0, subIndex)}

      {/* The cursor */}
      <span
        className={`inline-block w-[3px] h-[1em] bg-blue-500 ml-1 align-middle ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </h2>
  );
};

export const Hero = () => {
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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

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
              open to opportunities
            </span>
          </div>
        </motion.div>

        {/* Main Title Area */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            Sai Rakshith
          </motion.h1>

          {/* Job Title: Looping Typewriter */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <LoopingTypewriter
              // YOU CAN EDIT THE TITLES HERE
              words={["Senior Cloud Engineer", "AWS Solutions Architect"]}
              className="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            />
          </div>
        </div>

        {/* Formal Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Specializing in the design and deployment of secure, high-availability
          AWS ecosystems. Expertise spans{" "}
          <strong className="text-gray-200 font-medium">
            Infrastructure as Code (CDK)
          </strong>
          ,{" "}
          <strong className="text-gray-200 font-medium">
            Serverless Architecture.
          </strong>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
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

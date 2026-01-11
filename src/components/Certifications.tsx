"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, Sparkles } from "lucide-react";

const certs = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Professional",
    image: "/badges/sa-pro.png",
    verifyLink:
      "https://www.credly.com/badges/62c2378d-1c12-40cc-bfa4-f154add2abd9/public_url",
    // Increased base intensity of colors
    glowColor: "bg-orange-500/30",
    borderHighlight: "group-hover:border-orange-500/50",
    gradientTo: "to-orange-950/30",
  },
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    image: "/badges/sa-assoc.png",
    verifyLink:
      "https://www.credly.com/badges/bd0db882-46a7-4129-90aa-69fd0fc6eb41/public_url",
    glowColor: "bg-teal-500/30",
    borderHighlight: "group-hover:border-teal-500/50",
    gradientTo: "to-teal-950/30",
  },
  {
    name: "AWS Certified Developer",
    level: "Associate",
    image: "/badges/dev-assoc.png",
    verifyLink:
      "https://www.credly.com/badges/4c6e7062-b416-4f99-bd98-2a93b5ee538f/public_url",
    glowColor: "bg-blue-500/30",
    borderHighlight: "group-hover:border-blue-500/50",
    gradientTo: "to-blue-950/30",
  },
];

export const Certifications = () => {
  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      {/* 1. Richer Background Atmosphere */}
      {/* A deep blue/purple spotlight at the top to break the flat gray */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-6 backdrop-blur-md shadow-lg shadow-indigo-500/10">
            <Sparkles className="w-4 h-4" />
            <span>Professional Credentials</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Cloud{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Certifications
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Earners of these certifications have an extensive understanding of
            designing technical strategies to accomplish specific business
            goals. They demonstrated the ability to balance best practices and
            trade-offs based on business context.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <Card key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ cert, index }: { cert: (typeof certs)[0]; index: number }) => {
  return (
    <motion.a
      href={cert.verifyLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      // 2. Glassmorphism Card Base
      // Removed solid grays. Used gradients to black/transparent to blend with the background.
      className={`group relative w-full h-[400px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 ${cert.gradientTo} overflow-hidden cursor-pointer`}
    >
      {/* 3. Permanent Ambient Glow (The "De-Graying" Factor) */}
      {/* This blob is now visible at 20% opacity by default, so the card has color even when not hovering */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 ${cert.glowColor} blur-[60px] rounded-full opacity-20 group-hover:opacity-80 transition-opacity duration-700`}
      />

      {/* Top Highlight Border (simulates light hitting the glass edge) */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/50 transition-colors duration-500`}
      />

      <div className="relative h-full flex flex-col items-center justify-between p-8 z-10">
        {/* Top: Level Tag */}
        <div className="w-full flex justify-end">
          <span
            className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md ${
              cert.level === "Professional"
                ? "text-orange-300 border-orange-500/30"
                : "text-teal-300 border-teal-500/30"
            }`}
          >
            {cert.level}
          </span>
        </div>

        {/* Middle: Badge Image */}
        <div className="relative w-36 h-36 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <Image
            src={cert.image}
            alt={cert.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Bottom: Text & Link */}
        <div className="text-center w-full">
          <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors mb-4">
            {cert.name}
          </h3>

          <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
            <span>Verify Credential</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

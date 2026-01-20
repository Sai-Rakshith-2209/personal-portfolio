"use client";

import React, { useState } from "react";
import { Copy, Check, Linkedin, Mail, MapPin, Globe } from "lucide-react";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sairakshith10@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative py-20 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Pattern - Squared Graph Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
               linear-gradient(to right, #ffffff 1px, transparent 1px),
               linear-gradient(to bottom, #ffffff 1px, transparent 1px)
             `,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Optional: Radial Gradient to fade edges (Vignette effect) */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Terminal Container */}
        <div className="group relative">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-900 via-purple-900 to-emerald-900 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          {/* Main Terminal Window - Deep Black/Charcoal */}
          <div className="relative rounded-xl overflow-hidden bg-[#0c0c0c] shadow-2xl ring-1 ring-white/10 font-mono text-sm md:text-base">
            {/* Terminal Header */}
            <div className="bg-[#171717] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors shadow-none" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors shadow-none" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors shadow-none" />
              </div>
              <div className="text-gray-500 text-xs font-medium flex items-center gap-2 opacity-60">
                <Globe size={12} />
                <span>sairakshith@admin:~/contact</span>
              </div>
              <div className="w-10"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Command Line */}
              <div className="flex items-center gap-3 text-gray-400">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-blue-500 font-bold">~</span>
                <span className="text-gray-300">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-200">contact</span> ={" "}
                  <span className="text-cyan-400">await</span> getDetails();
                </span>
              </div>

              {/* JSON/Object Output */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-2 md:pl-6 border-l-2 border-white/5 ml-1">
                {/* Email Section */}
                <div className="group/item">
                  <span className="text-gray-600 select-none text-xs uppercase tracking-wider">
                    {"// Email"}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <Mail size={18} className="text-purple-400" />
                    <button
                      onClick={handleCopyEmail}
                      className="text-gray-300 hover:text-cyan-300 transition-colors text-left flex items-center gap-2 group-hover/item:translate-x-1 duration-300"
                    >
                      "sairakshith10@gmail.com"
                      {copied ? (
                        <Check size={14} className="text-emerald-500" />
                      ) : (
                        <Copy
                          size={14}
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                        />
                      )}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Section */}
                <div className="group/item">
                  <span className="text-gray-600 select-none text-xs uppercase tracking-wider">
                    {"// Professional"}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <Linkedin size={18} className="text-blue-400" />
                    <a
                      href="https://linkedin.com/in/sai-rakshith"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-300 transition-colors group-hover/item:translate-x-1 duration-300"
                    >
                      "linkedin.com/in/sai-rakshith"
                    </a>
                  </div>
                </div>

                {/* Location Section */}
                <div className="group/item">
                  <span className="text-gray-600 select-none text-xs uppercase tracking-wider">
                    {"// Base"}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <MapPin size={18} className="text-red-400" />
                    <span className="text-yellow-200/90 group-hover/item:translate-x-1 duration-300 transition-transform">
                      "Bengaluru, India"
                    </span>
                  </div>
                </div>

                {/* Status Section */}
                <div className="group/item">
                  <span className="text-gray-600 select-none text-xs uppercase tracking-wider">
                    {"// Status"}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-emerald-400/90 font-medium group-hover/item:translate-x-1 duration-300 transition-transform">
                      "Open to Opportunities"
                    </span>
                  </div>
                </div>
              </div>

              {/* Cursor Animation */}
              <div className="pt-2">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-blue-500 font-bold ml-2">~</span>
                <span className="inline-block w-2.5 h-5 bg-gray-500 ml-2 animate-pulse align-middle shadow-[0_0_10px_rgba(255,255,255,0.2)]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-600 text-sm">© 2026 Sai Rakshith.</p>
          <p className="text-xs text-gray-700">
            Built with <span className="text-gray-500">Next.js</span> &{" "}
            <span className="text-cyan-900">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

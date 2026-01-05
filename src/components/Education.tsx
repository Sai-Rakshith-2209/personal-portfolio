"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpenCheck, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Grid for consistency */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        {/* LEFT COLUMN: Formal Education (Blue Theme) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Formal Education</h3>
          </div>

          <div className="space-y-6">
            {/* M.Tech Card */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-neutral-900/50 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  M.Tech in AI & ML
                </h4>
                <span className="px-3 py-1 text-xs font-bold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Pursuing
                </span>
              </div>
              <p className="text-blue-200/80 text-sm mb-4 font-medium">
                BITS Pilani • 2025 - 2027
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leveraging LLMs to drive Operational Excellence and enhance
                engineering workflows.
              </p>
            </div>

            {/* B.Tech Card */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                  B.Tech in Computer Science
                </h4>
                <span className="px-3 py-1 text-xs font-medium text-gray-500 bg-white/5 border border-white/10 rounded-full">
                  Completed
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                Amrita Vishwa Vidyapeetham • 2018 - 2022
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Certifications (Emerald Theme) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <BookOpenCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Certifications & Training
            </h3>
          </div>

          <div className="space-y-6">
            {/* Gen AI Card */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-neutral-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  AWS Generative AI Professional
                </h4>
                <span className="px-3 py-1 text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  In Progress
                </span>
              </div>
              <p className="text-emerald-200/80 text-sm mb-4 font-medium">
                Udemy
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Deepening expertise in building production-ready AI solutions
                using Amazon Bedrock.
              </p>
            </div>

            {/* Security Specialty Card */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-neutral-900/50 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  AWS Security Specialty
                </h4>
                <span className="px-3 py-1 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  In Progress
                </span>
              </div>
              <p className="text-emerald-200/80 text-sm mb-4 font-medium">
                Udemy
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Advanced cloud security architectures and compliance strategies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

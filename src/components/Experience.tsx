"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Senior Cloud Engineer",
    company: "App Mastery",
    period: "Dec 2023 - Present",
    location: "Toronto, ON (Remote)",
    description:
      "Leading cloud architecture initiatives, focusing on Serverless innovation and high-availability systems.",
    achievements: [
      "Architected CI/CD workflows using AWS CDK (TypeScript), reducing manual deployments by 95%.",
      "Designed HA architectures with Amazon Aurora Global Databases supporting 10,000+ concurrent users.",
      "Implemented enterprise security (WAF, GuardDuty), achieving zero major security incidents.",
      "Leading AI Engineering initiatives using LLMs to enhance engineering workflows.",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "App Mastery",
    period: "Oct 2022 - Dec 2023",
    location: "Toronto, ON (Remote)",
    description:
      "Core member of the infrastructure team focusing on migration, observability, and cost optimization.",
    achievements: [
      "Reduced Mean-Time-To-Resolution (MTTR) by 45% by integrating AWS X-Ray and CloudWatch.",
      "Engineered serverless functions (Lambda), reducing operational overhead by 70%.",
      "Achieved 99.9%+ API uptime via AWS Synthetics Canaries and EventBridge monitoring.",
      "Migrated on-prem workloads to AWS EC2/RDS and automated tasks using Python (Boto3).",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Ingersoll Rand",
    period: "Jan 2022 - Jul 2022",
    location: "Bangalore, India",
    description:
      "Worked on automation applications and system efficiency improvements.",
    achievements: [
      "Increased system efficiency by 15% through B&R Automation Studio.",
      "Collaborated on architecting application modules adhering to Object Oriented Analysis and Design principles.",
      "Translated complex technical requirements into functional code for production systems.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: any) => {
  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile Line connection */}
      <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

      <div
        className={`md:flex items-center justify-between gap-10 ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="hidden md:block w-5/12" />

        {/* Center Node (The Glowing Dot) */}
        <div className="absolute left-0 md:left-1/2 -translate-x-[4px] md:-translate-x-1/2 flex items-center justify-center w-6 h-6 z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-8 h-8 bg-blue-500/30 rounded-full animate-ping" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-white dark:border-black shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
            <div className="absolute w-2 h-2 bg-white rounded-full z-20" />
          </motion.div>
        </div>

        {/* Card Container */}
        <div className="w-full md:w-5/12 mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative"
          >
            {/* Hover Glow Effect Layer */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-500" />

            {/* Main Content Card */}
            <div className="relative p-6 rounded-2xl bg-white dark:bg-black/80 backdrop-blur-xl border border-gray-100 dark:border-white/10 shadow-xl">
              {/* Header Section */}
              <div className="flex flex-col gap-2 mb-4">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 flex items-center gap-2">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                    <Briefcase className="w-3 h-3 text-blue-500" />{" "}
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                    <Calendar className="w-3 h-3 text-purple-500" />{" "}
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-pink-500" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed border-l-2 border-blue-500/30 pl-3">
                {exp.description}
              </p>

              {/* Achievements List */}
              <ul className="space-y-3">
                {exp.achievements.map((item: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-400 group/item hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5 group-hover/item:text-purple-500 transition-colors" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300 overflow-hidden relative">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 dark:from-black dark:via-transparent dark:to-black pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3 border border-blue-500/20">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20" />
        </motion.div>

        <div className="relative">
          {/* Main Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2 opacity-30" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

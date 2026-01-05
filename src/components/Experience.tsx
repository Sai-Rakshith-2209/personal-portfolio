"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";

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
      "Increased system efficiency by 15% through B&R Automation Studio apps.",
      "Collaborated on architecting application modules adhering to OOAD principles.",
      "Translated complex technical requirements into functional code for production systems.",
    ],
  },
];

const ExperienceCard = ({ exp, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

      <div
        className={`md:flex items-center justify-between gap-10 ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="hidden md:block w-5/12" />

        <div className="absolute left-0 md:left-1/2 -translate-x-[4px] md:-translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full border-4 border-white dark:border-black bg-blue-600 z-10 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>

        <div className="w-full md:w-5/12 mb-10 md:mb-0">
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-2 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                {exp.title}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {exp.location}
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm italic">
              {exp.description}
            </p>
            <ul className="space-y-3">
              {exp.achievements.map((item: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

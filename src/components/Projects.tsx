"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Server,
  ArrowUpRight,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "ECR Vulnerability Alerting",
    description:
      "Event-driven security pipeline using AWS CDK and EventBridge. Automates container vulnerability detection from Amazon Inspector and triggers real-time SNS alerts.",
    tags: ["AWS CDK", "EventBridge", "Lambda", "SNS", "Amazon Inspector"],
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/20",
    text: "text-red-400",
    link: "https://github.com/concept-coding-geeks/ecr-scan-notifications",
  },
  {
    title: "OIDC Identity Bridge",
    description:
      "Secure OpenID Connect (OIDC) bridge between GitHub Actions and AWS. Eliminates long-lived access keys, enhancing security posture for CI/CD pipelines.",
    tags: ["Security", "OIDC", "IAM", "GitHub Actions"],
    icon: Server,
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    text: "text-blue-400",
    link: "https://github.com/concept-coding-geeks/github-actions-roles-stack",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative h-full"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-full overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 transition-all duration-500 group-hover:border-white/20 group-hover:translate-y-[-5px] group-hover:shadow-2xl">
          {/* 1. AMBIENT GLOW BACKGROUND */}
          <div
            className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${project.color} opacity-10 blur-[60px] group-hover:opacity-20 transition-opacity duration-500`}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />

          {/* 2. GIANT WATERMARK ICON */}
          <project.icon
            strokeWidth={1}
            className={`absolute -bottom-10 -right-10 w-48 h-48 ${project.text} opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 ease-out`}
          />

          <div className="relative p-8 flex flex-col h-full z-10">
            {/* Top Row: Small Icon + Link Arrow */}
            <div className="flex justify-between items-start mb-6">
              <div
                className={`p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md ${project.text} group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <span>View Project</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400 transition-all">
              {project.title}
            </h3>

            <p className="text-neutral-400 leading-relaxed mb-8 text-sm flex-grow">
              {project.description}
            </p>

            {/* Divider Line */}
            <div
              className={`h-px w-full bg-gradient-to-r ${project.color} opacity-20 mb-6`}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-semibold tracking-wide text-neutral-300 bg-black/40 border border-white/5 rounded-lg flex items-center gap-1.5"
                >
                  <span
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color}`}
                  />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-400 text-sm font-bold tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Deployments
              </span>
            </h2>
            <p className="text-neutral-400 max-w-xl text-lg">
              Engineering scalable cloud solutions. A collection of
              infrastructure as code, security pipelines, and automation tools.
            </p>
          </div>

          <a
            href="https://github.com/concept-coding-geeks"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub</span>
          </a>
        </motion.div>

        {/* --- CHANGED: Projects Grid --- */}
        {/* 1. Changed to max-w-5xl to constrain width slightly so they aren't huge */}
        {/* 2. Used grid-cols-2 (removed grid-cols-3) to balance the 2 items */}
        {/* 3. Increased gap to gap-12 and lg:gap-16 for better separation */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile GitHub Button */}
        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/concept-coding-geeks"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};
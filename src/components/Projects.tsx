"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ShieldAlert,
  BadgeDollarSign,
  Server,
} from "lucide-react";

const projects = [
  {
    title: "ECR Vulnerability Alerting",
    description:
      "An event-driven security pipeline using AWS CDK and EventBridge. Automates the detection of container vulnerabilities (CVEs) from Amazon Inspector and triggers real-time SNS alerts classified by severity.",
    tags: ["AWS CDK", "EventBridge", "Lambda", "SNS", "Amazon Inspector"],
    icon: ShieldAlert,
    gradient: "from-red-500 to-orange-500",
    link: "https://github.com/concept-coding-geeks/ecr-scan-notifications",
  },
  {
    title: "Budget Governance Stack",
    description:
      "A proactive FinOps solution that saves ~15% in deployment costs. Implements multi-layer guardrails and triggers real-time alerts at 50%, 75%, and 90% budget consumption across multi-region environments.",
    tags: ["AWS CDK", "AWS Budgets", "FinOps", "TypeScript", "SNS"],
    icon: BadgeDollarSign,
    gradient: "from-green-400 to-emerald-600",
    link: "https://github.com/concept-coding-geeks/github-actions-roles-stack",
  },
  {
    title: "OIDC Identity Bridge",
    description:
      "Architected a secure OpenID Connect (OIDC) bridge between GitHub Actions and AWS using CDK. Eliminates long-lived access keys, enhancing security posture for CI/CD pipelines.",
    tags: ["Security", "OIDC", "IAM", "GitHub Actions", "Zero Trust"],
    icon: Server,
    gradient: "from-blue-500 to-indigo-600",
    link: "https://medium.com/@conceptcodinggeeks/implementing-oidc-bridge-between-github-and-aws-using-aws-cdk-typescript-0d4f99e80418",
  },
];

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} opacity-0 dark:opacity-20 group-hover:opacity-100 transition duration-500 blur-xl rounded-2xl`}
      ></div>

      <div className="relative h-full bg-white dark:bg-black/90 dark:backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 rounded-2xl flex flex-col justify-between overflow-hidden shadow-lg dark:shadow-none transition-colors">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div
              className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10 text-white`}
            >
              <project.icon className="w-6 h-6" />
            </div>
            <div className="flex gap-3">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Github className="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors w-5 h-5" />
              </a>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-white/70 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="py-32 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
              Deployments
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

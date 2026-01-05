"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Terminal,
  Layers,
  ShieldCheck,
  Database,
} from "lucide-react";

// --- Spotlight Card Component ---
// Now accepts a 'fromColor' prop to create the subtle static gradient background
const SpotlightCard = ({
  children,
  className = "",
  fromColor = "from-neutral-800",
}: {
  children: React.ReactNode;
  className?: string;
  fromColor?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // We added a static gradient here using 'fromColor'
      className={`relative rounded-3xl border border-neutral-800 bg-gradient-to-br ${fromColor} to-neutral-950/50 overflow-hidden ${className}`}
    >
      {/* The Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full z-20">{children}</div>
    </div>
  );
};

// --- Skill Pill Component ---
const SkillPill = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
    {children}
  </span>
);

export const Skills = () => {
  return (
    <section className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-white">
          Technical Arsenal
        </h2>
        <p className="text-neutral-400 max-w-lg mx-auto">
          My weapon of choice is the AWS Cloud. I don't just provision servers;
          I orchestrate resilient, self-healing ecosystems.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 relative z-10">
        {/* 1. THE CORE: AWS (Blue Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2"
          fromColor="from-blue-900/40"
        >
          <div className="p-8 h-full flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between z-10">
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Cloud size={32} />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-400 tracking-wider border border-green-500/30 px-2 py-1 rounded-full bg-green-500/10">
                  PRIMARY FOCUS
                </span>
              </div>
            </div>

            <div className="space-y-4 mt-6 z-10">
              <h3 className="text-3xl font-bold text-white">AWS Ecosystem</h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Architecting the backbone of modern software. From serverless
                microservices to global multi-region deployments, I build
                systems that are{" "}
                <span className="text-blue-400 font-semibold">
                  secure by design
                </span>{" "}
                and{" "}
                <span className="text-blue-400 font-semibold">
                  resilient by default
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "EC2",
                  "Lambda",
                  "S3",
                  "CloudFront",
                  "Route53",
                  "VPC",
                  "IAM",
                  "CloudWatch",
                  "DynamoDB",
                  "API Gateway",
                  "ECS/Fargate",
                  "EventBridge",
                ].map((skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* 2. IaC (Purple Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-6 lg:col-span-4"
          fromColor="from-purple-900/40"
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Infrastructure as Code
                </h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4">
                If it's not in code, it doesn't exist. I treat infrastructure as
                software using CDK patterns.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS CDK",
                "CloudFormation",
                "Terraform",
                "Serverless Framework",
              ].map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* 3. Languages (Yellow Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-3 lg:col-span-4"
          fromColor="from-yellow-900/20"
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4">
                Polyglot engineering. Writing clean, type-safe logic to glue
                cloud services together.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "JavaScript", "Python", "Node.js", "Bash"].map(
                (skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                )
              )}
            </div>
          </div>
        </SpotlightCard>

        {/* 4. DevOps (Pink Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-3 lg:col-span-4"
          fromColor="from-pink-900/20"
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">DevOps & CI/CD</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4">
                Zero-touch deployments. Building pipelines that test, secure,
                and ship code automatically.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "GitHub Actions",
                "GitLab CI",
                "Docker",
                "Kubernetes",
                "Jira",
              ].map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* 5. Security (Emerald Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-3 lg:col-span-4"
          fromColor="from-emerald-900/20"
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Cloud Security</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4">
                Defense in depth. Implementing Zero Trust architectures where
                every request is verified.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AWS WAF",
                "Shield",
                "KMS",
                "IAM Policies",
                "Security Groups",
              ].map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* 6. Database (Orange Gradient) */}
        <SpotlightCard
          className="col-span-1 md:col-span-3 lg:col-span-4"
          fromColor="from-orange-900/20"
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  <Database size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Data Stores</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-4">
                Data at the speed of business. Optimizing access patterns for
                millisecond latency.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Aurora", "DynamoDB", "RDS", "Neptune", "ElastiCache"].map(
                (skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                )
              )}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  Cloud,
  ShieldCheck,
  Globe,
  Lock,
  Workflow,
  Code2,
  Key,
  Activity,
} from "lucide-react";

// --- Utility: Spotlight Card ---
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.25)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
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
    <div
      className={`group relative border border-white/10 bg-neutral-950/80 overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Component: Background Grid ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-soft-light" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
  </div>
);

const TechGrid = () => {
  const stack = [
    { name: "TypeScript", color: "bg-blue-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "AWS CDK", color: "bg-orange-500" },
    { name: "SQL", color: "bg-blue-400" },
    { name: "Docker", color: "bg-cyan-600" },
    { name: "Gen AI", color: "bg-indigo-500" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {stack.map((tech, idx) => (
        <div
          key={idx}
          className="group/item relative overflow-hidden rounded-lg bg-white/[0.02] p-3 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10"
        >
          <div
            className={`absolute top-0 left-0 w-full h-[2px] ${tech.color} opacity-0 group-hover/item:opacity-100 transition-opacity`}
          />
          <div className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full ${tech.color} shadow-[0_0_5px_currentColor]`}
            />
            <span className="text-xs font-medium text-neutral-400 group-hover/item:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="relative min-h-screen w-full bg-black py-24 px-4 overflow-hidden flex flex-col justify-center">
      <BackgroundGrid />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* -- Header Section -- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold text-sm tracking-wider">
              System Architecture
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Engineering Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
              Cloud Infrastructure.
            </span>
          </h2>
        </div>

        {/* -- Bento Grid -- */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 h-full auto-rows-[minmax(200px,auto)]">
          {/* 1. AWS COMMAND CENTER (Large) */}
          <div className="col-span-1 md:col-span-6 lg:col-span-8 row-span-2">
            <SpotlightCard
              className="h-full p-8 flex flex-col justify-between group"
              spotlightColor="rgba(59, 130, 246, 0.15)"
            >
              {/* REMOVED: The abstract map SVG graphic was here */}

              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Cloud className="text-blue-400" size={24} />
                  </motion.div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                  AWS Ecosystem
                </h3>
                <p className="text-neutral-400 max-w-lg relative z-10">
                  Designing fault-tolerant, multi-region serverless
                  architectures. Specialized in high-scale event-driven systems.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 relative z-10">
                {[
                  "Lambda",
                  "EventBridge",
                  "ECS Fargate",
                  "AWS CDK",
                  "CloudFront",
                  "S3",
                  "DynamoDB",
                  "SQS",
                  "Kinesis",
                  "Redshift",
                  "CloudWatch",
                  "X-Ray",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-white/[0.03] border border-white/5 p-3 rounded-lg flex items-center gap-2 hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-xs font-medium text-neutral-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* 2. SECURITY (Tall - OPTIMIZED) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4 row-span-2">
            <SpotlightCard
              className="h-full p-6 relative overflow-hidden flex flex-col"
              spotlightColor="rgba(16, 185, 129, 0.15)"
            >
              {/* Background Radar Animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-[400px] h-[400px] border border-dashed border-emerald-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-[400px] h-[1px] bg-emerald-500/10 absolute" />
                </motion.div>
                <div className="absolute w-[250px] h-[250px] border border-emerald-500/10 rounded-full" />
              </div>

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                  <ShieldCheck className="text-emerald-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Zero Trust Security
                </h3>
                <p className="text-sm text-neutral-400">
                  Comprehensive IAM, WAF, & Shield coverage.
                </p>
              </div>

              {/* Content Stack */}
              <div className="relative z-10 flex flex-col flex-1 justify-between gap-4">
                {/* Module 1 */}
                <div className="p-4 rounded-xl bg-neutral-950/50 border border-white/10 backdrop-blur-sm flex items-center gap-4 group hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Lock size={18} className="text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="text-xs text-neutral-400 font-bold tracking-wider">
                        IDENTITY
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">
                      IAM Identity Center
                    </div>
                  </div>
                </div>

                {/* Module 2 */}
                <div className="p-4 rounded-xl bg-neutral-950/50 border border-white/10 backdrop-blur-sm flex items-center gap-4 group hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Globe size={18} className="text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="text-xs text-neutral-400 font-bold tracking-wider">
                        NETWORK
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                        <span className="text-[10px] text-emerald-500/80 font-mono">
                          SECURE
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">
                      VPC & Transit Gateway
                    </div>
                  </div>
                </div>

                {/* Module 3 */}
                <div className="p-4 rounded-xl bg-neutral-950/50 border border-white/10 backdrop-blur-sm flex items-center gap-4 group hover:border-emerald-500/30 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10">
                    <Key size={18} className="text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="text-xs text-neutral-400 font-bold tracking-wider">
                        ENCRYPTION
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                        <span className="text-[10px] text-emerald-500/80 font-mono">
                          KMS-AES-256
                        </span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-white">
                      KMS & ACM Manager
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* 3. IaC & AUTOMATION (Wide) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-6 row-span-1">
            <SpotlightCard
              className="h-full p-6 flex flex-col justify-between"
              spotlightColor="rgba(168, 85, 247, 0.15)"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <Workflow className="text-purple-400" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Infrastructure as Code
                  </h3>
                  <p className="text-xs text-neutral-400">
                    AWS Cloud Development Kit (CDK)
                  </p>
                </div>
              </div>

              <div className="relative bg-black/50 rounded-lg p-3 font-mono text-[10px] md:text-xs text-neutral-300 border border-white/5 overflow-hidden mt-4">
                <div className="flex gap-1.5 mb-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <div className="opacity-80 leading-relaxed">
                  <span className="text-purple-400">const</span> stack ={" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-yellow-200">CdkStack</span>(app,{" "}
                  <span className="text-green-400">'Prod'</span>);
                  <br />
                  <span className="text-neutral-500">
                    // Define scalable resources
                  </span>
                  <br />
                  <span className="text-blue-400">new</span>{" "}
                  lambda.Function(stack,{" "}
                  <span className="text-green-400">'API'</span>, {"{"}...{"}"});
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* 4. LANGUAGES & CORE (Wide) */}
          <div className="col-span-1 md:col-span-6 lg:col-span-6 row-span-1">
            <SpotlightCard
              className="h-full flex flex-col"
              spotlightColor="rgba(251, 191, 36, 0.15)"
            >
              <div className="px-6 pt-6 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    <Code2 className="text-amber-400" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Core Engineering
                  </h3>
                </div>
                <Activity className="text-neutral-700" size={24} />
              </div>
              <div className="px-6 pb-6 mt-auto">
                <TechGrid />
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

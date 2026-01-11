"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpenCheck,
  Sparkles,
  Calendar,
  Award,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const StatusBadge = ({ status }: { status: "active" | "completed" }) => {
  if (status === "active") {
    return (
      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        In Progress
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-400 border border-white/5">
      <CheckCircle2 className="w-3 h-3" />
      Completed
    </span>
  );
};

const EducationCard = ({
  title,
  subtitle,
  period,
  description,
  status,
  type,
  index,
}: any) => {
  const isDegree = type === "degree";
  const colorClass = isDegree
    ? "group-hover:text-blue-400"
    : "group-hover:text-emerald-400";
  const borderClass = isDegree
    ? "group-hover:border-blue-500/30"
    : "group-hover:border-emerald-500/30";
  const bgGlow = isDegree ? "bg-blue-500/5" : "bg-emerald-500/5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      {/* Active Glow Behind Card */}
      {status === "active" && (
        <div
          className={`absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl ${
            isDegree ? "bg-blue-500/20" : "bg-emerald-500/20"
          }`}
        />
      )}

      <div
        className={`relative h-full p-6 sm:p-8 rounded-3xl bg-neutral-900/80 backdrop-blur-sm border border-white/10 ${borderClass} transition-all duration-300 hover:translate-y-[-2px]`}
      >
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-3xl pointer-events-none" />

        {/* Watermark Icon */}
        <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
          {isDegree ? <GraduationCap size={120} /> : <Award size={120} />}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4 gap-4">
            <div>
              <h4
                className={`text-xl font-bold text-white mb-1 transition-colors ${colorClass}`}
              >
                {title}
              </h4>
              <p className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                {subtitle}
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <span className="text-neutral-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {period}
                </span>
              </p>
            </div>
            <StatusBadge status={status} />
          </div>

          <div
            className={`h-px w-full bg-gradient-to-r from-white/10 to-transparent my-4 group-hover:from-white/20 transition-colors`}
          />

          <p className="text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const Education = () => {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-4">
            Education & Certifications
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Continuous learning is the core of my engineering philosophy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT COLUMN: Formal Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 pl-2">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Background
              </h3>
            </div>

            <div className="space-y-6">
              <EducationCard
                title="M.Tech Artificial Intelligence & Machine Learning"
                subtitle="BITS Pilani"
                period="2025 - 2027"
                description="M.Tech. Artificial Intelligence and Machine Learning is a 4-semester programme designed for working professionals to equip them with future-proof and relevant skills."
                status="active"
                type="degree"
                index={0}
              />
              <EducationCard
                title="B.Tech in Computer Science"
                subtitle="Amrita Vishwa Vidyapeetham"
                period="2018 - 2022"
                description="Amrita is a multi-disciplinary, research-intensive, private university, educating a vibrant student population of over 20,000 by 1700+ strong faculty."
                status="completed"
                type="degree"
                index={1}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Certifications */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 pl-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-6">
              <EducationCard
                title="AWS Security Specialty"
                subtitle="Udemy"
                period="Current"
                description="This exam validates your expertise in creating and implementing security solutions in the AWS Cloud."
                status="active"
                type="cert"
                index={3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

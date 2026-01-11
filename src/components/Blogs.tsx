"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Feather, Calendar, Tag } from "lucide-react";

// --- Types ---
interface Blog {
  title: string;
  platform: string;
  date: string;
  description: string;
  link: string;
  tags: string[];
  gradient?: string; // Optional custom gradient for the card header
}

// --- Data ---
const blogs: Blog[] = [
  {
    title: "Secure OIDC Bridge: GitHub Actions & AWS",
    platform: "Medium",
    date: "April 2025",
    description:
      "A deep dive into eliminating long-lived AWS credentials by architecting a secure OpenID Connect (OIDC) identity provider for GitHub Actions pipelines.",
    link: "https://medium.com/@conceptcodinggeeks/implementing-oidc-bridge-between-github-and-aws-using-aws-cdk-typescript-0d4f99e80418",
    tags: ["AWS IAM", "OIDC", "Security", "DevOps"],
    gradient: "from-blue-500 via-purple-500 to-indigo-500",
  },
  // Example of a second post to show grid layout (Uncomment to test)
  /*
  {
    title: "Scaling React Server Components",
    platform: "Dev.to",
    date: "May 2025",
    description: "Exploring the performance benefits and architectural shifts required when moving large-scale enterprise apps to React Server Components.",
    link: "#",
    tags: ["React", "Next.js", "Performance"],
    gradient: "from-emerald-400 via-cyan-500 to-teal-500",
  }
  */
];

// --- Components ---

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <motion.a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full w-full max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* 1. Card Glow Effect (Behind) */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${
          blog.gradient || "from-blue-500 to-purple-600"
        } rounded-[2rem] opacity-0 blur-2xl group-hover:opacity-20 transition duration-700`}
      />

      {/* 2. Main Card Container */}
      <div className="relative h-full flex flex-col bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 dark:shadow-none">
        
        {/* Decorative Header (Abstract Gradient Art) */}
        <div className="h-32 w-full overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${blog.gradient || "from-blue-600 to-violet-600"} opacity-90`} />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            
            {/* Platform Badge Overlay */}
            <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-bold text-gray-900 dark:text-white tracking-wide uppercase">
                  {blog.platform}
                </span>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex flex-col flex-grow">
          
          {/* Date Row */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 dark:text-neutral-500 mb-4 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>{blog.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-8 line-clamp-3">
            {blog.description}
          </p>

          {/* Footer (Tags & Action) */}
          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-4">
            
            {/* Tags (Scrollable if too many) */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar mask-gradient">
              {blog.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase font-bold text-gray-500 dark:text-neutral-400 bg-gray-100 dark:bg-white/5 rounded-md whitespace-nowrap"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Read Button */}
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
               <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export const Blogs = () => {
  return (
    <section className="py-32 px-4 bg-white dark:bg-black relative overflow-hidden">
      
      {/* --- Cinematic Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Glow Spots */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:ring-white/10"
          >
            <Feather className="w-6 h-6" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Writing</span>
          </motion.h2>
          
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl text-gray-600 dark:text-neutral-400 leading-relaxed"
          >
            In-depth guides on cloud architecture, security patterns, and engineering resilience.
          </motion.p>
        </div>

        {/* --- Blog Grid --- */}
        {/* 'justify-center' ensures if there is 1 item, it's perfectly centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog, index) => (
             <div key={index} className="w-full md:w-[calc(50%-1rem)]">
                <BlogCard blog={blog} index={index} />
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};
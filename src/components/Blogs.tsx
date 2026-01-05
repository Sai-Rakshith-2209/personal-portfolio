"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Secure OIDC Bridge: GitHub Actions & AWS",
    platform: "Medium",
    date: "April 2025",
    description:
      "A deep dive into eliminating long-lived AWS credentials by architecting a secure OpenID Connect (OIDC) identity provider for GitHub Actions pipelines.",
    link: "https://medium.com/@conceptcodinggeeks/implementing-oidc-bridge-between-github-and-aws-using-aws-cdk-typescript-0d4f99e80418",
    tags: ["AWS IAM", "OIDC", "Security", "DevOps"],
  },
];

export const Blogs = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Writing
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Sharing architectural patterns and cloud security best practices.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    <BookOpen className="w-4 h-4" />
                    <span>{blog.platform}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                    {blog.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-500 transition-colors">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

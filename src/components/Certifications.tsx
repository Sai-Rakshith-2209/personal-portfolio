"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Professional",
    image: "/badges/sa-pro.png",
    verifyLink:
      "https://www.credly.com/badges/62c2378d-1c12-40cc-bfa4-f154add2abd9/public_url",
    badgeColor: "from-yellow-400 via-orange-500 to-red-500",
    shadowColor: "hover:shadow-orange-500/20",
  },
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    image: "/badges/sa-assoc.png",

    verifyLink:
      "https://www.credly.com/badges/bd0db882-46a7-4129-90aa-69fd0fc6eb41/public_url",
    badgeColor: "from-gray-200 to-gray-400",
    shadowColor: "hover:shadow-gray-500/20",
  },
  {
    name: "AWS Certified Developer",
    level: "Associate",
    image: "/badges/dev-assoc.png",

    verifyLink:
      "https://www.credly.com/badges/4c6e7062-b416-4f99-bd98-2a93b5ee538f/public_url",
    badgeColor: "from-blue-200 to-blue-400",
    shadowColor: "hover:shadow-blue-500/20",
  },
];

export const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Validated expertise in cloud architecture and development.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.verifyLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-1 rounded-2xl bg-gradient-to-br ${cert.badgeColor} cursor-pointer`}
            >
              {/* Inner Card Content */}
              <div
                className={`h-full w-72 p-6 bg-white dark:bg-gray-900 rounded-xl flex flex-col items-center justify-between gap-6 transition-all shadow-xl ${cert.shadowColor} border border-transparent dark:border-white/10`}
              >
                {/* Badge Image */}
                <div className="relative w-32 h-32 drop-shadow-2xl">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                    {cert.name}
                  </h3>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full ${
                      cert.level === "Professional"
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    {cert.level}
                  </span>
                </div>

                {/* "Verify" Button Effect */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-blue-500 transition-colors">
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

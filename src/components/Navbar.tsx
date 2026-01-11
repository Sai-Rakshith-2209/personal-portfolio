"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50">
      <nav className="relative flex items-center gap-1 p-2 rounded-full bg-black/40 border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] backdrop-blur-xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-20 ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-800 rounded-full -z-10 border border-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          );
        })}

        {/* Decorative subtle glow behind the navbar */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-full" />
      </nav>
    </div>
  );
};

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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <div className="flex items-center gap-1 p-1 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-900/20">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white" : "text-gray-400 hover:text-blue-400"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  // 1. THE GLOWING GRADIENT PILL
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

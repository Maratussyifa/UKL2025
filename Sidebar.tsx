"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, User, Briefcase } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <LayoutDashboard size={20} />, link: "/home" },
    { name: "Writer", icon: <User size={20} />, link: "/writer" },
    { name: "Reading Book", icon: <Briefcase size={20} />, link: "/readingbook" },
  ];

  return (
    <motion.aside
      animate={{ width: isOpen ? 220 : 70 }}
      transition={{ duration: 0.28 }}
      className="h-screen bg-yellow-50 shadow-md border-r border-yellow-100
                 flex flex-col py-6 fixed left-0 top-0 z-50"
    >
      {/* HEADER */}
      <div className="px-4 font-bold text-lg flex justify-between items-center mb-4">
        {isOpen && <span className="text-gray-700">Menu</span>}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white border rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          {isOpen ? "‹" : "›"}
        </button>
      </div>

      {/* MENU */}
      <ul className="px-2 space-y-2 mt-2">
        {menuItems.map((item, i) => (
          <li key={i}>
            <Link
              href={item.link}
              className="flex items-center gap-4 p-3 rounded-xl 
                         hover:bg-pink-200 transition text-gray-700 font-medium"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* FOOTER USER BUBBLE */}
      <div className="mt-auto px-4">
        <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">
          N
        </div>
      </div>
    </motion.aside>
  );
}

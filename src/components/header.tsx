"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Gallery", href: "/gallery" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const curve = {
  initial: { d: "M100 0 L100 100 Q-100 50 100 0" },
  enter: {
    d: "M100 0 L100 100 Q100 50 100 0",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: "M100 0 L100 100 Q-100 50 100 0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className="fixed right-5 top-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 md:right-10 md:top-10"
        aria-label="Toggle Menu"
      >
        <div className="relative h-6 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform duration-300 ${
              isActive ? "translate-y-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute left-0 top-3 h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isActive ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`absolute left-0 top-6 h-0.5 w-6 bg-white transition-transform duration-300 ${
              isActive ? "-translate-y-3 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed right-0 top-0 z-40 h-screen w-full bg-white shadow-lg md:w-[400px]"
          >
            <div className="flex h-full flex-col justify-between p-10">
              <nav className="mt-20">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={144}
                  height={40}
                  className="mb-10"
                />
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="mb-4"
                  >
                    <Link
                      href={item.href}
                      className={`text-2xl font-light transition-colors hover:text-orange-500 md:text-4xl ${
                        selectedIndicator === item.href
                          ? "text-orange-500"
                          : "text-black"
                      }`}
                      onClick={() => {
                        setSelectedIndicator(item.href);
                        setIsActive(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex justify-between text-sm text-gray-500">
                <span>© {new Date().getFullYear()} Shree Sai Photography</span>
                {/* <span>Privacy Policy</span> */}
              </div>
            </div>
            <svg
              className="absolute -left-24 top-0 h-full w-24 fill-white stroke-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

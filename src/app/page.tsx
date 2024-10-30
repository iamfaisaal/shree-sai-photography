"use client";

import Card from "@/components/card";
import Character from "@/components/character";
import Heading from "@/components/heading";
import SlidingImages from "@/components/slidingImages";
import ZoomParallax from "@/components/zoom-parallax";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <main className="flex flex-col items-center justify-center p-24 h-screen">
        <div className="text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={MULTIDIRECTION_SLIDE_VARIANTS}
            transition={{ duration: 1 }}
            className="uppercase text-white tracking-[0.5rem] md:tracking-[1.5rem] font-medium py-4 md:py-8 text-3xl md:text-5xl lg:text-7xl text-center"
          >
            Shree Sai Photography
          </motion.h1>
          <motion.div
            initial="right"
            animate="visible"
            variants={MULTIDIRECTION_SLIDE_VARIANTS}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-lg text-white md:text-xl max-w-xl mx-auto mb-8 px-4">
              Capturing moments, creating memories. Experience the art of
              photography with our professional and passionate team.
            </p>
            <Link
              href="/contact"
              className="px-6 py-4 md:px-8 md:py-6 bg-transparent border border-white text-white uppercase tracking-[0.25rem] md:tracking-[0.5rem] transition duration-200 hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
        <video
          src="/video2.mp4"
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[-2]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>
      </main>

      <div className="bg-black">
        <div className="py-32">
          <Character
            paragraph={
              "Welcome to Shree Sai Photography, where passion, precision, and creativity turn your cherished moments into timeless photographs."
            }
          />
        </div>
      </div>

      <div className="py-36 bg-[#F4F4F4]">
        <Heading words="Our Best Shots." />
        <ZoomParallax />
      </div>

      <div className="py-36 bg-[#F4F4F4]">
        <Heading words="Our Photography Services" />
        <Card />
      </div>

      <SlidingImages />
    </>
  );
}

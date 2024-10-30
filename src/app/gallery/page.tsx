"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import SubPageHeader from "@/components/SubPageHeader";

const images = [
  "img-1.jpeg",
  "img-2.jpeg",
  "img-3.jpeg",
  "img-4.jpg",
  "img-5.jpeg",
  "img-6.jpeg",
  "img-1.jpeg",
  "img-2.jpeg",
  "img-3.jpeg",
  "img-4.jpg",
  "img-5.jpeg",
  "img-6.jpeg",
];

export default function Gallery() {
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
      <SubPageHeader title="Gallery" />

      <main className="min-h-screen bg-[rgb(45,45,45)] p-4 md:p-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mx-auto max-w-7xl">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                <Image
                  src={`/${src}`}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}

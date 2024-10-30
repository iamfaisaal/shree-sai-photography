"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "img-2.jpeg",
  },
  {
    color: "#d6d7dc",
    src: "img-1.jpeg",
  },
  {
    color: "#e3e3e3",
    src: "img-3.jpeg",
  },
  {
    color: "#21242b",
    src: "img-4.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "img-5.jpeg",
  },
  {
    color: "#e5e0e1",
    src: "img-6.jpeg",
  },
  {
    color: "#d7d4cf",
    src: "img-4.jpg",
  },
  {
    color: "#e1dad6",
    src: "img-5.jpeg",
  },
];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div
      ref={container}
      className="relative z-10 overflow-hidden bg-white py-10 md:py-20"
    >
      <div className="flex flex-col gap-6 md:gap-[3vw]">
        {/* First Slider */}
        <motion.div
          style={{ x: x1 }}
          className="relative -left-[5vw] flex w-[150vw] gap-4 md:-left-[10vw] md:w-[120vw] md:gap-[3vw]"
        >
          {slider1.map((project, index) => (
            <div
              key={index}
              className="group flex h-[45vw] w-[35vw] items-center justify-center transition-transform duration-300 hover:scale-105 md:h-[20vw] md:w-1/4"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative h-[90%] w-[90%] overflow-hidden rounded-lg md:h-[80%] md:w-[80%]">
                <Image
                  fill
                  alt={`Sliding image ${index + 1}`}
                  src={`/${project.src}`}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 35vw, 25vw"
                  priority={index < 2} // Prioritize loading first two images
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second Slider */}
        <motion.div
          style={{ x: x2 }}
          className="relative -left-[5vw] flex w-[150vw] gap-4 md:-left-[10vw] md:w-[120vw] md:gap-[3vw]"
        >
          {slider2.map((project, index) => (
            <div
              key={index}
              className="group flex h-[45vw] w-[35vw] items-center justify-center transition-transform duration-300 hover:scale-105 md:h-[20vw] md:w-1/4"
              style={{ backgroundColor: project.color }}
            >
              <div className="relative h-[90%] w-[90%] overflow-hidden rounded-lg md:h-[80%] md:w-[80%]">
                <Image
                  fill
                  alt={`Sliding image ${index + 5}`}
                  src={`/${project.src}`}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 35vw, 25vw"
                  priority={index < 2} // Prioritize loading first two images
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

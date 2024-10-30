"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SubPageHeader = (props: { title: string }) => {
  return (
    <section className="relative h-[50vh] bg-gradient-to-b from-black/70 to-black/30">
      <Image
        src="https://img.freepik.com/premium-photo/professional-cameras-with-different-lenses-black-background_1015293-66108.jpg?w=740"
        alt="Professional camera equipment"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-3 text-center drop-shadow-md"
        >
          {props.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-light text-center max-w-2xl drop-shadow-sm"
        >
          Creating timeless memories through the art of photography
        </motion.p>
      </div>
    </section>
  );
};

export default SubPageHeader;

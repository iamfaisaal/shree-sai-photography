"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface HeadingProps {
  words: string;
}

const Heading = ({ words }: HeadingProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.h1
      variants={container}
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: false }}
      className="text-center text-black text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] py-5"
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Heading;

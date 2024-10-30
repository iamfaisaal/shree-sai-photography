// Import required packages and images
"use client";
import Picture1 from "../../public/img-3.jpeg";
import Picture2 from "../../public/img-2.jpeg";
import Picture3 from "../../public/img-1.jpeg";
import Picture4 from "../../public/img-4.jpg";
import Picture5 from "../../public/img-5.jpeg";
import Picture6 from "../../public/img-6.jpeg";
import Picture7 from "../../public/img-1.jpeg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  return (
    <div ref={container} className="container">
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className="el">
            <div className="imageContainer">
              <Image
                src={src}
                fill
                alt="image"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

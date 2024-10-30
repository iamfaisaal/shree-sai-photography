"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  src: string;
};

export const projects = [
  {
    title: "Album",
    description:
      "Imagine gathering with loved ones around a cherished photo album. We specialize in preserving these moments, allowing everyone—whether present at the time or not—to relive the experience. You choose the memories that fill this beautiful album, treasured for its tactile cover, vivid colors, and the comforting sound of turning pages. For all ages, it becomes a bonding experience.",
    src: "https://img.freepik.com/premium-vector/instant-element-photo-frames-collage-with-realistic-design-premium-vector_609667-166.jpg?w=826",
  },
  {
    title: "Photos & Camera",
    description:
      "Our passion for photography stems from a love for preserving moments. It's magical to capture crucial events and keep special memories alive. A camera helps you stay connected to the past and relive fond times. Let us capture your important memories.",
    src: "https://img.freepik.com/premium-photo/3d-modern-camera-isolated_752325-33669.jpg?w=900",
  },
  {
    title: "Video Shoot",
    description:
      "Never miss a funny or emotional moment again. Our skilled videographers capture every significant detail, allowing you to relive the experience as if you were there. No more forgetting those precious moments.",
    src: "https://img.freepik.com/premium-photo/professional-camera-crew-filming-scene-set_1282444-86884.jpg?w=826",
  },
  {
    title: "Drone Shoot",
    description:
      "Need to capture tough angles, shoot over water, or navigate between trees? For dramatic wedding videos and sweeping footage from unreachable heights, drone videography is the perfect solution.",
    src: "https://img.freepik.com/premium-photo/flying-mobile-drone-sky-with-mountain-range-sunset_302321-6007.jpg?w=740",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-square overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={project.src}
        alt={project.title}
        fill
        className="object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-xl font-semibold p-4">
          {project.title}
        </h3>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 1, borderRadius: "0%" }}
            exit={{ scale: 0, borderRadius: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-4"
          >
            <h3 className="text-white text-xl font-semibold mb-2 text-center">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm text-center">
              {project.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Card;

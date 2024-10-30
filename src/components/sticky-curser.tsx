"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CircleWithDotCursor() {
  const cursorSize = 30;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      className="fixed z-50 pointer-events-none hidden sm:block"
    >
      <svg width={cursorSize} height={cursorSize} viewBox="0 0 30 30">
        <circle
          cx="15"
          cy="15"
          r="14"
          fill="none"
          stroke="#DA6025"
          strokeWidth="1"
        />
        <circle cx="15" cy="15" r="3" fill="#DA6025" />
      </svg>
    </motion.div>
  );
}

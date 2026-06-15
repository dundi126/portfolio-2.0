"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimateIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 94%", "end 6%"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 0.13, 0.84, 1], [0, 1, 1, 0]);
  const yProgress = useTransform(scrollYProgress, [0, 0.13, 0.84, 1], [22, 0, 0, -22]);
  const opacity = useSpring(opacityProgress, { stiffness: 180, damping: 28, mass: 0.35 });
  const y = useSpring(yProgress, { stiffness: 180, damping: 28, mass: 0.35 });

  return (
    <motion.div
      ref={target}
      className={className}
      style={reduceMotion ? undefined : { opacity, y }}
    >
      {children}
    </motion.div>
  );
}

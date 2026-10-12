"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
  y?: number;
};

export function RevealOnScroll({ children, delay = 0, className, as = "div", y = 18 }: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

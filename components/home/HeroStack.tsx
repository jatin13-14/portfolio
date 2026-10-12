"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { TiltCard } from "@/components/ui/TiltCard";

/**
 * The hero's 3D visual: the core stack (React → Django → PostgreSQL → AWS →
 * AI) rendered as a fanned deck of cards with real depth (translateZ per
 * layer), tilting together toward the cursor via TiltCard. Deliberately
 * simple — five flat chips, no gradients or clutter — so the "3D" comes from
 * genuine depth and motion rather than decoration.
 */
export function HeroStack() {
  return (
    <TiltCard maxTilt={10} className="mx-auto w-full max-w-sm">
      <div style={{ transformStyle: "preserve-3d" }} className="relative h-72 sm:h-80">
        {profile.hero.stack.map((item, index) => {
          const depth = index * 22;
          const offset = index * 14;
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform: `translate3d(${offset}px, ${offset}px, ${depth}px)`,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-x-0 top-0 flex items-center justify-between rounded-xl border border-[var(--border-strong)] bg-[var(--bg-raised)] px-5 py-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
            >
              <span className="text-sm font-medium text-[var(--fg)]">{item}</span>
              <span className="font-mono text-xs text-[var(--fg-faint)]">{String(index + 1).padStart(2, "0")}</span>
            </motion.div>
          );
        })}
      </div>
    </TiltCard>
  );
}

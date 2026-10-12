"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data/profile";
import { Button } from "@/components/ui/Button";
import { HeroStack } from "@/components/home/HeroStack";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-20 sm:pt-28">
      <div className="container-content grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-[var(--fg-dim)]">{profile.status}</span>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-display-lg font-semibold text-[var(--fg)] text-balance"
          >
            {profile.hero.headline}
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--fg-dim)] text-balance"
          >
            {profile.hero.subline}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/#work" showArrow>
              View my work
            </Button>
            <Button href="/#contact" variant="secondary">
              Let&rsquo;s talk
            </Button>
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 text-sm text-[var(--fg-faint)]"
          >
            {profile.yearsExperience} building production software
          </motion.p>
        </div>

        <div className="hidden lg:block">
          <HeroStack />
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./lamp";
import ColourfulText from "./colourful-text";
import Link from "next/link";

export function HeroLamp() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-4 mt-8">
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Ace all your exams with <br /> <ColourfulText text="Quizzly" />
        </h1>
        <Link href='/select-quiz'>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-background px-8 py-4 md:px-12 md:py-4 text-sm md:text-base rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-foreground transition duration-200">
            Get Started
          </button>
        </Link>
      </motion.div>
    </LampContainer>
  );
}

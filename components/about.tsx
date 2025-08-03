"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With 4 years of hands-on experience as a full-stack developer, I’ve
        mastered the art of balancing ambition and discipline. While completing
        my engineering studies, I dedicated my afternoons to intensive coding
        lessons, transforming curiosity into expertise. This unique journey
        taught me to thrive under pressure and adapt quickly to new challenges.
        I’m passionate about building seamless digital experiences and enjoy
        collaborating with others to turn ideas into reality. My core stack
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and Nest.js
        </span>
        , and I’m always eager to learn and grow in the ever-evolving world of
        technology.
      </p>
    </motion.section>
  );
}

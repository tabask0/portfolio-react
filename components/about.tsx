"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref, inView } = useSectionInView("About"); // Include inView

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // Use inView to control animation
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p variants={itemVariants} className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Informatics</span>, I decided to pursue my
        passion for programming. I started as a frontend developer and went
        right into{" "}
        <span className="font-medium">full-stack web development</span>. My
        favorite part of programming is the problem-solving aspect. I love the
        feeling of challenging myself and being able to sort it out. My core
        stack is{" "}
        <span className="font-medium">React, Node.js, and MongoDB</span>. I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-bold">fullstack job/colaboration</span> as a
        software developer.
      </motion.p>

      <motion.p variants={itemVariants}>
        <span>When I'm not coding</span>, I enjoy playing video games, riding my
        motorcycle, and playing with my cat.
      </motion.p>
    </motion.section>
  );
}

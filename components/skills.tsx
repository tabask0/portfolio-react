"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const randomColor = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const [gradientColors, setGradientColors] = useState({
    color1: "",
    color2: "",
  });

  const handleHover = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    setGradientColors({ color1, color2 });
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 transition"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{
              background: `linear-gradient(135deg, ${gradientColors.color1} 0%, ${gradientColors.color2} 100%)`,
              scale: 1.15,
            }}
            onHoverStart={handleHover}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mr-2"
              >
                {/* Render the icon component based on the hovered index */}
                <skill.icon />
              </motion.div>

              {skill.name}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

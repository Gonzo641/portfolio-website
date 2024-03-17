"use client";

import React from "react"
import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "./section-heading"
import { skillsData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks";

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

export default function Skills() {

    const { ref } = useSectionInView('Skills');

  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem]
    scroll-mt-28 text-center sm:mb-40">
        <SectionHeading>My skills</SectionHeading>
        <ul className="flex flex-wrap justify-center items-center
        gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li className="bg-white borderBlack
                rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                  }}
                custom={index}
                >
                  <Image 
                  src={skill.imageUrl}
                  alt="image"
                  width={20}
                  height={20}
                  className="mx-auto"
                  />
                  {skill.title}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}
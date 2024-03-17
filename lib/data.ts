import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import welina from "@/public/welina2.png";
import pizza from "@/public/PizzaMama.png";
import guylaine from "@/public/guylaine-app.png";

import html from "@/public/html.png";
import css from "@/public/css.png";
import tailwind from "@/public/tailwind.png";
import javascript from "@/public/javascript.png";
import typescript from "@/public/typescript.png";
import react from "@/public/react.png";
import nextjs from "@/public/next-js.png";
import redux from "@/public/redux.png";
import prisma from "@/public/prisma.png";
import framer from "@/public/framer.png";
import python from "@/public/python.png";
import django from "@/public/django.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Welina massages",
    description:
      "Site for a massage institute",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "FramerMotion"],
    imageUrl: welina,
    url: "https://app-welina.vercel.app/",
  },
  {
    title: "Food",
    description:
      "Exemple of site for fast food restaurant",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux Toolkit", "FramerMotion"],
    imageUrl: pizza,
    url: "https://pepe-test-five.vercel.app/",
  },
  {
    title: "Guylaine Shiatsu",
    description:
      "Website for my client Guylaine, who does Reflexology, Chi Nei Tsang and Shiatsu.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "FramerMotion"],
    imageUrl: guylaine,
    url: "https://guylaine-app.vercel.app/",
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Tailwind",
//   "Redux",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;
export const skillsData = [
  {
    title : "HTML",
    imageUrl: html,
  },
  {
    title : "CSS",
    imageUrl: css,
  },
  {
    title : "JavaScript",
    imageUrl: javascript,
  },
  {
    title : "TypeScript",
    imageUrl: typescript,
  },
  {
    title : "React.js",
    imageUrl: react,
  },
  {
    title : "Next.js",
    imageUrl: nextjs,
  },
  {
    title : "Tailwind",
    imageUrl: tailwind,
  },
  {
    title : "Redux",
    imageUrl: redux,
  },
  {
    title : "Python",
    imageUrl: python,
  },
  {
    title : "Django",
    imageUrl: django,
  },
  {
    title : "Framer Motion",
    imageUrl: framer,
  },
  {
    title : "Prisma",
    imageUrl: prisma,
  },
] as const;
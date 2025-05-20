"use client";
import React from "react";
import { FaReact } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { motion } from "framer-motion";
import { DiGithub } from "react-icons/di";
import Header from "../Header/Header";
const languages = [
  { icon: <SiTypescript size={36} />, language: "TypeScript", id: 1 },
  { icon: <SiJavascript size={36} />, language: "JavaScript", id: 2 },
  { icon: <TbBrandGolang size={36} />, language: "Golang", id: 3 },
  { icon: <PiFileSqlFill size={36} />, language: "SQL", id: 4 },
  { icon: <FaReact size={36} />, language: "React", id: 5 },
  { icon: <RiTailwindCssLine size={36} />, language: "Tailwind", id: 6 },
  { icon: <DiGithub size={36} />, language: "Github", id: 7 },
];
export const SkillSection = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center">
      <Header title="Skills"/>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
        {languages.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: skill.id * 0.1,
            }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p>{skill.language}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// export default SkillSection;

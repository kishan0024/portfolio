"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "../Header/Header";
const About = () => {
  return (
    <motion.div
      className="w-full h-dvh sm:p-7 flex flex-col justify-evenly items-center"
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 4 * 0.1,
      }}
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-row items-center justify-center w-full">
        <div className="w-1/2 text-center">
          <img src="/about.png" className="" />
        </div>
        <div className="w-1/2 h-full text-center flex flex-col justify-start items-start">
          <Header title="About Me" />
          <motion.div className="text-justify gap-2 text-xl mt-3">
            <div>
              {" "}
              I&apos;m a passionate full-stack developer specializing in React.js &
              Golang. I thrive on blending technical expertise with sleek
              UI/UX design to build high-performing, user-friendly applications.
            </div>
            <div className="mt-3">
              My web development journey started in 2023, and since then,
              I&apos;ve continuously evolved, taking on new challenges and keeping up
              with the latest technologies. Today, I build cutting-edge web
              applications using TypeScript, ReactJS, TailwindCSS,
              Golang, and more.
            </div>
              {/* <div className="mt-3">
                Beyond coding, I enjoy **Twitter**, engaging with **Indie
                Hackers**, ourney of **early-stage startups**. Feel free t tter**
                or check out my projects on **GitHub**.
              </div> */}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

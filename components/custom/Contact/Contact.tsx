"use client";
import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
export const Contact = () => {
  return (
    <motion.div className="w-full h-dvh sm:p-7 flex flex-col justify-start items-center">
      <Header title="Contact Me" />
    </motion.div>
  );
};

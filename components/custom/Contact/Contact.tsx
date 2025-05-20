"use client";
import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
const projects = [
  {
    companyName: "Middleware.io (YC23)",
    description: "123",
    role: "Full Stack developer",
    period: "June'24 - Current",
    logo: "/middle_logo.jfif",
    key: 1,
  },
  {
    companyName: "Simform Solution LLP.",
    description: "wef",
    role: "Backend developer",
    period: "Jan'23 - June'24",
    logo: "/simform_logo.jfif",
    key: 2,
  },
  {
    companyName: "Birla Vishvakarma Mahavidhyala",
    description: "Completed My UG program here",
    role: "Computer Engineering",
    period: "Jan'19 - Jun'23",
    logo: "/bvm.png",
    key: 3,
  },
];
export const Contact = () => {
  return (
    <motion.div className="w-full h-dvh sm:p-7 flex flex-col justify-start items-center">
      <Header title="Contact Me" />
    </motion.div>
  );
};

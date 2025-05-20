"use client";
import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
const experiance = [
  {
    companyName: "Middleware.io (YC23)",
    description: `Frontend Engineer – Core Infrastructure & Data Visualization

Led the development and enhancement of a core infrastructure module powering reusable frontend components and APIs across multiple products. Built scalable, user-friendly interfaces and complex dashboards using TypeScript, Ant Design, and SCSS. Specialized in data visualization with D3.js and Highcharts, creating dynamic charts and publicly shareable dashboards for observability platforms. Designed intuitive UI/UX for machine learning modules featuring anomaly detection and forecasting. Improved performance by refactoring legacy React.js code, optimizing resource usage for complex UI interactions. Collaborated closely with QA and product teams, leveraging Linear for efficient bug tracking and resolution.`,
    role: "Full Stack developer",
    period: "June'24 - Current",
    logo: "/middle_logo.jfif",
    key: 1,
  },
  {
    companyName: "Simform Solution LLP.",
    description: `Developed scalable and high-performance backend applications using the Gin framework in Golang, with a strong focus on building RESTful APIs featuring request validation and pagination. Optimized API performance through concurrent database queries using goroutines and channels. Wrote efficient SQL queries using both GORM, SQLC, and raw SQL for robust data handling. Ensured code reliability with comprehensive unit testing and maintained clear API specifications using Swagger. Collaborated with cross-functional teams for requirement gathering, deployment, and testing. Streamlined deployments through Docker containerization and integrated AWS services such as SQS, SES, and DynamoDB using the AWS SDK for Golang.`,
    role: "Backend developer",
    period: "Jan'23 - June'24",
    logo: "/simform_logo.jfif",
    key: 2,
  },
  {
    companyName: "Birla Vishvakarma Mahavidhyala",
    description: `Pursuing a Bachelor’s degree in Computer Engineering provided a strong foundation in software development, data structures, algorithms, and computer systems. Actively engaged beyond academics, I served as the Training and Placement Coordinator, acting as a bridge between students and the placement cell to facilitate job and internship opportunities. Additionally, I held the role of Event Manager for the college TechFest, where I led the planning and execution of various technical events, enhancing my leadership, organizational, and team collaboration skills. These experiences enriched my technical education with practical exposure to communication, management, and cross-functional coordination.`,
    role: "Computer Engineering",
    period: "Jan'19 - Jun'23",
    logo: "/bvm.png",
    key: 3,
  },
];
export const Experiance = () => {
  return (
    <motion.div className="w-full h-dvh bg-black text-white sm:p-9 flex flex-col justify-center items-center">
      <Header title="Experiance" />
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-2 my-5">
        {experiance.map((e) => {
          return (
            <motion.div
              key={e.key}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: e.key * 0.1,
              }}
              viewport={{ once: true }}
            >
              <motion.div className="ml-3">
                <li className="mb-10 ms-6">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <img
                      src={e.logo}
                      height={"100%"}
                      width={"100%"}
                      className="rounded-full"
                    />
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
                    {e.role} - {e.companyName}
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {e.period}
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    {e.description}
                  </p>
                </li>
              </motion.div>
            </motion.div>
          );
        })}
      </ol>
    </motion.div>
  );
};

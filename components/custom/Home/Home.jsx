"use client";

import * as React from "react";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import {  SocialMediaCard } from "../Card/Card";
import { FaGithub, FaInstagram, FaLinkedin, FaMailchimp } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export function HomeTab() {
  return (
    <div className="flex flex-row w-full justify-evenly pt-2 mt-3 h-svh overflow-auto px-8">
      <div className="w-1/2 flex flex-col justify-center text-justify">
        <div className=" text-5xl flex flex-row gap-2">
          Hello I'am{"  "}
          <span className="font-bold">
           
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString("Kishan Maheta.")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
              options={{loop:true}}
    
            />
          </span>
        </div>
        <div className=" text-5xl">
          <span className="font-bold">Full Stack</span> <span className="" style={{WebkitTextStroke:"1px black",color:"white"}}>Developer</span> 
        </div>
        <div className=" text-5xl">Based In India.</div>
        <div className="mt-3">
          bio
        </div> 
        <div className="flex flex-row justify-start gap-8 items-start w-full">
          <SocialMediaCard icon={<FaInstagram/>}/>
          <SocialMediaCard icon={<FaLinkedin/>}/>
          <SocialMediaCard icon={<FaGithub/>}/>
          <SocialMediaCard icon={<FiMail/>}/>
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center text-justify">
        <Image
          src={"/illustration1.png"}
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

interface Props{
    icon:React.ReactNode;
    navigation:string;
}

export function SocialMediaCard(props:Props) {
  return (
    <div className="flex flex-row w-12 h-12 justify-evenly items-center cursor-pointer mt-3 border border-black hover:bg-black hover:text-white rounded-sm">
        {props.icon}
    </div>
  );
}

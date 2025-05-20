import { NavBar } from "@/components/custom/NavBar/NavBar";
import { HomeTab } from "@/components/custom/Home/Home";
import {SkillSection} from "@/components/custom/Skills/skills";
import {Experiance} from "@/components/custom/Experiance/Experiance";
import About from "@/components/custom/About/About";
import {Project} from "@/components/custom/Projects/Project";
import { Contact } from "@/components/custom/Contact/Contact";
export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-start justify-items-center  min-h-screen  pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start w-full">
        <NavBar />
        <HomeTab />
        <SkillSection/>
        <Experiance/>
        <About/>
        <Project/>
        <Contact/>
      </div>
      {/* skills section */}

     
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}

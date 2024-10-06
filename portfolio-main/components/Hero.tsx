import { FaLocationArrow } from "react-icons/fa6";
import { FaDownload } from 'react-icons/fa'; 
import { FaLinkedin } from 'react-icons/fa'; 
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#fefefe"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#43b0f1"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       */}
      <div
        className="h-screen w-full dark:bg-[#121212] bg-[#fefefe] dark:bg-grid-white/[0.03] bg-grid-[#121212]/[0.03]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#121212]
         bg-[#fefefe] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-[#43b0f1] max-w-80">
            Empowering Dynamic Digital Solutions
          </p>

          {/**
           *  TextGenerateEffect
           */}
          <TextGenerateEffect
  words="Engineering Concepts into Sophisticated User Interfaces."
  className="text-center text-[40px] md:text-5xl lg:text-6xl sm:text-[32px] xl:text-[72px] text-[#43b0f1]"
/>


          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-[#fefefe]">
            Hi! I&apos;m Birat, Web Developer and Co-Founder of{" "}
            <a
              target="_blank"
              href="https://www.nexolinx.com/"
              className="text-[#43b0f1] hover:none"
            >
              Nexolinx
            </a>
            , based in Nepal.
          </p>
          <div className="flex space-x-4"> 
            <a href="/birat_resume.pdf" download>
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="right"
                otherClasses="bg-[#43b0f1] text-[#fefefe] hover:bg-[#3594c9]"
              />
            </a>
            <a href="www.linkedin.com/in/biratpandey">
              <MagicButton
                title="LinkedIn"
                icon={<FaLinkedin />}
                position="left"
                otherClasses="bg-[#43b0f1] text-[#fefefe] hover:bg-[#3594c9]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

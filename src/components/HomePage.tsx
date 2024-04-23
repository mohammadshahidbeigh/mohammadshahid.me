"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { Dancing_Script } from "next/font/google";
import { useEffect, useRef } from "react";
import ParticlesBg from "./backgroundEffects/ParticlesBg";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage(): JSX.Element {
  const changingTexts = ["Front End Software Developer", "Problem Solver"];
  let typingDelay = 150;
  let delayAfterTyping = 2000; // 3 seconds delay

  const el: any = useRef("");
  const currentIndexRef = useRef(0); // 0 | 1
  const currentTextIndexRef = useRef(0); // string index
  const renderedTextRef = useRef("");
  let timerId: any = null;

  const changeText = () => {
    let curText = renderedTextRef.current;

    if (
      changingTexts[currentIndexRef.current].length >
      currentTextIndexRef.current
    ) {
      curText +=
        changingTexts[currentIndexRef.current][currentTextIndexRef.current];
      renderedTextRef.current = curText;
      currentTextIndexRef.current++;
      if (el && el.current) {
        el.current.innerText = curText;
      }
    } else {
      clearInterval(timerId);
      setTimeout(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % 2;
        currentTextIndexRef.current = 0;
        renderedTextRef.current = "";
        if (el && el.current) {
          el.current.innerText = ""; // Clear the text
        }
        startTyping();
      }, delayAfterTyping);
    }
  };

  const startTyping = () => {
    timerId = setInterval(changeText, typingDelay);
  };

  useEffect(() => {
    startTyping();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div
      id="home-section"
      className=" h-screen flex flex-col justify-center text-center "
    >
      <ParticlesBg />
      <h1
        className={` ${dancing.className} name-title-ui text-[#ffffff] animate-fade-in`}
      >
        Mohammad Shahid Beigh
      </h1>
      <div className="text-lg md:text-xl lg:text-2xl  max-md:text-center text-[#ffffff] animate-fade-in my-1  ">
        I am a{" "}
        <span className="changing-text text-[#0563bb] italic" ref={el}>
          {" "}
        </span>
        <span className="cursor blink text-[#0563bb] italic">|</span>
      </div>
      <div className="social-links flex  justify-center space-x-4    animate-fade-in border border-[#b4b4b4] dark:border-[#1e1e1e] outline-1 w-min mx-auto rounded-md p-2 ">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className=" project-icons hover:bg-sky-700"
        >
          {" "}
          <SiLinkedin className="text-2xl text-[#ffffff] " />{" "}
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          className=" project-icons hover:bg-sky-700 "
        >
          {" "}
          <SiGithub className="text-2xl text-[#ffffff]" />{" "}
        </a>
      </div>
    </div>
  );
}

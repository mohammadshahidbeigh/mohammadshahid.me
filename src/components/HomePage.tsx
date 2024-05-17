"use client";

import { useEffect, useRef, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Dancing_Script } from "next/font/google";
import ParticlesBg from "./backgroundEffects/ParticlesBg";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import Image from "next/image"; // Import the Image component from Next.js

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage(): JSX.Element {
  const changingTexts = ["Front End Software Engineer", "Problem Solver"];
  const typingDelay = 150;
  const delayAfterTyping = 2000;

  const el: any = useRef("");
  const currentIndexRef = useRef(0);
  const currentTextIndexRef = useRef(0);
  const renderedTextRef = useRef("");
  let timerId: any = null;

  const [profileViews, setProfileViews] = useState<string | null>(null);

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
          el.current.innerText = "";
        }
        startTyping();
      }, delayAfterTyping);
    }
  };

  const startTyping = () => {
    timerId = setInterval(changeText, typingDelay);
  };

  const fetchProfileViews = async () => {
    try {
      console.log("Fetching profile views...");
      const response = await fetch("/api/profile-views");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Profile views data:", data);
      setProfileViews(data.message);
    } catch (error) {
      console.error("Error fetching profile views:", error);
    }
  };

  useEffect(() => {
    startTyping();
    fetchProfileViews();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div
      id="home-section"
      className="h-screen flex flex-col justify-center text-center relative"
    >
      <ParticlesBg />
      <div className="relative">
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl mb-12 relative">
            <div className="border-2 border-black rounded-full w-full h-full absolute animate-spin-fast"></div>
            <Image
              src="/Image.png"
              alt="My Profile Picture"
              width={260}
              height={260}
              className="object-cover"
            />
          </div>
        </div>
        <h1
          className={`absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 ${dancing.className} name-title-ui text-white animate-fade-in`}
        >
          Mohammad Shahid Beigh
        </h1>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl max-md:text-center text-white animate-fade-in my-1 mt-8">
        I am a{" "}
        <span className="changing-text text-blue-500 italic" ref={el}></span>
        <span className="cursor blink text-blue-500 italic">|</span>
      </div>
      <div className="social-links flex justify-center space-x-4 animate-fade-in border border-white dark:border-black outline-1 w-min mx-auto rounded-md p-2 ">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          className="project-icons hover:bg-blue-500"
        >
          <SiLinkedin className="text-2xl text-white" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          className="project-icons hover:bg-blue-500"
        >
          <SiGithub className="text-2xl text-white" />
        </a>
      </div>
      <div className="flex justify-center space-x-4 mx-auto p-2">
        <button
          onClick={() => window.open("/resume.pdf", "_blank", "noopener")}
          className="bg-blue-500 font-bold py-1 px-4 rounded mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          View Resume
        </button>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="bg-white-500 font-bold py-1 px-4 rounded mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Download Resume
        </a>
      </div>
      {profileViews !== null && (
        <button className="bg-blue-500 font-bold py-1 px-4 rounded mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-text">
          Profile Views: {profileViews}
        </button>
      )}
    </div>
  );
}

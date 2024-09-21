"use client";

import {useEffect, useRef, useState} from "react";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiStackoverflow,
} from "react-icons/si";
import {Dancing_Script} from "next/font/google";
import ParticlesBg from "./backgroundEffects/ParticlesBg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  X_URL,
  STACKOVERFLOW_URL,
} from "../constants";
import Image from "next/image";

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage(): JSX.Element {
  const changingTexts = [
    "Full Stack AI Software Engineer",
    "Problem Solver",
    "Full Stack AI Developer",
    "Tech Enthusiast",
  ];

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
        currentIndexRef.current =
          (currentIndexRef.current + 1) % changingTexts.length;
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
            <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>
            </div>
            <Image
              src="/Image.png"
              alt="My Profile Picture"
              width={260}
              height={260}
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
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
          rel="noopener noreferrer"
          className="project-icons hover:bg-blue-500"
        >
          <SiLinkedin className="text-2xl text-white" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icons hover:bg-black-500"
        >
          <SiGithub className="text-2xl text-white" />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icons hover:bg-pink-500"
        >
          <SiInstagram className="text-2xl text-white" />
        </a>
        <a
          href={X_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icons hover:bg-blue-400"
        >
          <SiTwitter className="text-2xl text-white" />
        </a>
        <a
          href={STACKOVERFLOW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icons hover:bg-orange-500"
        >
          <SiStackoverflow className="text-2xl text-white" />
        </a>
      </div>
      <div className="flex justify-center space-x-4 mx-auto p-2">
        <button
          onClick={() => window.open("/resume.pdf", "_blank", "noopener")}
          className="font-bold py-2 px-6 rounded-full mt-4 text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          View Resume
        </button>
        <a
          href="/resume.pdf"
          download="Mohammad_Shahid_Beigh_Resume.pdf"
          className="font-bold py-2 px-6 rounded-full mt-4 text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
      {profileViews !== null && (
        <div className="mt-4 animate-fade-in">
          <span className="font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
            Profile Views: {profileViews}
          </span>
        </div>
      )}
    </div>
  );
}

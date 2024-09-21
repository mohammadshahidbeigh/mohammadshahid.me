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
    "I'm an Full Stack AI Software Engineer with a passion for innovation.",
    "Bridging the gap between cutting-edge AI and robust full-stack development.",
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
      className="h-screen flex items-center justify-center relative"
    >
      <ParticlesBg />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:hidden w-full flex justify-center mb-8">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
            <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>
            </div>
            <Image
              src="/Image.png"
              alt="My Profile Picture"
              width={288}
              height={288}
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
        <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8">
          <h1
            className={`${dancing.className} name-title-ui text-white animate-fade-in mb-4`}
          >
            Mohammad Shahid Beigh
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl text-white animate-fade-in my-1">
            👋 Hi there!{" "}
            <span
              className="changing-text text-blue-500 italic"
              ref={el}
            ></span>
            <span className="cursor blink text-blue-500 italic">|</span>
          </div>
          <div className="social-links flex justify-center md:justify-start space-x-4 animate-fade-in border border-white dark:border-black outline-1 w-full md:w-auto rounded-md p-2 mt-4">
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
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <button
              onClick={() => window.open("/resume.pdf", "_blank", "noopener")}
              className="w-full sm:w-auto font-bold py-2 px-6 rounded-full text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Resume
            </button>
            <a
              href="/resume.pdf"
              download="Mohammad_Shahid_Beigh_Resume.pdf"
              className="w-full sm:w-auto text-center font-bold py-2 px-6 rounded-full text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
          {profileViews !== null && (
            <div className="mt-4 animate-fade-in text-center md:text-left">
              <span className="inline-block font-bold py-2 px-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                Profile Views: {profileViews}
              </span>
            </div>
          )}
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
            <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow">
              <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-pulse"></div>
            </div>
            <Image
              src="/Image.png"
              alt="My Profile Picture"
              width={288}
              height={288}
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

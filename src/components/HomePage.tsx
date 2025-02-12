"use client";

import React, {useEffect, useRef, useState} from "react";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiUpwork,
} from "react-icons/si";
import {Dancing_Script} from "next/font/google";
import ParticlesBg from "./backgroundEffects/ParticlesBg";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  X_URL,
  UPWORK_URL,
} from "../constants";
import Image from "next/image";

const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage(): JSX.Element {
  const changingTexts = [
    "I'm a Full Stack Software Engineer with a passion for innovation. Bridging the gap between cutting-edge AI and robust full-stack development.",
  ];

  const typingDelay = 150;
  const delayAfterTyping = 2000;

  const el = useRef<HTMLSpanElement>(null);
  const currentIndexRef = useRef(0);
  const currentTextIndexRef = useRef(0);
  const renderedTextRef = useRef("");
  const [profileViews, setProfileViews] = useState<string | null>(null);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

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
        if (el.current) {
          el.current.innerText = curText;
        }
      } else {
        clearInterval(timerId);
        setTimeout(() => {
          currentIndexRef.current =
            (currentIndexRef.current + 1) % changingTexts.length;
          currentTextIndexRef.current = 0;
          renderedTextRef.current = "";
          if (el.current) {
            el.current.innerText = "";
          }
          startTyping();
        }, delayAfterTyping);
      }
    };

    const startTyping = () => {
      timerId = setInterval(changeText, typingDelay);
    };

    startTyping();
    fetchProfileViews();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const fetchProfileViews = async () => {
    try {
      const response = await fetch("/api/profile-views");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProfileViews(data.message);
    } catch (error) {
      console.error("Error fetching profile views:", error);
    }
  };

  return (
    <div
      id="home-section"
      className="min-h-screen flex flex-col items-center justify-center relative py-8 mt-10"
    >
      <ParticlesBg />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8">
          <h1
            className={`${dancing.className} name-title-ui text-white animate-fade-in mb-4 text-4xl md:text-6xl lg:text-6xl`}
          >
            I&apos;m Shahid
          </h1>
          <div className="text-lg md:text-xl lg:text-2xl text-white animate-fade-in my-4 h-24">
            👋 Hey there!{" "}
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
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icons hover:bg-green-500"
            >
              <SiUpwork className="text-2xl text-white" />
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
        </div>
      </div>
      <div className="mt-12 px-4 max-w-4xl mx-auto text-center">
        <div className="space-y-6 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-lg shadow-xl">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-blue-400">Who I Am</h2>
              <p className="text-sm md:text-base">
                Software Engineer, open-source enthusiast, and perpetual learner
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-blue-400">
                What Drives Me
              </h2>
              <p className="text-sm md:text-base">
                Musicophile, poetry & art seeker, day dreamer
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base animate-fade-in opacity-75">
            Peripatetic • Introverted • Empathetic • Melancholic • Emotive
          </p>
        </div>
      </div>
    </div>
  );
}

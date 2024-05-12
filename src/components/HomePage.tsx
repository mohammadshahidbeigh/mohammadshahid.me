"use client";

// Import necessary modules and components
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Dancing_Script } from "next/font/google";
import { useEffect, useRef } from "react";
import ParticlesBg from "./backgroundEffects/ParticlesBg";
import { GITHUB_URL, LINKEDIN_URL } from "../constants";
import Image from "next/image"; // Import the Image component from Next.js

// Define the Dancing Script font
const dancing = Dancing_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Define the HomePage component
export default function HomePage(): JSX.Element {
  // Define changing texts and typing delay
  const changingTexts = ["Front End Software Engineer", "Problem Solver"];
  let typingDelay = 150;
  let delayAfterTyping = 2000; // 3 seconds delay

  // Define useRef hooks for managing text animation
  const el: any = useRef("");
  const currentIndexRef = useRef(0);
  const currentTextIndexRef = useRef(0);
  const renderedTextRef = useRef("");
  let timerId: any = null;

  // Function to change the text
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

  // Function to start text typing animation
  const startTyping = () => {
    timerId = setInterval(changeText, typingDelay);
  };

  // useEffect hook to start text typing animation on component mount
  useEffect(() => {
    startTyping();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  // Return the JSX for the HomePage component
  return (
    <div
      id="home-section"
      className="h-screen flex flex-col justify-center text-center relative"
    >
      <ParticlesBg />

      {/* Container for the image and name */}
      <div className="relative">
        {/* Image */}
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl mb-12 relative">
            {/* Circular border animation */}
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

        {/* Name */}
        <h1
          className={`absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 ${dancing.className} name-title-ui text-white animate-fade-in`}
        >
          Mohammad Shahid Beigh
        </h1>
      </div>

      {/* Text and social links */}
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
      {/* View and Download Resume Buttons */}
      <div className="flex justify-center space-x-4 mx-auto p-2">
        {/* View Resume Button */}
        <button
          onClick={() => window.open("/Resumee.pdf", "_blank", "noopener")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-4"
        >
          View Resume
        </button>
        {/* Download Resume Button */}
        <a
          href="/Resumee.pdf" // Replace with the path to your PDF resume
          download="resume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mt-4"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

import {
  SiGeeksforgeeks,
  SiGithub,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";
import {LiaHackerrank} from "react-icons/lia";
import {
  GFG_URL,
  GITHUB_URL,
  HACKERRANK_URL,
  LEETCODE_URL,
  MIET_Jammu,
  ThinkNext_UTL,
} from "@/constants";
import ListTick from "./ListTick";

export default function AboutPage(): JSX.Element {
  const programmingLanguages = [
    "HTML",
    "CSS3",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Python",
  ];
  const topics = [
    "Front End Development",
    "Data Structures",
    "Object Oriented Programming",
    "Test Driven Development",
    "Machine Learning",
    "Web Scraping",
    "Prompt Engineering",
    "Fine-Tuning",
    "OpenAI API",
    "OpenAI-Embeddings",
    "RAG-Retrieval Augmented Generation",
  ];
  const softwares = [
    "React.js",
    "Next.js",
    "React Redux",
    "Redux Toolkit",
    "React Query",
    "RxJS",
    "RTX Query",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "Jupyter Notebook",
    "Langchain.js",
    "Supabase",
    "Firebase",
    "Netlify",
    "Vercel",
  ];

  return (
    <div
      id="about"
      className="main-div-ui bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          About
        </h2>
        <div className="sub-main-div-ui">
          {/* Education Card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Education
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={MIET_Jammu}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Model Institute Of Engineering & Technology, Jammu
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                July 2020 - Augest 2024
              </span>
            </div>
            <p className="text-gray-300 mb-2">
              B.E - Electronics and Communication Engineering
            </p>
            <p className="text-gray-300 mb-4">CGPA: 7.50 / 10</p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  👋 Hi there! I&apos;m a self-taught Front-End Software
                  Engineer currently pursuing my bachelor&apos;s degree in
                  Electronics and Communication Engineering. Although my formal
                  education lies in a different field, my insatiable curiosity
                  and relentless pursuit of knowledge have driven me to explore
                  and master the world of software engineering.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  I have a genuine passion for software development and enjoy
                  creating innovative solutions using various tech stacks,
                  languages, and technologies. If you&apos;re looking for a
                  passionate Front-End Software Developer who thrives in
                  challenging environments, loves JavaScript, React, Next.js,
                  and is dedicated to continuous learning and innovation, I
                  would love to connect with you.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Let&apos;s create something amazing together! ✉️😊
                </span>
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Skills
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((skill, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Softwares and Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {softwares.map((software, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

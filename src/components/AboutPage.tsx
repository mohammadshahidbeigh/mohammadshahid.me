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
    "JavaScript",
    "TypeScript",
    "Golang",
    "Python"
  ];
  const topics = [
    "Front End Development",
    "Back End Development",
    "Devops",
    "Object Oriented Programming",
    "Autonomous Testing",
    "Test Driven Development",
    ,
    "Generative AI",
    "Vector Embeddings",
    "RAG (Retrieval-Augmented Generation)",
  ];
  const frontend = [
    "React.js",
    "Redux Toolkit",
    "React Query",
    "Next.js",
    "Tailwind CSS",
    "Shadcn",
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "OAuth 2.0",
    "Web Sockets",
    "WebRTC",
  ];

  const databases = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Firebase",
    "ORMs",
  ];

  const testing = ["Jest", "React Testing Library", "Puppeteer", "Cypress"];

  const devOps = [
    "Git",
    "Linux",
    "Docker",
    "K8s",
    "CI/CD",
    "Jenkins",
    "Terraform",
    "AWS",
    "GCP",
    "Vercel",
  ];

  const genAI = [
    "Python",
    "LangChain",
    "LlamaIndex",
    "Vector Databases",
    "RAG",
    "LLM APIs (OpenAI, Anthropic)",
    "AI Agents",
    "LangGraph",
    "CrewAI",
    "Prompt Engineering",
    "Knowledge Graphs",
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
              <span className="text-xs sm:text-sm text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1 mr-2">
                2020 - 2024
              </span>
            </div>
            <p className="text-gray-300 mb-2">Bachelor of Engineering</p>
            <p className="text-gray-300 mb-4">CGPA: 7.50 / 10</p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  👋 Hey there everyone! I&apos;m Mohammad Shahid, a versatile
                  full-stack software developer with a deep passion for crafting
                  intuitive, high-performing web applications. I thrive on
                  building innovative solutions using modern tech like React, Next.js, Node.js and I&apos;m deeply invested in the exciting realm of
                  GenAI.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  I&apos;m actively working with cutting-edge frameworks like
                  LangChain, LlamaIndex, and agentic AI technologies including
                  LangGraph with React and Next.js, to deliver
                  full-stack solutions powered by GenAI. 
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  If you are looking for
                  a passionate Software developer who thrives in challenging
                  environments and is dedicated to continuous learning and
                  innovation, I would love to connect with you. Let&apos;s create something amazing together! ✉️😊
                </span>
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Skills
            </h3>

            {/* Table Layout for Programming Languages, Backend, and Databases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {backend.map((item, index) => (
                    <span
                      key={index}
                      className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {databases.map((db, index) => (
                    <span
                      key={index}
                      className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Table Layout for Frontend and DevOps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {frontend.map((item, index) => (
                    <span
                      key={index}
                      className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                  DevOps
                </h4>
                <div className="flex flex-wrap gap-2">
                  {devOps.map((tool, index) => (
                    <span
                      key={index}
                      className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* GenAI Section */}
            <div className="mb-2">
              <h4 className="text-lg font-semibold mb-2 text-cyan-300">
                GenAI
              </h4>
              <div className="flex flex-wrap gap-2">
                {genAI.map((aiTool, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-xs font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {aiTool}
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

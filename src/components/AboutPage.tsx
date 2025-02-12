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
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Python",
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
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux Toolkit",
    "Next.js",
    "Apollo Client",
    "Tailwind CSS",
    "Material UI",
    "Shadcn-UI",
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "REST APIS",
    "GraphQL",
    "Apollo Server",
    "NGINX",
    "JWT",
    "OAuth",
    "Web Sockets",
    "socket.io",
    "WebRTC",
  ];

  const databases = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Supabase",
    "Firebase",
    "Mongoose",
    "Prisma",
    "Vector Databases",
    "Knowledge Graphs",
  ];

  const testing = ["Jest", "React Testing Library", "Puppeteer", "Cypress"];

  const devOps = [
    "Git",
    "Linux",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "Terraform",
    "AWS",
    "Vercel",
  ];

  const genAI = [
    "Python",
    "LangChain",
    "LlamaIndex",
    "OpenAI",
    "Anthropic",
    "Google Gemini",
    "DeepSeek",
    "AI Agents",
    "LangGraph",
    "CrewAI",
    "AWS Bedrock",
    "Prompt Engineering",
    "Vector Embeddings",
    "Knowledge Graphs RAG",
    "RAG (Retrieval-Augmented Generation)",
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
                July 2020 - August 2024
              </span>
            </div>
            <p className="text-gray-300 mb-2">Bachelor of Engineering</p>
            <p className="text-gray-300 mb-4">CGPA: 7.50 / 10</p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  👋 Hi there everyone! I&apos;m Mohammad Shahid, a versatile
                  full-stack software developer with a deep passion for crafting
                  intuitive, high-performing web applications. I thrive on
                  building innovative solutions using modern tech like React and
                  Next.js, and I&apos;m deeply invested in the exciting realm of
                  generative AI.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  I have a genuine passion for software development and love
                  creating innovative solutions using modern tech stacks. I
                  thrive on building state-of-the-art applications with
                  technologies like React and Next.js, and I&apos;m deeply
                  invested in the exciting realm of generative AI.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  I&apos;m actively working with cutting-edge frameworks like
                  LangChain, LangGraph, and agentic AI technologies including
                  CrewAI and AWS Bedrock, to deliver full-stack solutions
                  powered by GenAI. If you&apos;re looking for a passionate
                  developer who thrives in challenging environments and is
                  dedicated to continuous learning and innovation, I would love
                  to connect with you.
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
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {frontend.map((item, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {backend.map((item, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Databases
              </h4>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                Testing
              </h4>
              <div className="flex flex-wrap gap-2">
                {testing.map((test, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {test}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                DevOps
              </h4>
              <div className="flex flex-wrap gap-2">
                {devOps.map((tool, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-300">
                GenAI
              </h4>
              <div className="flex flex-wrap gap-2">
                {genAI.map((aiTool, index) => (
                  <span
                    key={index}
                    className="skill-div-ui text-sm font-medium text-gray-200 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
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

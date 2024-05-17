import {
  SiGeeksforgeeks,
  SiGithub,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
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
    // "C",
    // "Python",
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
    // "Algorithms and Optimization",
    "Object Oriented Programming",
    "Test Driven Development",
    // "Operating Systems",
    "Machine Learning",
    "Prompt Engineering",
    "Fine-tuning LLM",
    "RAG-Retrieval Augmented Generation",
    // "Distributed Systems",
    // "Bckend Development",
    // "Serverless Architecture",
    // "Blockchains",
  ];
  const softwares = [
    // "Linux",
    // "Git",

    "React.js",
    "Next.js",
    "Remix.js",
    "React Redux",
    "Redux Toolkit",
    "React Query",
    "RxJS",
    "RTX Query",
    "Gatsby",
    "Tailwid Css",

    // "Vue.js",
    // "Node.js",
    "Git",
    "OpenAI API",
    "Web Sockets",
    "Web RTC",
    "Netlify",
    "Vercel",
    // "Socket.io",
    // "Express.js",
    // "Bootstrap",
    // "MySQL",
    // "Sequelize",
    // "Git",
    // "Redis",
    // "Docker",
    // "AWS SQS",
    // "AWS Lambda",
  ];

  return (
    <div id="about" className=" main-div-ui bg-[#030018]  ">
      <div className="animate-fade-in max-w-screen-xl mx-auto max-[480px]:p-1  p-4 md:p-8 ">
        <h2 className="title-ui ">About</h2>

        <div className="sub-main-div-ui  ">
          {/* Education and Coding Profile (Left) */}
          <div className=" flex flex-col space-y-4   ">
            <div className="card-ui p-4 bg-[#030018] ">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">
                Education
              </p>
              <hr className="hr-ui " />

              <p className="flex justify-between italic">
                {" "}
                <a
                  href={MIET_Jammu}
                  target="_blank"
                  className=" p-1 hover:bg-blue-500 rounded-md font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700"
                >
                  Model Institute Of Engineering & Technology , Jammu
                </a>{" "}
              </p>
              <p className="flex justify-between mb-1">
                {" "}
                <span className=" bg-[#030018] rounded-md px-1 py-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  B.E - Electronics and Communication Engineering
                </span>{" "}
                <span className=" bg-[#030018] rounded-md px-1 py-1 hover:bg-blue-500  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  July 20 - June 24
                </span>{" "}
              </p>
              <p className="flex justify-end mb-1 max-[360px]:text-xs">
                {" "}
                <span className="text-center bg-[#030018] hover:bg-blue-500 rounded-md px-1 py-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  CGPA: 7.50 / 10{" "}
                </span>{" "}
              </p>

              <ul>
                <li className="flex  space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    👋 Hi there! I&apos;m a self-taught Front-End Software
                    Engineer currently pursuing my bachelor&apos;s degree in
                    Electronics and Communication Engineering. Although my
                    formal education lies in a different field, my insatiable
                    curiosity and relentless pursuit of knowledge have driven me
                    to explore and master the world of software engineering.
                  </span>
                </li>
                <li className="flex  space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    I have a genuine passion for software development and enjoy
                    creating innovative solutions using various tech stacks,
                    languages, and technologies. If you&apos;re looking for a
                    passionate Front-End Software Developer who thrives in
                    challenging environments, loves JavaScript and React, and is
                    dedicated to continuous learning and innovation. I would
                    love to connect with you.
                  </span>
                </li>
                <li className="flex  space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Let&apos;s create something amazing together! ✉️😊
                  </span>
                </li>
              </ul>
            </div>
            {/* <div className="card-ui p-4 ">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">
                Coding Profile
              </p>
              <hr className="hr-ui" /> */}

            {/* <div className="my-2 flex  justify-center space-x-4">
                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  className=" project-icons "
                >
                  {" "}
                  <SiLeetcode className="text-3xl max-[500px]:text-xl" />{" "}
                </a> */}
            {/* <a
                  href={HACKERRANK_URL}
                  target="_blank"
                  className=" project-icons "
                >
                  {" "}
                  <LiaHackerrank className="text-3xl max-[500px]:text-xl" />{" "}
                </a>
                <a href={GFG_URL} target="_blank" className=" project-icons ">
                  {" "}
                  <SiGeeksforgeeks className="text-3xl max-[500px]:text-xl" />{" "}
                </a> */}
            {/* <a
                  href={GITHUB_URL}
                  target="_blank"
                  className=" project-icons "
                >
                  {" "}
                  <SiGithub className="text-3xl max-[500px]:text-xl" />{" "}
                </a> */}
            {/* </div> */}

            {/* <p className="text-justify">
                I love solving coding problems and I have solved several problems
                at Leetcode.
              </p>
              <p className="flex my-2 mr-4">
                {" "}
                <span className="mt-1">
                  <a href={LEETCODE_URL} target="_blank">
                    {" "}
                    <SiLeetcode />{" "}
                  </a>{" "}
                </span>{" "}
                <span>: 3-Star, Solved 400+ Problems</span>{" "}
              </p> */}
            {/* <p className=" flex my-2 mr-4">
                {" "}
                <span className="mt-1">
                  <a href={GFG_URL} target="_blank">
                    {" "}
                    <SiGeeksforgeeks />{" "}
                  </a>
                </span>{" "}
                <span>: Solved 210+ Problems</span>{" "}
              </p>
              <p className=" flex my-2 mr-4">
                {" "}
                <span className="mt-1">
                  <a href={HACKERRANK_URL} target="_blank">
                    {" "}
                    <LiaHackerrank />{" "}
                  </a>
                </span>{" "}
                <span>: 5-Star in C++ and SQL</span>{" "}
              </p> */}
            {/* </div> */}
          </div>

          {/* Skills Portion (Right) */}
          <div className=" p-4 card-ui ml-3 max-[950px]:ml-0 bg-[#030018]  ">
            <p className="text-2xl max-[500px]:text-xl  font-bold mb-0 text-center">
              Skills
            </p>
            <hr className="hr-ui " />

            <p className="text-xl font-bold mb-0 text-center  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Programming Languages
            </p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2 ">
              {programmingLanguages.map((skill, index) => (
                <div
                  key={index}
                  className="skill-div-ui bg-[#030018] hover:bg-blue-500"
                >
                  <p className="-mt-1 font-sans max-[500px]:text-sm  ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Topics
            </p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">
              {topics.map((skill, index) => (
                <div
                  key={index}
                  className="skill-div-ui bg-[#030018] hover:bg-blue-500"
                >
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Softwares and Libraries
            </p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">
              {softwares.map((skill, index) => (
                <div
                  key={index}
                  className="skill-div-ui bg-[#030018] hover:bg-blue-500"
                >
                  <p className="-mt-1 font-sans max-[500px]:text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

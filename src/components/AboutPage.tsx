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
  SUPERBEINGS_UTL,
} from "@/constants";

export default function AboutPage(): JSX.Element {
  const programmingLanguages = [
    // "C",
    // "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ];
  const topics = [
    "Front End Development",
    "Data Structures",
    // "Algorithms and Optimization",
    "Object Oriented Programming",
    // "Operating Systems",
    // "Machine Learning",
    // "Bckend Development",
    // "Serverless Architecture",
    // "Blockchains",
  ];
  const softwares = [
    // "Linux",
    // "Git",
    "Tailwid Css",
    "SASS",
    "React.js",
    "React Redux",
    "React Query",
    "Next.js",
    // "Vue.js",
    "Node.js",
    "Git",
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
    <div id="about" className=" main-div-ui ">
      <div className="animate-fade-in max-w-screen-xl mx-auto max-[480px]:p-1   p-4 md:p-8 ">
        <h2 className="title-ui">About</h2>

        <div className="sub-main-div-ui">
          {/* Education and Coding Profile (Left) */}
          <div className=" flex flex-col space-y-4">
            <div className="card-ui p-4">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center ">
                Education
              </p>
              <hr className="hr-ui " />

              <p className="flex justify-between italic">
                {" "}
                <a
                  href={MIET_Jammu}
                  target="_blank"
                  className=" p-1 hover:bg-[#c8c8c8] dark:hover:bg-[#181818] rounded-md "
                >
                  Model Institute Of Engineering & Technology , Jammu
                </a>{" "}
              </p>
              <p className="flex justify-between mb-1">
                {" "}
                <span className="bg-[#d7d7d7] dark:bg-[#181818] rounded-md px-1 py-1">
                  B.E
                </span>{" "}
                <span className="text-center bg-[#d7d7d7] dark:bg-[#181818] rounded-md px-1 py-1">
                  Electronics and Communication Engineering
                </span>{" "}
              </p>
              <p className="flex justify-between mb-1 max-[360px]:text-xs">
                {" "}
                <span className="bg-[#d7d7d7] dark:bg-[#181818] rounded-md px-1 py-1">
                  July 20 - June 24
                </span>{" "}
                <span className="text-center bg-[#d7d7d7] dark:bg-[#181818] rounded-md px-1 py-1">
                  {" "}
                  CGPA: 7.50 / 10{" "}
                </span>{" "}
              </p>

              <ul>
                <li className="text-justify">
                  Studied all the necessary Computer Science Subjects under
                  BTech Program which included Data Structures and Algorithms,
                  Operating Systems, Computer Networks, Database Management
                  System, Network Security, Cloud Computing, Compiler Design,
                  Discrete Mathematics, Machine Learning
                </li>
              </ul>
            </div>
            <div className="card-ui p-4 ">
              <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">
                Coding Profile
              </p>
              <hr className="hr-ui" />

              <div className="my-2 flex  justify-center space-x-4">
                <a
                  href={LEETCODE_URL}
                  target="_blank"
                  className=" project-icons "
                >
                  {" "}
                  <SiLeetcode className="text-3xl max-[500px]:text-xl" />{" "}
                </a>
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
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  className=" project-icons "
                >
                  {" "}
                  <SiGithub className="text-3xl max-[500px]:text-xl" />{" "}
                </a>
              </div>

              <p className="text-justify">
                I love solving coding problems and I have solved hundreds pf
                problems across various coding platforms.
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
              </p>
              <p className=" flex my-2 mr-4">
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
              </p>
            </div>
          </div>

          {/* Skills Portion (Right) */}
          <div className=" p-4 card-ui ml-3 max-[950px]:ml-0 ">
            <p className="text-2xl max-[500px]:text-xl font-bold mb-0 text-center">
              Skills
            </p>
            <hr className="hr-ui " />

            <p className="text-xl font-bold mb-0 text-center">
              Programming Languages
            </p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">
              {programmingLanguages.map((skill, index) => (
                <div key={index} className="skill-div-ui">
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center">Topics</p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">
              {topics.map((skill, index) => (
                <div key={index} className="skill-div-ui">
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xl font-bold mb-0 text-center">
              Softwares and Libraries
            </p>
            <hr className="hr-small-ui" />

            <div className="flex flex-wrap px-4 max-[500px]:px-2">
              {softwares.map((skill, index) => (
                <div key={index} className="skill-div-ui">
                  <p className="-mt-1 font-sans max-[500px]:text-sm ">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

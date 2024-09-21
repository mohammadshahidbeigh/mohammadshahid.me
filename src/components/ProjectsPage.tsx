import {SiGithub, SiMongodb, SiMysql} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {FaNodeJs} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoFlask,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoNetlify,
  BiLogoGithub,
  BiLogoGit,
  BiLogoGmail,
} from "react-icons/bi";
import {
  MIET_BOT_URL,
  OWAIS_YAQOOB_URL,
  TEXT_WIZARD_URL,
  MOHAMMAD_SHAHID_URL,
  KNOWIT_ALL_URL,
  MIETBOT_FineTuned_URL,
  Web_Scraper_URL,
  AUTOMOBILES_PRICE_URL,
} from "@/constants";
import ListTick from "./ListTick";

export default function ProjectsPage(): JSX.Element {
  return (
    <div
      id="projects"
      className="main-div-ui bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui text-4xl font-bold mb-8 text-center text-white">
          Projects
        </h2>

        <div className="sub-main-div-ui grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Campus360
            </div>
            <div className="p-6 flex-grow">
              <p className="mb-4 text-base text-gray-300">
                <li className="flex space-x-2 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Developed Campus360, an AI-driven virtual assistant
                    providing real-time support and personalized assistance to
                    users.
                    <br />
                    - Enhanced Communication: Reduced language barriers by using
                    the advance OpenAI GPT Model like GPT4.
                    <br />- Provided comprehensive support for students,
                    faculty, and visitors.
                  </span>
                </li>
                {/* ... (rest of the content) ... */}
              </p>
              <div className="mt-4">
                <a
                  href="https://www.researchgate.net/publication/381831628_AI-BASED_CHATBOT_FOR_EDUCATIONAL_INSTITUTES?channel=doi&linkId=66811d2c2aa57f3b8260ba91&showFulltext=true"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  Research Paper: Campus360-[AI-BASED CHATBOT FOR EDUCATIONAL
                  INSTITUTES]
                </a>
              </div>
            </div>

            <div className="bottom-part rounded-b-lg bg-opacity-20 flex justify-between border-t border-gray-600 px-6 py-4">
              <div className="flex space-x-2">
                <a
                  href={MIET_BOT_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500 bg-opacity-20"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://campus360-flame.vercel.app"
                  className="project-icons hover:bg-blue-500 bg-opacity-20"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <p className="project-icons hover:bg-blue-500 bg-opacity-20">
                  <BiLogoReact className="text-xl" />
                </p>
                <p className="project-icons hover:bg-blue-500 bg-opacity-20">
                  <BiLogoTypescript className="text-xl" />
                </p>
                <p className="project-icons hover:bg-blue-500 bg-opacity-20">
                  <BiLogoTailwindCss className="text-xl" />
                </p>
                <p className="project-icons hover:bg-blue-500 bg-opacity-20">
                  <BiLogoFirebase className="text-xl" />
                </p>
              </div>
            </div>
          </div>

          {/* Second project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Owais Yaqoob -- Freelance Client
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Third project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Text-Wizard
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Fourth project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              mohammadshahid.me
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Fifth project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              KnowItAll - ChatBot
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Sixth project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Mietbot- a fine-tuned version of Campus360
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Seventh project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Web Scraper
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>

          {/* Eighth project card */}
          <div className="flex flex-col card-ui text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="text-lg border-b border-gray-200 px-6 py-4 bg-opacity-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Automobiles-Price-Estimation
            </div>
            {/* ... (rest of the content for this card) ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

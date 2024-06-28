import { SiGithub, SiMongodb, SiMysql } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoFlask,
} from "react-icons/bi";
import {
  MIET_BOT_URL,
  OWAIS_YAQOOB_URL,
  TEXT_WIZARD_URL,
  MOHAMMAD_SHAHID_URL,
  KNOWIT_ALL_URL,
  AUTOMOBILES_PRICE_URL,
} from "@/constants";
import ListTick from "./ListTick";

export default function ProjectsPage(): JSX.Element {
  return (
    <div id="projects" className="main-div-ui bg-[#030018]">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui">Projects</h2>

        <div className="sub-main-div-ui">
          {/* First project card */}
          <div className="flex flex-col card-ui text-center bg-[#030018]">
            <div className="text-lg border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Campus360
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Developed Campus360, an AI-driven virtual assistant
                    providing real-time support and personalized assistance to
                    users.
                    <br />
                    - Enhanced communication and reduced language barriers by
                    40% using OpenAI API vector embeddings.
                    <br />- Provided comprehensive support for students,
                    faculty, and visitors.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Implemented a robust software stack: ReactJs, TypeScript,
                    Tailwind Css, Python, OpenAI API, Firebase, Supabase Vector
                    Database for OpenAI embeddings.
                    <br />- Facilitated front-end development, web scraping,
                    database management, and embedding storage.
                    <br />- Optimized response generation and language modeling
                    using RAG (Retrieval Augmented Generation), Prompt
                    Engineering and Langchain.js
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Achieved key advantages:
                    <br />
                    - 24/7 availability and scalability, increasing user
                    engagement by 50%.
                    <br />- Instant and efficient responses, improving user
                    experience and time efficiency by 60%.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={MIET_BOT_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href="https://www.owaisyaqoob.com"
                  className="project-icons pointer-events hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoFirebase className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>

          {/* Second project card */}
          <div className="flex flex-col card-ui text-center bg-[#030018]">
            <div className="text-lg border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Owais Yaqoob -- Freelance Client
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Led the full-stack development of a dynamic portfolio
                    website using Next.js, Tailwind CSS, and TypeScript.
                    <br />
                    - Enhanced online presence and user engagement by 35%.
                    <br />- Engineered a responsive and aesthetically pleasing
                    front-end, emphasizing usability and modern design
                    principles.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Collaborated closely with the client to define website
                    requirements.
                    <br />- Ensured the final product aligned perfectly with
                    personal branding and professional goals.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={OWAIS_YAQOOB_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href="https://owaisyaqoob.vercel.app"
                  className="project-icons pointer-events hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoTypescript className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoFirebase className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>

          {/* Third project card */}
          <div className="flex flex-col card-ui text-center bg-[#030018]">
            <div className="text-lg border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Text-Wizard
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Developed ”Text-Wizard,” a Text Manipulation App that
                    provides tools to enhance text quickly and efficiently.
                    <br />
                    - Implemented features like word count, character count, and
                    space removal using React.js and React Hooks.
                    <br />- Enabled swift text enhancement for users, improving
                    productivity by 25%.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Designed to serve a diverse audience, including students,
                    writers, and business professionals.
                    <br />- Made it an essential tool for crafting high-quality
                    written content.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={TEXT_WIZARD_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href="https://textwizard.netlify.app"
                  className="project-icons pointer-events hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>

          {/* Fourth project card */}
          <div className="flex flex-col card-ui text-center bg-[#030018]">
            <div className="text-lg border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              mohammadshahid.me
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Utilized cutting-edge technologies such as Next.js, Tailwind
                    CSS, and TypeScript to develop a sleek and modern portfolio
                    website.
                    <br />
                    - Employed TypeScript for type safety and code integrity,
                    reducing bugs by 30% and enhancing maintainability.
                    <br />- Leveraged Tailwind CSS utility classes to create a
                    highly responsive and mobile-friendly layout.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Optimized the portfolio for various screen sizes and
                    devices.
                    <br />- Incorporated interactive features such as smooth
                    scrolling, parallax effects, and lazy loading to create an
                    immersive and memorable user experience.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={MOHAMMAD_SHAHID_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href="https://www.mohammadshahid.me"
                  className="project-icons pointer-events hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoTypescript className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>

          {/* Fifth project card */}
          <div className="flex flex-col card-ui text-center bg-[#030018]">
            <div className="text-lg border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              KnowItAll - ChatBot
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Developed ”KnowItAll ChatBot,” a sophisticated web
                    application that integrates Firebase Realtime Database with
                    OpenAI’s GPT-3.5 Turbo model.
                    <br />
                    - Engineered the chatbot to comprehend user inputs and
                    provide human-like responses using JavaScript and OpenAI
                    API.
                    <br />- Enhanced user engagement through dynamic
                    conversational interactions by 40%.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Demonstrated advanced capabilities in natural language
                    processing.
                    <br />- Leveraged Firebase and GPT-3.5-Turbo to respond
                    effectively to user queries, making it a valuable tool for
                    real-time communication.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={KNOWIT_ALL_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href="https://knowitall-chatbot.vercel.app"
                  className="project-icons pointer-events hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoFirebase className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>

          {/* Sixth project card */}
          <div className="text-lg flex flex-col card-ui text-center bg-[#030018]">
            <div className="border-b font border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Automobiles-Price-Estimation
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify">
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Developed a predictive model using advanced machine learning
                    algorithms to estimate automobile prices based on multiple
                    factors.
                    <br />
                    - Trained and fine-tuned a Linear Regression model utilizing
                    sci-kit-learn, achieving a nuanced understanding of how
                    different vehicle attributes impact their market price.
                    <br />- Improved prediction accuracy by 20% through rigorous
                    testing using RMSE and MAE metrics.
                  </span>
                </li>
                <li className="flex space-x-1 my-2">
                  <ListTick />
                  <span className="text-justify">
                    Analyzed model performance through rigorous testing.
                    <br />- Initiated enhancements for model scalability,
                    proposing additional features and algorithms to increase
                    predictive power and adaptability.
                  </span>
                </li>
              </p>
            </div>

            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700">
              <div className="flex">
                <a
                  href={AUTOMOBILES_PRICE_URL}
                  target="_blank"
                  className="project-icons hover:bg-blue-500"
                >
                  <SiGithub className="text-xl max-[500px]:text-lg" />
                </a>
                <a
                  href=""
                  className="project-icons pointer-events-none hover:bg-blue-500"
                >
                  <BsGlobe className="text-xl max-[500px]:text-lg" />
                </a>
              </div>
              <div className="flex">
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoPython className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <SiMysql className="text-xl max-[500px]:text-lg" />
                </p>
                <p className="project-icons hover:bg-blue-500">
                  <BiLogoFlask className="text-xl max-[500px]:text-lg" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

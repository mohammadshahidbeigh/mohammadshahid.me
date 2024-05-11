import { SiGithub, SiMongodb, SiMysql } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoTypescript,
  BiLogoPython,
  BiLogoFirefox,
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

export default function ProjectsPage(): JSX.Element {
  return (
    <div id="projects" className=" main-div-ui bg-[#030018]">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui">Projects</h2>

        <div className="sub-main-div-ui">
          {/* First project card */}
          <div className=" flex flex-col card-ui text-center  bg-[#030018] ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018]">
              MietBot
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                MIETBOT is an AI-powered chatbot designed to assist students,
                faculty, and visitors at the Model Institute of Engineering &
                Technology (MIET). It provides real-time information and support
                by leveraging technologies such as the OpenAI API, Supabase
                Vector Database, and Firebase. This chatbot enhances the
                educational experience by simplifying access to campus
                resources, academic programs, and event information.
              </p>
            </div>
            <div className="bottom-part rounded-b-lg  bg-[#030018]  flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex  ">
                <a
                  href={MIET_BOT_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg " />{" "}
                </a>
                <a
                  href="https://mietbot.vercel.app"
                  className=" project-icons pointer-events hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg " />{" "}
                </p>

                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />{" "}
                </p>

                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoFirebase className="text-xl max-[500px]:text-lg" />{" "}
                </p>
              </div>
            </div>
          </div>

          {/* 2nd project card */}
          <div className="flex flex-col card-ui text-center  ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018] ">
              Owais Yaqoob -- Freelance Client
            </div>
            <div className="p-5 m-0 flex-grow bg-[#030018]">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                Led the full-stack development of a dynamic portfolio website
                using Next.js, Tailwind CSS, and TypeScript, enhancing online
                presence and user engagement. Engineered a responsive and
                aesthetically pleasing front-end, emphasizing usability and
                modern design principles that significantly improved user
                interaction and satisfaction. Collaborated closely with the
                client to define website requirements, ensuring the final
                product aligned perfectly with personal branding and
                professional goals.
              </p>
            </div>
            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a
                  href={OWAIS_YAQOOB_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg" />{" "}
                </a>
                <a
                  href="https://owaisyaqoob.vercel.app"
                  className=" project-icons pointer-events hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoTypescript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiMongodb className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiSequelize className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
              </div>
            </div>
          </div>

          {/* 3rd project card */}
          <div className="flex flex-col card-ui text-center  ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018] ">
              Text-Wizard
            </div>
            <div className="p-5 m-0 flex-grow bg-[#030018]">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                Developed ”Text-Wizard,” a Text Manipulation App that provides
                tools to enhance text quickly and efficiently. Implemented
                features like word count, character count, and space removal
                using React.js and React Hooks, enabling swift text enhancement
                for users. Designed to serve a diverse audience, including
                students, writers, and business professionals, making it an
                essential tool for crafting high-quality written content.
              </p>
            </div>
            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a
                  href={TEXT_WIZARD_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg" />{" "}
                </a>
                <a
                  href="https://textwizard.netlify.app"
                  className=" project-icons pointer-events hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiMongodb className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiSequelize className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
              </div>
            </div>
          </div>

          {/* 4th project card */}
          <div className="flex flex-col card-ui text-center  ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018] ">
              mohammadshahid.me
            </div>
            <div className="p-5 m-0 flex-grow bg-[#030018]">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                Utilized cutting-edge technologies such as Next.js, Tailwind
                CSS, and TypeScript to develop a sleek and modern portfolio
                website. Employed TypeScript for type safety and code integrity,
                reducing bugs and enhancing maintainability throughout the
                development process. Leveraged Tailwind CSS utility classes to
                create a highly responsive and mobile-friendly layout,
                optimizing the portfolio for various screen sizes and devices.
                Incorporated interactive features such as smooth scrolling,
                parallax effects, and lazy loading to create an immersive and
                memorable user experience.
              </p>
            </div>
            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a
                  href={MOHAMMAD_SHAHID_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg" />{" "}
                </a>
                <a
                  href="https://www.mohammadshahid.me"
                  className=" project-icons pointer-events hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoTypescript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiMongodb className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiSequelize className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col card-ui text-center  ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018] ">
              KnowItAll - ChatBot
            </div>
            <div className="p-5 m-0 flex-grow bg-[#030018]">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                Developed ”KnowItAll ChatBot,” a sophisticated web application
                that integrates Firebase Realtime Database with OpenAI’s GPT-3.5
                Turbo model, offering an interactive chatbot experience.
                Engineered the chatbot to comprehend user inputs and provide
                human-like responses using JavaScript and OpenAI API, enhancing
                user engagement through dynamic conversational interactions.
                Demonstrated advanced capabilities in natural language
                processing by leveraging Firebase and GPT-3.5-Turbo to respond
                effectively to user queries, making it a valuable tool for
                real-time communication.
              </p>
            </div>
            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a
                  href={KNOWIT_ALL_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg" />{" "}
                </a>
                <a
                  href="https://knowitall-chatbot.vercel.app"
                  className=" project-icons pointer-events hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <FaNodeJs className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg " />{" "}
                </p>

                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />{" "}
                </p>

                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                {/* <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoReact className="text-xl max-[500px]:text-lg" />{" "}
                </p> */}
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoFirebase className="text-xl max-[500px]:text-lg" />{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col card-ui text-center  ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 bg-[#030018] ">
              Automobiles-Price-Estimation
            </div>
            <div className="p-5 m-0 flex-grow bg-[#030018]">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                Developed a predictive model using advanced machine learning
                algorithms to estimate automobile prices based on multiple
                factors such as engine size, brand, model year, mileage, and
                condition. Trained and fine-tuned a Linear Regression model
                utilizing sci-kit-learn, achieving a nuanced understanding of
                how different vehicle attributes impact their market price.
                Analyzed model performance through rigorous testing, using
                metrics like Root Mean Squared Error (RMSE) and Mean Absolute
                Error (MAE), to ensure accuracy and reliability. Initiated
                enhancements for model scalability, proposing additional
                features and algorithms to increase predictive power and
                adaptability for real-world application, setting a roadmap for
                future improvements
              </p>
            </div>
            <div className="bottom-part rounded-b-lg bg-[#030018] flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a
                  href={AUTOMOBILES_PRICE_URL}
                  target="_blank"
                  className=" project-icons hover:bg-blue-500 "
                >
                  {" "}
                  <SiGithub className="text-xl max-[500px]:text-lg" />{" "}
                </a>
                <a
                  href=""
                  className=" project-icons pointer-events-none hover:bg-blue-500 "
                >
                  {" "}
                  <BsGlobe className="text-xl max-[500px]:text-lg" />{" "}
                </a>
              </div>
              <div className=" flex ">
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoJavascript className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500">
                  {" "}
                  <BiLogoHtml5 className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoCss3 className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoPython className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <SiMysql className="text-xl max-[500px]:text-lg" />{" "}
                </p>
                <p className=" project-icons hover:bg-blue-500 ">
                  {" "}
                  <BiLogoFlask className="text-xl max-[500px]:text-lg" />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Projects
        </h2>

        <div className="sub-main-div-ui">
          {/* First project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Campus360 - AI-Powered Virtual Assistant
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href="https://campus360-flame.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Live Demo
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Jan 2023 - Present
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Engineered an AI-driven virtual assistant using OpenAI GPT-4
                  model, providing real-time support and personalized assistance
                  to users.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Implemented a cutting-edge tech stack: ReactJs, TypeScript,
                  Tailwind CSS for frontend; OpenAI API, Firebase, Supabase
                  Vector Database for backend.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Optimized AI performance using RAG (Retrieval Augmented
                  Generation), Prompt Engineering, and Langchain.js, enhancing
                  response accuracy and relevance.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Achieved 24/7 availability, scalability, and multilingual
                  support, significantly improving campus information
                  accessibility and user experience.
                </span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.researchgate.net/publication/381831628_AI-BASED_CHATBOT_FOR_EDUCATIONAL_INSTITUTES?channel=doi&linkId=66811d2c2aa57f3b8260ba91&showFulltext=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                📄 Research Paper: AI-BASED CHATBOT FOR EDUCATIONAL INSTITUTES
              </a>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={MIET_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://campus360-flame.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoReact className="text-cyan-200 text-xl" title="React" />
                <BiLogoTypescript
                  className="text-cyan-200 text-xl"
                  title="TypeScript"
                />
                <BiLogoTailwindCss
                  className="text-cyan-200 text-xl"
                  title="Tailwind CSS"
                />
                <BiLogoFirebase
                  className="text-cyan-200 text-xl"
                  title="Firebase"
                />
              </div>
            </div>
          </div>

          {/* Second project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Owais Yaqoob -- Freelance Client
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href="https://www.owaisyaqoob.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Portfolio Website
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Freelance Project
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Led the full-stack development of a dynamic portfolio website
                  using Next.js, Tailwind CSS, and TypeScript.
                  <br />
                  - Enhanced online presence and user engagement by 65%.
                  <br />
                  - Engineered a responsive and aesthetically pleasing
                  front-end, emphasizing usability and modern design principles.
                  <br />
                  - Implemented advanced animations and interactive elements to
                  create a captivating user experience.
                  <br />
                  - Optimized website performance through efficient code and
                  best practices, achieving fast load times and smooth
                  navigation.
                  <br />
                  - Integrated email.js for a robust contact section,
                  facilitating easy and reliable communication.
                  <br />- Conducted thorough testing and debugging to ensure a
                  bug-free and high-quality final product.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Collaborated closely with the client to define website
                  requirements.
                  <br />
                  - Ensured the final product aligned perfectly with personal
                  branding and professional goals.
                  <br />- Provided ongoing support and maintenance, including
                  regular updates and feature enhancements.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={OWAIS_YAQOOB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://www.owaisyaqoob.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoReact className="text-cyan-200 text-xl" title="React" />
                <BiLogoTypescript
                  className="text-cyan-200 text-xl"
                  title="TypeScript"
                />
                <BiLogoTailwindCss
                  className="text-cyan-200 text-xl"
                  title="Tailwind CSS"
                />
                <BiLogoGmail
                  className="text-cyan-200 text-xl"
                  title="Email.js"
                />
              </div>
            </div>
          </div>

          {/* Third project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Text-Wizard
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href="https://textwizard.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Live Demo
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Text Manipulation App
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Developed &ldquo;Text-Wizard,&rdquo; a Text Manipulation App
                  that provides tools to enhance text quickly and efficiently.
                  Implemented features like word count, character count, and
                  space removal using React.js and React Hooks. Enabled swift
                  text enhancement for users, improving productivity by 25%.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Designed to serve a diverse audience, including students,
                  writers, and business professionals. Made it an essential tool
                  for crafting high-quality written content.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={TEXT_WIZARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://textwizard.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoBootstrap
                  className="text-cyan-200 text-xl"
                  title="Bootstrap"
                />
                <BiLogoReact className="text-cyan-200 text-xl" title="React" />
                <BiLogoJavascript
                  className="text-cyan-200 text-xl"
                  title="JavaScript"
                />
                <BiLogoNetlify
                  className="text-cyan-200 text-xl"
                  title="Netlify"
                />
              </div>
            </div>
          </div>

          {/* Fourth project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              mohammadshahid.me
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href="https://www.mohammadshahid.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Live Demo
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Personal Project
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Utilized cutting-edge technologies such as Next.js, Tailwind
                  CSS, and TypeScript to develop a sleek and modern portfolio
                  website.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Employed TypeScript for type safety and code integrity,
                  reducing bugs by 30% and enhancing maintainability.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Leveraged Tailwind CSS utility classes to create a highly
                  responsive and mobile-friendly layout.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Optimized the portfolio for various screen sizes and devices.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Incorporated interactive features such as smooth scrolling,
                  parallax effects, and lazy loading to create an immersive and
                  memorable user experience.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={MOHAMMAD_SHAHID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://www.mohammadshahid.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoReact className="text-cyan-200 text-xl" title="React" />
                <BiLogoTypescript
                  className="text-cyan-200 text-xl"
                  title="TypeScript"
                />
                <BiLogoTailwindCss
                  className="text-cyan-200 text-xl"
                  title="Tailwind CSS"
                />
              </div>
            </div>
          </div>

          {/* Fifth project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              KnowItAll - ChatBot
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Developed &ldquo;KnowItAll ChatBot,&rdquo; a sophisticated web
                  application that integrates Firebase Realtime Database with
                  OpenAI&apos;s GPT-3.5 Turbo model.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Implemented real-time data synchronization and storage using
                  Firebase Realtime Database, ensuring seamless user
                  interactions and data persistence.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Engineered the chatbot to comprehend user inputs and provide
                  human-like responses using JavaScript and OpenAI API.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Enhanced user engagement through dynamic conversational
                  interactions by 40%.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Demonstrated advanced capabilities in natural language
                  processing.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Leveraged Firebase and GPT-3.5-Turbo to respond effectively to
                  user queries, making it a valuable tool for real-time
                  communication.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={KNOWIT_ALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://knowitall-chatbot.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoHtml5 className="text-cyan-200 text-xl" title="HTML5" />
                <BiLogoCss3 className="text-cyan-200 text-xl" title="CSS3" />
                <BiLogoJavascript
                  className="text-cyan-200 text-xl"
                  title="JavaScript"
                />
                <BiLogoFirebase
                  className="text-cyan-200 text-xl"
                  title="Firebase"
                />
              </div>
            </div>
          </div>

          {/* Fifth project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Mietbot - A Fine-tuned Version of Campus360
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Created a virtual assistant specifically for the Model
                  Institute of Engineering and Technology (MIET), leveraging
                  fine-tuning techniques with OpenAI&apos;s GPT-4 model.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Implemented advanced natural language processing techniques to
                  enhance the chatbot&apos;s understanding and response
                  generation capabilities.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Integrated machine learning algorithms to continuously improve
                  the chatbot&apos;s performance based on user interactions and
                  feedback.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Utilized JavaScript and OpenAI API to enhance the
                  chatbot&apos;s ability to comprehend user inputs and deliver
                  precise, human-like responses.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Leveraged a robust tech stack including Python, HTML5, CSS3,
                  JavaScript, Firebase and Jupyter Notebook for development and
                  fine-tuning processes.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Improved user interaction quality by fine-tuning the language
                  model with institution-specific data.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Operationalized Firebase Real-time database for storing user
                  conversations.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Deployed using Vercel for seamless integration and
                  scalability.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={MIETBOT_FineTuned_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href="https://mietbot-fine-tuned.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoHtml5 className="text-cyan-200 text-xl" title="HTML5" />
                <BiLogoCss3 className="text-cyan-200 text-xl" title="CSS3" />
                <BiLogoJavascript
                  className="text-cyan-200 text-xl"
                  title="JavaScript"
                />
                <BiLogoPython
                  className="text-cyan-200 text-xl"
                  title="Python"
                />
                <BiLogoFirebase
                  className="text-cyan-200 text-xl"
                  title="Firebase"
                />
              </div>
            </div>
          </div>

          {/* Fifth project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Scraper
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Created a script named Web Scraper to extract information such
                  as page titles, URLs, and content from the Model Institute of
                  Engineering and Technology (MIET) website. Utilized LangChain
                  tools such as Recursive URL Loader with Beautifulsoup4 a
                  Python library for pulling data out of HTML and XML files to
                  facilitate efficient and structured web scraping.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Demonstrated capabilities in data extraction and content
                  analysis. Applied Python to implement robust and scalable web
                  scraping solutions.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={Web_Scraper_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 pointer-events-none"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoPython
                  className="text-cyan-200 text-xl"
                  title="Python"
                />
                <BiLogoGit className="text-cyan-200 text-xl" title="Git" />
              </div>
            </div>
          </div>

          {/* Sixth project card */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Automobiles-Price-Estimation
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Developed a predictive model using advanced machine learning
                  algorithms to estimate automobile prices based on multiple
                  factors. Trained and fine-tuned a Linear Regression model
                  utilizing sci-kit-learn, achieving a nuanced understanding of
                  how different vehicle attributes impact their market price.
                  Improved prediction accuracy by 20% through rigorous testing
                  using RMSE and MAE metrics.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Analyzed model performance through rigorous testing. Initiated
                  enhancements for model scalability, proposing additional
                  features and algorithms to increase predictive power and
                  adaptability.
                </span>
              </li>
            </ul>
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                <a
                  href={AUTOMOBILES_PRICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
                >
                  <SiGithub className="text-xl" />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 pointer-events-none"
                >
                  <BsGlobe className="text-xl" />
                </a>
              </div>
              <div className="flex space-x-2">
                <BiLogoHtml5 className="text-cyan-200 text-xl" title="HTML5" />
                <BiLogoCss3 className="text-cyan-200 text-xl" title="CSS3" />
                <BiLogoJavascript
                  className="text-cyan-200 text-xl"
                  title="JavaScript"
                />
                <BiLogoPython
                  className="text-cyan-200 text-xl"
                  title="Python"
                />
                <SiMysql className="text-cyan-200 text-xl" title="MySQL" />
                <BiLogoFlask className="text-cyan-200 text-xl" title="Flask" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

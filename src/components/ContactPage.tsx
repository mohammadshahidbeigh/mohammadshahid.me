import {
  SiGithub,
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiStackoverflow,
} from "react-icons/si";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  X_URL,
  STACKOVERFLOW_URL,
} from "@/constants";

export default function ContactPage(): JSX.Element {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Get in touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Professional
            </h3>
            <div className="flex justify-center space-x-6">
              <a href={EMAIL} className="contact-icon-link">
                <SiGmail className="text-4xl text-red-500 hover:text-red-600 transition-colors duration-300" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <SiLinkedin className="text-4xl text-blue-500 hover:text-blue-600 transition-colors duration-300" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <SiGithub className="text-4xl text-gray-800 hover:text-gray-900 transition-colors duration-300" />
              </a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">Social</h3>
            <div className="flex justify-center space-x-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <SiInstagram className="text-4xl text-pink-500 hover:text-pink-600 transition-colors duration-300" />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <SiTwitter className="text-4xl text-blue-400 hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a
                href={STACKOVERFLOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon-link"
              >
                <SiStackoverflow className="text-4xl text-orange-500 hover:text-orange-600 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 flex justify-center">
          <img
            src="https://ghchart.rshah.org/0A66C2/mohammadshahidbeigh"
            alt="Mohammad Shahid Beigh's Github chart"
            className="w-full max-w-3xl rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
       <div className="w-full mt-8 flex justify-center">
  <img
    src="https://github-readme-activity-graph.vercel.app/graph?username=mohammadshahidbeigh&bg_color=000000&color=e70db8&line=0b12da&point=eee2eb&area=true&hide_border=true"
    alt="Mohammad Shahid Beigh's Github Graph"
    className="w-full max-w-3xl rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  />
</div>

        <p className="text-center mt-12 text-lg text-gray-300">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
      </div>
    </div>
  );
}

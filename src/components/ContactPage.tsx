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
      className="h-screen flex flex-col justify-center items-center bg-[#030018] "
    >
      <div className="container mx-auto animate-fade-in">
        <h2 className="title-ui mb-8">Get in touch</h2>
        <div className="my-2 flex justify-center space-x-4 mb-6 rounded-md w-min mx-auto border border-[#b4b4b4] dark:border-[#1e1e1e] outline-1 p-2">
          <a href={EMAIL} className="project-icons hover:bg-blue-500">
            <SiGmail className="text-3xl max-[500px]:text-xl" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            className="project-icons hover:bg-blue-500"
          >
            <SiLinkedin className="text-3xl max-[500px]:text-xl" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            className="project-icons hover:bg-blue-500"
          >
            <SiGithub className="text-3xl max-[500px]:text-xl" />
          </a>
        </div>
        <div className="my-2 flex justify-center space-x-4 mb-6 rounded-md w-min mx-auto border border-[#b4b4b4] dark:border-[#1e1e1e] outline-1 p-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="project-icons hover:bg-red-500"
          >
            <SiInstagram className="text-3xl max-[500px]:text-xl" />
          </a>
          <a
            href={X_URL}
            target="_blank"
            className="project-icons hover:bg-blue-500"
          >
            <SiTwitter className="text-3xl max-[500px]:text-xl" />
          </a>
          <a
            href={STACKOVERFLOW_URL}
            target="_blank"
            className="project-icons hover:bg-orange-500"
          >
            <SiStackoverflow className="text-3xl max-[500px]:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

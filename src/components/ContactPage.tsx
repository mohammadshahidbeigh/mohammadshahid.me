import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/constants";

export default function ContactPage(): JSX.Element {
  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center " >
      <div className="container mx-auto animate-fade-in">
        <h2 className="title-ui mb-8">Get in touch</h2>
        <div className="my-2 flex  justify-center space-x-4 mb-6 rounded-md w-min mx-auto border border-[#b4b4b4] dark:border-[#1e1e1e] outline-1 p-2">
          <a href={EMAIL} className=' project-icons '> <SiGmail className='text-3xl max-[500px]:text-xl' /> </a>
          <a href={LINKEDIN_URL} target='_blank' className=' project-icons '> <SiLinkedin className='text-3xl max-[500px]:text-xl' /> </a>
          <a href={GITHUB_URL} target='_blank' className=' project-icons '> <SiGithub className='text-3xl max-[500px]:text-xl' /> </a>
        </div>
      </div>
    </div>
  )
}
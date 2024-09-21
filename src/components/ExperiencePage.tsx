import {UPWORK_URL, ThinkNext_UTL} from "@/constants";
import ListTick from "./ListTick";

export default function ExperiencePage(): JSX.Element {
  return (
    <div
      id="experience"
      className="main-div-ui bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Experience
        </h2>
        <div className="sub-main-div-ui">
          {/* card 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Developer - Freelance
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Upwork
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Oct 23 - Present
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Led the end-to-end development of a full portfolio website
                  using Next.js, Tailwind CSS, and TypeScript.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Enhanced frontend design and user experience, resulting in a
                  more engaging interface and improved usability.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Collaborated closely with the client to understand
                  requirements, ensuring the final product aligned with their
                  vision.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Demonstrated proficiency in modern web development
                  technologies, delivering a high-quality, responsive website.
                </span>
              </li>
            </ul>
          </div>

          {/* card 2 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Machine Learning Trainee
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={ThinkNext_UTL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                ThinkNEXT Technologies Private Limited
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                July 22 - Aug 22
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Employed advanced Machine Learning algorithms to predict
                  automobile prices based on crucial factors.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Trained a robust Linear Regression model using scikit-learn,
                  capturing intricate relationships between engine size and
                  price.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Planned future enhancements to refine the model and explore
                  additional features for real-world deployment.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { UPWORK_URL, ThinkNext_UTL } from "@/constants";
import ListTick from "./ListTick";

export default function ExperiencePage(): JSX.Element {
  return (
    <div id="experience" className=" main-div-ui bg-[#030018]">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8 ">
        <h2 className="title-ui">Experience</h2>

        <div className="sub-main-div-ui">
          {/* card 1 */}
          <div className="card-ui p-6 pl-3  mx-auto bg-[#030018]">
            <p className=" font-bold  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              Web Developer- Freelance
            </p>
            <p className="flex justify-between mt-2	">
              <a
                href={UPWORK_URL}
                target="_blank"
                className="exp-url-ui  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                Upwork
              </a>{" "}
              <span className=" hover:bg-blue-500 rounded-md px-2 py-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                {" "}
                Oct 23 - Present{" "}
              </span>{" "}
            </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Led the end-to-end development of a full portfolio website for
                  a client using Next.js, Tailwind CSS, and TypeScript.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Enhanced frontend design and user experience, resulting in a
                  more engaging interface and improved usability.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Collaborated closely with the client to understand
                  requirements, ensuring the final product aligned with their
                  vision.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Demonstrated proficiency in modern web development
                  technologies, delivering a high-quality, responsive website
                  tailored to the clients specifications.
                </span>
              </li>
            </ul>
          </div>

          {/* card 2 */}

          <div className="card-ui p-6 pl-3  mx-auto bg-[#030018]">
            <p className=" font-bold  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Machine Learning Trainee
            </p>
            <p className="flex justify-between mt-2">
              <a
                href={ThinkNext_UTL}
                target="_blank"
                className="exp-url-ui  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                ThinkNEXT Technologies Private Limited · Apprenticeship
              </a>{" "}
              <span className="hover:bg-blue-500 rounded-md px-2 py-1  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                {" "}
                July 22 - Aug 22{" "}
              </span>{" "}
            </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Employed advanced Machine Learning algorithms to predict
                  automobile prices based on crucial factors such as engine
                  size, make, model, year, mileage, condition, and other
                  pertinent features.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Trained a robust Linear Regression model on the prepared
                  dataset using scikit-learn, capturing intricate relationships
                  between engine size and price.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Planned future enhancements to refine the model and explore
                  additional features, aiming to deploy it in real-world
                  scenarios and empower users with actionable insights into
                  automobile pricing dynamics.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

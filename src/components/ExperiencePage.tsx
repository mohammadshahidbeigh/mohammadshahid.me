import { UPWORK_URL, ThinkNext_UTL } from "@/constants";
import ListTick from "./ListTick";

export default function ExperiencePage(): JSX.Element {
  return (
    <div id="experience" className=" main-div-ui ">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui">Experience</h2>

        <div className="sub-main-div-ui">
          {/* card 1 */}
          <div className="card-ui p-6 pl-3  mx-auto ">
            <p className=" font-bold">Web Developer-Freelance</p>
            <p className="flex justify-between mt-2	">
              <a href={UPWORK_URL} target="_blank" className="exp-url-ui">
                Upwork
              </a>{" "}
              <span className="bg-[#d7d7d7] dark:bg-[#141414] rounded-md px-2 py-1 ">
                {" "}
                Oct 23 - Present{" "}
              </span>{" "}
            </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  I worked as a backend developer in the consultation team,
                  mainly working with Node.js and Databases. I worked to build
                  an ideal online consultation flow to improve the customer
                  experience.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  My responsibilities also included optimizing APIs and reducing
                  API latency. I reduced the number of database queries by 50%
                  and decrease API response time by over 70%, bringing it from
                  seconds to milliseconds. Additionally, I consistently worked
                  to improve product quality by addressing bugs and conducting
                  code refactoring.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  I developed an automated system that maintains 100% uptime and
                  raises payment claims for over 10,000 consultations daily,
                  resulting in a significant boost in revenue.
                </span>
              </li>
            </ul>
          </div>

          {/* card 2 */}

          <div className="card-ui p-6 pl-3  mx-auto ">
            <p className=" font-bold">Machine Learning Trainee</p>
            <p className="flex justify-between mt-2">
              <a href={ThinkNext_UTL} target="_blank" className="exp-url-ui">
                ThinkNEXT Technologies Private Limited · Apprenticeship
              </a>{" "}
              <span className="bg-[#d7d7d7] dark:bg-[#141414] rounded-md px-2 py-1 ">
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

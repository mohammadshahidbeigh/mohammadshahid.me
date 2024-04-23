import { MEDIBUDDY_URL, SUPERBEINGS_UTL } from "@/constants";
import ListTick from "./ListTick";

export default function ExperiencePage(): JSX.Element {
  return (
    <div id="experience" className=" main-div-ui ">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui">Experience</h2>

        <div className="sub-main-div-ui">
          {/* card 1 */}
          <div className="card-ui p-6 pl-3  mx-auto ">
            <p className=" font-bold">Software Engineer Intern</p>
            <p className="flex justify-evenly	">
              <a href={MEDIBUDDY_URL} target="_blank" className="exp-url-ui">
                MediBuddy
              </a>{" "}
              <span className="bg-[#d7d7d7] dark:bg-[#141414] rounded-md px-2 py-1 ">
                {" "}
                Jan 23 - May 23{" "}
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
            <p className=" font-bold">Software Engineer Intern</p>
            <p className="flex justify-evenly	">
              <a href={SUPERBEINGS_UTL} target="_blank" className="exp-url-ui">
                SuperBeings
              </a>{" "}
              <span className="bg-[#d7d7d7] dark:bg-[#141414] rounded-md px-2 py-1 ">
                {" "}
                Jan 22 - Mar 22{" "}
              </span>{" "}
            </p>
            <ul className="  list-disc list-outside md:list-inside">
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Developed scalable and responsive web pages.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  I worked on the development of a Performance Management System
                  from scratch. I worked side-by- side with designers to
                  implement their masterpieces in HTML, CSS, JavaScript, and
                  Vue.js, making sure the pipeline of experiments never runs
                  dry.
                </span>
              </li>
              <li className="flex  space-x-1 my-2">
                <ListTick />
                <span className="text-justify">
                  Constantly improving the quality of website by fixing the bugs
                  and refactoring the code base.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Achievements } from "@/constants";
import AchievementsListItem from "./AchievementsListItem";

export default function AchievementsPage(): JSX.Element {
  return (
    <div id="experience" className=" main-div-ui  ">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui">Achievements</h2>
        <div className="grid grid-cols-1  gap-4 justify-evenly max-sm:w-11/12 max-[950px]:w-4/5 w-4/5 mx-auto">

          <div className="md:space-x-2 max-md:space-y-4  ">
            <ul>
              {
                Achievements.map((achievement, index) => (
                  <AchievementsListItem key={index} text={achievement} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Metadata } from "next";
import AchievementsPage from "@/components/AchievementsPage";

export const metadata: Metadata = {
  title: 'Achievements'
}

export default function Achievements(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm ">
      <AchievementsPage />
    </main>
  )
}
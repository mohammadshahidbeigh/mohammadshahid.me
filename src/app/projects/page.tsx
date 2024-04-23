import { Metadata } from "next";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Projects(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm max-[950px]:pb-12">
      <ProjectsPage />
    </main>
  )
}
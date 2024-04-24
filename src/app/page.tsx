import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import ExperiencePage from "@/components/ExperiencePage";
import ProjectsPages from "@/components/ProjectsPage";
import AchievementsPage from "@/components/AchievementsPage";
import ContactPage from "@/components/ContactPage";

export default function Home(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm overflow-x-hidden">
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPages />
      <AchievementsPage />
      <ContactPage />
    </main>
  );
}

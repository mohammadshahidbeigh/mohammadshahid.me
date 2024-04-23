import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: 'About'
}

export default function About(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm  max-[950px]:pb-12 ">
      <AboutPage />
    </main>
  )
}
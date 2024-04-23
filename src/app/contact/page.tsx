import { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm  ">
      <ContactPage />
    </main>
  )
}
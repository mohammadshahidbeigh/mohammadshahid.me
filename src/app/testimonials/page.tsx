import { Metadata } from "next";
import TestimonialsPage from "@/components/TestimonialsPage";

export const metadata: Metadata = {
  title: "Testimonials",
};

export default function Projects(): JSX.Element {
  return (
    <main className=" min-h-screen p-0 mt-8 min-[950px]:max-[1450px]:ml-20 max-[500px]:text-sm max-[950px]:pb-12">
      <TestimonialsPage />
    </main>
  );
}

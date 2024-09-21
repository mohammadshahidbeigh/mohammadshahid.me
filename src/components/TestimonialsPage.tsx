import Image from "next/image";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Shahid made my portfolio the best I could expect. The color, font, and background are professional and exactly what I wanted. I appreciate his consistency and patience throughout the project, as he worked on it for a long time to ensure it was perfect. Thank you!",
    author: "Owais Yaqoob",
    position: "Professional MMA Fighter",
    image: "/owaisyaqoob.png",
    link: "https://owaisyaqoob.com",
  },
  // Add more testimonials here as needed
];

export default function TestimonialsPage(): JSX.Element {
  return (
    <div
      id="testimonials"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          What People Say
        </h2>
        <div className="flex flex-col items-center p-4 sm:p-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-10 w-full max-w-3xl"
            >
              <div className="flex flex-col sm:flex-row items-center">
                <div className="sm:w-1/3 mb-6 sm:mb-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <div className="sm:w-2/3 text-white">
                  <FaQuoteLeft className="text-2xl mb-2 text-cyan-300" />
                  <p className="text-lg sm:text-xl font-medium mb-4 italic">
                    {testimonial.text}
                  </p>
                  <FaQuoteRight className="text-2xl ml-auto text-cyan-300" />
                  <div className="mt-4">
                    <p className="font-bold text-xl">{testimonial.author}</p>
                    <p className="text-cyan-200">{testimonial.position}</p>
                    {testimonial.link && (
                      <a
                        href={testimonial.link}
                        className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 mt-2 inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

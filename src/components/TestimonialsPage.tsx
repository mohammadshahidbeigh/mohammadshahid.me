import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "Shahid made my portfolio the best I could expect. The color, font, and background are professional and exactly what I wanted. I appreciate his consistency and patience throughout the project, as he worked on it for a long time to ensure it was perfect. Thank you!",
    author: "Owais Yaqoob",
    position: "Professional MMA Fighter",
    image: "/owaisyaqoob.png",
    link: "https://owaisyaqoob.com", // Add the link property
  },
  // Add more testimonials here as needed
];

export default function TestimonialsPage(): JSX.Element {
  return (
    <div className="main-div-ui bg-[#030018]">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="title-ui md:text-2xl font-bold text-white mb-8">
          Testimonials
        </h2>
        <div className="flex flex-col items-center p-4 sm:p-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-700 hover:to-cyan-700 shadow-md rounded-lg p-2 sm:p-4 mb-6 sm:mb-8 w-full max-w-3xl"
            >
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={100}
                  height={100}
                  className="rounded-full mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-xl font-bold">
                    {testimonial.text}
                  </p>
                  <p className="text-black font-semibold mt-2">
                    — {testimonial.author}, {testimonial.position}
                  </p>
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      className="text-blue-900 font-semibold mt-2 inline-block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.owaisyaqoob.com
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
  link?: string;
}

interface BlogPost {
  title: string;
  date: string;
  updateDate?: string;
  image: string;
  link: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Shahid made my portfolio the best I could expect. The color, font, and background are professional and exactly what I wanted. I appreciate his consistency and patience throughout the project, as he worked on it for a long time to ensure it was perfect. Thank you!",
    author: "Owais Yaqoob",
    position: "Professional MMA Fighter",
    image: "/owaisyaqoob.png",
    link: "https://owaisyaqoob.com",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "Why RAG Outshines Fine-Tuning in LLM Optimization",
    date: "Sep 17, 2024",
    updateDate: "Sep 18, 2024",
    image:
      "https://framerusercontent.com/images/Vk7p8LACFAKiG7QLnlwAwks6uU0.png",
    link: "https://mohammadshahidbeigh.hashnode.dev/why-rag-outshines-fine-tuning-in-llm-optimization",
    description:
      "Understanding Why RAG Outshines Fine-Tuning in LLM Optimization.",
  },
  {
    title: "Mastering Fine-Tuning: A Journey Through Model Optimization",
    date: "Sep 5, 2024",
    updateDate: "Sep 8, 2024",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1725476315531/b409b64b-ecf5-40cd-84ff-96b5156bf57b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://mohammadshahidbeigh.hashnode.dev/mastering-fine-tuning-a-journey-through-model-optimization",
    description:
      "Understanding how Fine-tuning is key for optimizing small LLMs, and why mastering prompt engineering is equally vital for driving AI model behavior.",
  },
];

// Quote icon components using SVG
const QuoteLeft = () => (
  <svg
    className="w-6 h-6 text-cyan-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const QuoteRight = () => (
  <svg
    className="w-6 h-6 text-cyan-300 ml-auto"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
  </svg>
);

interface BlogPostProps {
  post: BlogPost;
}

const BlogPost: React.FC<BlogPostProps> = ({post}) => (
  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-10 w-full max-w-3xl">
    <div className="flex flex-col sm:flex-row items-center">
      <div className="sm:w-1/3 mb-6 sm:mb-0">
        <div className="relative w-full h-48 sm:h-32 sm:w-32">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
      <div className="sm:w-2/3 text-white">
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-300 transition-colors duration-200"
        >
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        </a>
        <div className="text-cyan-200 mb-2">
          <span>{post.date}</span>
          {post.updateDate && <span> | Updated: {post.updateDate}</span>}
        </div>
        <p className="text-gray-300 mb-4">{post.description}</p>
        <a
          href={post.link}
          className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
);

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030018] to-[#0a0032]">
      {/* Blog Posts Section */}
      <div
        id="blog"
        className="flex flex-col justify-center items-center py-16"
      >
        <div className="container mx-auto animate-fade-in px-4">
          <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            My Latest Blog Posts
          </h2>
          <div className="flex flex-col items-center p-4 sm:p-6">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="flex flex-col justify-center items-center py-16"
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
                    <div className="relative w-32 h-32">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="rounded-full border-4 border-white shadow-md object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:w-2/3 text-white">
                    <QuoteLeft />
                    <p className="text-lg sm:text-xl font-medium mb-4 italic">
                      {testimonial.text}
                    </p>
                    <QuoteRight />
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
    </div>
  );
};

export default TestimonialsPage;

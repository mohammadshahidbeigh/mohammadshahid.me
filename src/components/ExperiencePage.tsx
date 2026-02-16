import {UPWORK_URL, ThinkNext_UTL, WEYA_AI_URL, HEYMILO_URL} from "@/constants";
import ListTick from "./ListTick";

export default function ExperiencePage(): JSX.Element {
  return (
    <div
      id="experience"
      className="main-div-ui bg-gradient-to-b from-[#030018] to-[#0a0032] py-16"
    >
      <div className="container mx-auto animate-fade-in px-4">
        <h2 className="title-ui mb-12 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Experience
        </h2>
        <div className="sub-main-div-ui space-y-8">
          {/* card 1 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Fullstack Engineer · Remote
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={WEYA_AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                Weya.ai | AI Workflow Automation for BFSI
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Apr 2025 - Aug 2025
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Engineered a multi-prompt calling agent builder using a node-based visual editor, enabling conditional conversational flows with branching logic (call pickup, hang-up paths), multilingual support, and real-time state synchronization.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Designed and implemented a visual workflow orchestration system using React Flow, enabling users to design, edit, and manage multi-agent workflows (Phone, WhatsApp, Email) via drag-and-drop UI, third-party tool integration and cross-agent coordination.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Built real-time analytics dashboards with D3.js visualizing call volume, success rates, and latency through interactive filtering and time-series aggregation for live agent performance monitoring.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Optimized Next.js performance using React Query caching, route-based code splitting, React.lazy() with Suspense, and ISR, reducing Time to Interactive (TTI) by 40%.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Architected multi-factor authentication with OAuth 2.0 (@react-oauth/google), TOTP verification, JWT access/refresh token rotation with HttpOnly cookies, and role-based access control (RBAC) middleware.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Resolved Next.js crashes caused by client-side pagination when processing 100k+ agent call records by implementing server-side pagination using MongoDB aggregation pipelines, reducing client-side memory footprint by 75%.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Automated voice pipeline using Python and ElevenLabs API for TTS generation across multilingual agents, integrated AWS S3 with SSE-S3 encryption, and developed Node.js API with AWS SDK for pre-signed URL generation.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Played a key role in developing distributed microservices in Go, using Azure Queue Service for message brokering and Redis for state management, implementing a weighted round-robin scheduling algorithm for real-time multi-agent calls.
                </span>
              </li>
            </ul>
          </div>

          {/* card 2 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Next.js Developer · Upwork
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                HeyMilo AI
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                Dec 24 - Jan 25
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Integrated Daily.co and Vapi SDK for video conferencing
                  features, enhancing the platform’s video interview
                  capabilities.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Leveraged Vapi’s iframe object to create a seamless connection
                  to Daily.co rooms, ensuring synchronization between the AI
                  assistant and video conferencing.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Utilized TypeScript for type safety and enhanced code
                  maintainability, ensuring fewer runtime errors.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Designed and implemented responsive and accessible user
                  interfaces using Next.js, ensuring a consistent experience
                  across devices.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Optimized existing components for better performance and
                  maintainability, reducing loading times by 25%.
                </span>
              </li>
            </ul>
          </div>

          {/* card 3 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Machine Learning Trainee
            </h3>
            <div className="flex justify-between items-center mb-4">
              <a
                href={ThinkNext_UTL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200"
              >
                ThinkNEXT Technologies Private Limited
              </a>
              <span className="text-cyan-200 bg-blue-500 bg-opacity-20 rounded-md px-3 py-1">
                July 22 - Aug 22
              </span>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Employed advanced Machine Learning algorithms to predict
                  automobile prices based on crucial factors.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Trained a Linear Regression model and leveraged feature
                  engineering techniques and popular libraries like NumPy,
                  Pandas, and Matplotlib, achieving a nuanced understanding of
                  how different vehicle attributes impact their market price.
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <ListTick />
                <span className="text-gray-300">
                  Planned future enhancements to refine the model and explore
                  additional features for real-world deployment.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

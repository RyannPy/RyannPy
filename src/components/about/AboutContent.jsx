import { useState } from "react";

import Download2Svg from "../../assets/images/pages/logososmed/download-2-svgrepo-com.svg";
import MailSvg from "../../assets/images/pages/logososmed/email-svgrepo-com.svg";

const AboutContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Building modern, responsive web interfaces with a strong focus on structure, clarity, and usability.",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Backend Development",
      description:
        "Designing clean and scalable APIs, handling data flow, and building reliable backend logic.",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Data-Oriented Thinking",
      description:
        "Approaching problems logically through data, analysis, and structured decision-making.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left Column - About Text */}
      <div className="space-y-6 animate-[fadeInLeft_0.8s_ease-out]">
        <h3 className="text-3xl font-bold text-white">
          Passionate Web Developer, Data, & AI
        </h3>

        <p className="text-gray-400 leading-relaxed">
          I’m a student with a strong interest in data, mathematics, and modern
          web development. I enjoy building clean, functional interfaces and
          exploring how data and technology can work together to solve real
          problems.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I build modern web applications using technologies like React and
          FastAPI, with a strong focus on clean structure, scalability, and
          continuous improvement. I believe learning is best done through real
          projects and consistent practice.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="group flex items-center gap-3 px-8 py-3 border-2 border-purple-600 text-purple-400 font-semibold rounded-full transition-all duration-300 hover:text-white hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105">
            <img src={MailSvg} alt="Contact Me" className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Contact Me</span>
          </button>

          <button className="relative overflow-hidden group flex items-center gap-3 px-8 py-3 border-2 border-purple-600 text-purple-400 font-semibold rounded-full transition-transform duration-300 hover:scale-105">
            <span className="absolute inset-0 bg-purple-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <img src={Download2Svg} alt="Download CV" className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Download CV
            </span>
          </button>
        </div>
      </div>

      {/* Right Column - Services Grid */}
      <div className="space-y-4 animate-[fadeInRight_0.8s_ease-out]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="group relative bg-linear-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 cursor-pointer"
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 bg-purple-600/5 rounded-2xl transition-opacity duration-300 ${
                hoveredCard === service.id ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            <div className="relative flex gap-4">
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-purple-600/20 rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-purple-500/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutContent;

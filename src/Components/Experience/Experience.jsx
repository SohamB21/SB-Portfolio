import React, { useContext } from "react";
import briefcase from "../../assets/media/briefcase.svg";
import { ThemeContext } from "../../context.jsx";
import { Sparkle, DotGrid, ZigZag, HandUnderline, BurstStar, Squiggle } from "../Decorations/Decorations";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const experienceData = [
    {
      time: "Jul 2025 - Present",
      company: "Onlighten Media",
      title: "Software Developer",
      description:
        "I am responsible for developing and delivering AI-based SaaS products, managing backend development, frontend implementation and refining product architecture to ensure solutions meet client and business needs. I contribute to key technical decisions, coordinate tasks across projects, stay current with emerging technologies that can enhance our work and remain committed to continuously improving my skills while delivering high-quality results.",
      companyLink: "https://www.linkedin.com/company/onlighten-media/",
      skills: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "Python",
        "Node.js",
        "jQuery",
        "AWS",
        "WordPress",
        "AI",
        "Machine Learning",
        "Web Development",
      ],
    },
    {
      time: "Jul 2024 - Jun 2025",
      company: "Onlighten Media",
      title: "Backend Developer Intern",
      description:
        "Developed and maintained AI-based SaaS products in a supportive team environment. My work spanned from conceptualizing product ideas to refining product flows, along with web development and AI/ML integration. I grew significantly as a developer here, strengthening my core skills, learning new technologies, and delivering innovative, scalable solutions through close collaboration with senior developers.",
      companyLink: "https://www.linkedin.com/company/onlighten-media/",
      skills: [
        "CodeIgniter",
        "PHP",
        "MySQL",
        "Python",
        "Node.js",
        "jQuery",
        "AWS",
        "WordPress",
        "AI",
        "Machine Learning",
        "Web Development",
      ],
    },
    {
      time: "Jan 2024 - Present",
      company: "Freelancer",
      title: "Freelance Developer",
      description: "Designed, developed, and deployed custom software applications for diverse clients. Managed the full project lifecycle from planning to delivery, ensuring solutions met client needs and followed best practices. Collaborated closely with clients to deliver scalable, user-focused products that added real business value.",
      companyLink: "https://www.linkedin.com/in/soham-banik/",
      skills: [
        "Software Development",
        "Web Development",
        "AI",
      ],
    },
    {
      time: "Nov 2023 - Jun 2024",
      company: "Hellbent Software & Educational Services LLP",
      title: "Junior Software Developer (Intern)",
      description:
        "Enhanced my web development skills by designing and implementing features, integrating key functionalities into the organization's e-commerce platform. Contributed to the development of website components and multiple full-stack live projects for clients, ensuring timely fulfillment of coding requirements and preparing requirement-based reports.",
      companyLink:
        "https://www.linkedin.com/company/hellbent-software-and-educational-services-llp/",
      skills: [
        "Reactjs",
        "PHP",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "MySQL",
        "Web Development",
      ],
    },
    {
      time: "June 2023 - July 2023",
      company: "Edunet Foundation - IBM",
      title: "Data Analytics Intern",
      description:
        "Honed my Python skills and applied them to solve a real-world challenge during my participation in the Analysis of the SuperStore Dataset project. I applied statistical methods and data visualization techniques to uncover actionable insights, deepening my understanding of data-driven decision-making. This was part of a virtual internship program on Data Analytics, offered by IBM and Edunet in collaboration with AICTE.",
      companyLink: "https://www.linkedin.com/company/edunetfoundation/",
      skills: [
        "Python",
        "Data Analysis",
      ],
    },
  ];

  return (
    <div
      id="Experience"
      className="w-full py-32 px-4 overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-full h-full -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>



      <div className="flex flex-col items-center justify-center space-y-20 max-w-5xl mx-auto relative z-10">

        <div className="text-center space-y-4 relative">
          <div className="relative inline-block">
            <span className={`font-yellowtail text-4xl md:text-5xl block transform -rotate-6 ${darkMode ? "text-cta" : "text-cta"} mb-2`}>My Journey!</span>
            <h1 className={`text-5xl md:text-7xl font-extrabold font-outfit uppercase tracking-tight ${darkMode ? "text-white" : "text-primary"}`}>
              Experience
            </h1>
            {/* Clean Sparkle */}
            <Sparkle className={`absolute -top-4 -right-16 w-16 h-16 ${darkMode ? "text-white" : "text-primary"} animate-spin-slow`} />
          </div>

          {/* Clean Texture Pattern */}
          <div className={`absolute top-0 -right-20 -z-10 opacity-40 hidden md:block w-32 h-32 ${darkMode ? "text-primary" : "text-primary"}`}>
            <DotGrid />
          </div>
        </div>

        <div className="w-full flex flex-col relative border-l-2 border-primary/20 ml-4 md:ml-0 md:border-none">
          {experienceData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16 relative w-full group">

              {/* Row Background Decoration */}
              <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                {index === 0 && (
                  <Sparkle className={`absolute top-0 right-[10%] w-64 h-64 opacity-[0.03] ${darkMode ? "text-white" : "text-primary"} rotate-12`} />
                )}
                {index === 2 && (
                  <div className={`absolute top-1/2 left-1/4 w-40 h-40 opacity-[0.05] ${darkMode ? "text-primary" : "text-primary"}`}>
                    <DotGrid id={`bg_dots_${index}`} />
                  </div>
                )}
              </div>

              {/* Timeline Dot & Line (Desktop Center) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full flex-col items-center">
                <div className={`w-5 h-5 rounded-full z-10 border-4 transition-all duration-300 ${darkMode ? "bg-slate-900 border-primary group-hover:border-cta" : "bg-white border-primary group-hover:border-cta shadow-md"}`}></div>
                <div className={`w-0.5 flex-grow ${darkMode ? "bg-slate-700" : "bg-primary/20"}`}></div>
              </div>

              {/* Date (Left Side or Top on mobile) */}
              <div className={`w-full md:w-1/2 flex pt-1 pl-8 md:pl-0 items-center gap-4 relative ${index % 2 !== 0 ? "md:order-2 md:justify-start md:text-left md:pl-8" : "md:justify-end md:pr-8 md:text-right"}`}>
                <div className="flex flex-col items-center relative">
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest ${darkMode ? "text-cta" : "text-primary"}`}>
                    {item.time}
                  </span>
                  <Squiggle className={`w-12 h-3 ${darkMode ? "text-cta" : "text-primary"} opacity-60`} />

                  {/* BurstStar centered at bottom */}
                  <BurstStar className={`absolute -bottom-36 left-1/2 -translate-x-1/2 w-5 h-5 ${darkMode ? "text-cta" : "text-primary"} opacity-30 rotate-12`} />
                </div>
              </div>

              {/* Content Card (Right Side or Bottom on mobile) */}
              <div className={`w-full md:w-1/2 pl-8 md:pl-12 ${index % 2 !== 0 ? "md:order-1 md:pr-12 md:pl-0" : ""}`}>
                <div className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group-hover:shadow-xl border-2
                      ${darkMode
                    ? "bg-slate-800 border-slate-700 hover:border-primary"
                    : "bg-white border-gray-100 hover:border-primary shadow-lg shadow-gray-200/40"
                  }
                  `}>
                  {/* Decorative Elements */}

                  {/* Mobile Dot */}
                  <span className={`absolute top-8 -left-[41px] w-4 h-4 rounded-full border-4 md:hidden ${darkMode ? "bg-slate-900 border-primary" : "bg-white border-primary"}`}></span>

                  <div className="flex flex-col gap-2 mb-4 relative">
                    <h3 className={`text-2xl font-extrabold font-outfit uppercase ${darkMode ? "text-white" : "text-primary"}`}>
                      {item.company}
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-wider font-outfit ${darkMode ? "text-cta" : "text-gray-500"}`}>
                      {item.title}
                    </span>
                  </div>

                  <p className={`text-base leading-relaxed mb-6 font-medium font-outfit ${darkMode ? "text-slate-300" : "text-text-body"}`}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span key={i} className={`text-[0.65rem] font-extrabold uppercase px-3 py-1 rounded-full ${darkMode ? "bg-slate-700 text-primary-300" : "bg-primary/10 text-primary"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import briefcase from "../../assets/media/briefcase.svg";

const Experience = () => {
  const experienceData = [
    {
      time: "Nov 2023 - Present",
      company: "Hellbent Software & Educational Services LLP",
      title: "Junior Software Developer (Intern)",
      description:
        "I designed and implemented components, incorporated features into the organization's e-commerce platform. Improved web development skills by contributing to development of website components and multiple full-stack live projects for clients, ensuring timely completion of coding requirements.",
      companyLink:
        "https://www.linkedin.com/company/hellbent-software-and-educational-services-llp/about/",
      skills: ["ReactJS", "JavaScript", "PHP", "NodeJS", "MySQL"],
    },
    {
      time: "June 2023 - July 2023",
      company: "Edunet Foundation - IBM",
      title: "Data Analytics Intern",
      description:
        "Enhanced Python skills through the IBM-Edunet-AICTE internship, analyzing the SuperStore Dataset. Conducted thorough data exploration, preprocessing, and predictive modeling for informed decision-making and business optimization.",
      companyLink: "https://www.linkedin.com/company/edunetfoundation/",
      skills: ["Python", "Data Analysis"],
    },
  ];

  return (
    <div
      id="Experience"
      className="c h-full w-full flex flex-col items-center justify-center py-24 relative"
    >
      <div className="header pb-10">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>

      <div className="lg:w-2/3 sm:w-3/5 p-2 justify-center items-center">
        <VerticalTimeline lineColor="#a5b4fc">
          {experienceData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "rgb(59 130 246)",
                  boxShadow: "none",
                  border: "1px solid #4338ca",
                  borderRadius: "1.2rem",
                  textAlign: "left",
                  padding: "1rem 0.8rem",
                }}
                contentArrowStyle={{ borderRight: "0.5rem solid #4338ca" }}
                date={
                  <div className="sm:px-0 md:px-0 lg:px-2 text-black">
                    {item.time}
                  </div>
                }
                iconStyle={{
                  background: "#4338ca",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                icon={
                  <img
                    src={briefcase}
                    alt="Briefcase Icon"
                    style={{ width: "50%", padding: "0px" }}
                  />
                }
              >
                <a
                  href={item.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="vertical-timeline-element-title text-xl text-white capitalise">
                    {item.company}
                  </h3>
                </a>
                <p className="font-medium text-white italic !mt-0">
                  {item.title}
                </p>
                <p className="font-medium !mt-1">{item.description}</p>
                <div className="!mt-1 text-xs flex flex-wrap gap-1">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="border border-indigo-300 p-px px-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

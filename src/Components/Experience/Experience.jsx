import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import briefcase from "../../assets/media/briefcase.svg";


const Experience = () => {
  const experienceData = [
    {
      time: 'Nov 2023 - Present',
      company: 'Hellbent Software & Educational Services LLP',
      title: 'Junior Software Developer (Intern)',
      description: 'Worked on various projects involving web development and software solutions.',
    },
    {
      time: 'June 2023 - July 2023',
      company: 'Edunet Foundation - IBM',
      title: 'Data Analytics Intern',
      description: 'Gained hands-on experience in software development and learned new technologies.',
    },
  ];

  return (
    <div className="c h-full w-full flex flex-col items-center justify-center py-24 relative" style={{ background: "linear-gradient(to right, white, lightblue)" }}>
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
                  padding: "1rem",
                }}
                contentArrowStyle={{ borderRight: '0.5rem solid #4338ca' }}
                date={<div className="sm:px-0 lg:px-2 text-black">{item.time}</div>}
                iconStyle={{ background: '#4338ca', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img src={briefcase} alt="Briefcase Icon" style={{ width: '50%', padding: '0px' }} />}
              >
                <h3 className="vertical-timeline-element-title text-xl text-white">{item.company}</h3>
                <p className="font-medium italic !mt-0">{item.title}</p>
                <p className="!mt-1">{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;

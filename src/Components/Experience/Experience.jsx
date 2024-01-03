import React, { useState } from 'react';

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
  {
    time: '2015 - 2016',
    company: 'University of Tech',
    title: 'Student',
    description: 'Studied computer science and participated in various extracurricular activities.',
  },
];

const Experience = () => {
  const [activeStep, setActiveStep] = useState(experienceData.length - 1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, experienceData.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div className="c h-full w-full flex flex-col items-center justify-center py-24 relative" style={{ background: "linear-gradient(to right, white, lightblue)" }}>
      <div className="header pb-10">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>

      <div className="lg:w-1/2 sm:w-3/5 p-4 justify-center items-center">
        {experienceData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-full border-2 border-blue-900">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-lg text-indigo-900 font-semibold">{item.company}</h3>
              </div>
            </div>
            <div className="px-2 flex flex-col">
              <div className="flex justify-between mb-2">
                <p className="">{item.title}</p>
                <p className="">{item.time}</p>
              </div>
              <div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="p-1">
          <button
            onClick={handleBack}
            className={`border border-blue-900 text-blue-600 rounded-md py-2 px-4 m-2 ${activeStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className={`bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-900 rounded-md py-2 px-4 m-2 ${activeStep === experienceData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;

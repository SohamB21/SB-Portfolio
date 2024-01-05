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
  const [showAll, setShowAll] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, experienceData.length - 1));
    setShowAll(true);
  };

  const handleBack = () => {
    setShowAll(false);
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div className="c h-full w-full flex flex-col items-center justify-center py-24 relative" style={{ background: "linear-gradient(to right, white, lightblue)" }}>
      <div className="header pb-10">
        <h1 className="text-3xl font-bold">Experience</h1>
      </div>

      <div className="lg:w-1/2 sm:w-3/5 p-4 justify-center items-center">
        {/*{experienceData.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center rounded-full border-2 border-blue-900">
                {index + 1}
              </div>
              <div className="ml-5 w-5/6">
                <h3 className="text-lg text-indigo-900 font-semibold">{item.company}</h3>
              </div>
            </div>
            <div className="px-5 flex flex-col">
              <div className="flex justify-between items-center mb-2 flex-wrap">
                <p className="">{item.title}</p>
                <p className="">{item.time}</p>
              </div>
              <div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}*/}

        {/*<div className="p-1">
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
        </div>*/}
      </div>
      

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experienceData.map((item, index) => (
          <li key={index} className={`mb-10 ms-6 ${showAll || index === activeStep ? '' : 'hidden'}`}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.time}</time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
              Download ZIP
            </a>
          </li>
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
      </ol>


    </div>
  );
};

export default Experience;

import React from "react";
import "./About.css";
import programmer from "../../assets/media/programmer.gif";
import {
  MdComputer,
  MdDns,
  MdSmartphone,
  MdCode,
  MdSchool,
  MdGroups,
} from "react-icons/md";

const About = () => {
  return (
    <div
      id="About"
      className="a h-full flex lg:flex-row md:flex-row flex-col-reverse items-center justify-center py-24"
    >
      <div className="a-left flex lg:w-1/3 md:w-1/3 relative items-center justify-center p-5">
        <img
          src={programmer}
          alt="Programmer"
          className="lg:w-auto md:w-auto w-4/5 h-auto rounded-3xl shadow-md shadow-blue-500"
        />
      </div>

      <div className="a-right flex-1 w-full p-4">
        <div className="aboutMeArea mb-10">
          <h1 className="text-3xl font-bold lg:mb-2 md:mb-2 mb-8 lg:text-left md:text-left text-center">
            About Me
          </h1>
          <p className="text-xl font-medium lg:text-left md:text-left text-justify">
            I am pursuing{" "}
            <strong>B.Tech in Computer Science and Engineering</strong> at Swami
            Vivekananda University. Achieving a current{" "}
            <strong>CGPA of 9.10</strong> till the 3rd year of my course, I
            bring a strong academic foundation. Currently, I am{" "}
            <strong>SDE intern</strong> at{" "}
            <strong>Hellbent Software & Educational Services LLP</strong>, where
            I work on full-stack projects using various technologies like{" "}
            <strong>ReactJS, PHP and MERN stack</strong>.
            <br /> <br />
            Passionate about <strong>problem-solving</strong> and participating
            in <strong>programming contests</strong> and competitions, I thrive
            in building <strong>innovative web technologies</strong> and
            products. As a tech enthusiast, I am committed to{" "}
            <strong>continuous learning</strong>, exploring new tech, and{" "}
            <strong>collaborating with developers</strong> for impactful
            solutions in the field of <strong>web and app development</strong>.
          </p>
        </div>

        <div className="whatIOfferArea flex flex-col lg:text-left md:text-left text-center">
          <h1 className="text-3xl font-bold lg:mb-2 md:mb-2 mb-8 lg:text-left md:text-left text-center">
            What I Offer
          </h1>

          <div className="flex grid lg:grid-cols-3 md:grid-cols-3 lg:gap-4 md:gap-4 gap-2">
            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Frontend Development{" "}
                <MdComputer size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                I excel in creating beautiful and scalable SPA using{" "}
                <strong>React.js, Tailwind CSS, HTML and Bootstrap.</strong>
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Backend Development{" "}
                <MdDns size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                I can manage <strong>databases</strong>, APIs and servers using{" "}
                <strong>PHP, Node.js</strong> and other widely used frameworks.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Mobile App Development{" "}
                <MdSmartphone size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                I can create mobile apps, using frameworks like{" "}
                <strong>React Native</strong> to deliver seamless user
                experience.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Problem Solving <MdCode size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                My goal is to improve DSA skills on competitive platforms like{" "}
                <strong>GeeksforGeeks and LeetCode.</strong>
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Teaching <MdSchool size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                I teach computer languages like <strong>Java</strong> and
                programming basics, to school students.
              </p>
            </div>

            <div className="bg-white p-4 rounded-md shadow-md shadow-blue-500 mb-2 overflow-auto">
              <h3 className="text-lg font-semibold mb-2 text-[#0c46bc] flex flex-row justify-between">
                Collaborative Projects{" "}
                <MdGroups size={30} className="animate-pulse" />
              </h3>
              <p className="text-gray-600 text-left">
                I collaborate on development projects, to{" "}
                <strong>achieve team goals</strong> and{" "}
                <strong>build impactful solutions.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

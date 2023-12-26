import React from 'react';
import './Home.css';
import myphoto from '../../assets/images/myphoto.png';

const Home = () => {
  return (
    <div className="flex h-screen i">

      <div className="flex-1 i-left flex items-center justify-center">
        <div className="p-10 h-1/2 flex flex-col justify-between">
          <h2 className="text-4xl font-light i-intro">Hello! My name is</h2>
          <h1 className="text-6xl font-semibold i-name">Soham Banik</h1>
          <div className="i-title h-12 overflow-hidden">
            <div className="h-full i-title-wrapper">
              <div className="h-full i-title-item text-4xl font-bold text-green-700 flex items-center animate-move-delay-1">
                Web Developer
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-blue-700 flex items-center animate-move-delay-2">
                Mobile Developer
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-yellow-700 flex items-center animate-move-delay-3">
                Student
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-orange-700 flex items-center animate-move-delay-4">
                Problem Solver
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-fuchsia-700 flex items-center animate-move-delay-5">
                Learner
              </div>
            </div>
          </div>
          <p className="i-desc text-xl">
            I’m an undergraduate with proficiency in Web and Android Development, Problem Solving and strong command of Programming Fundamentals.
          </p>
        </div>
      </div>

      <div className="flex-1 i-right relative m-5">
        <div className="i-bg h-full w-full absolute flex flex-col items-center justify-center">
          <img src={myphoto} alt="My Photo" 
          className="i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"/>
          <p style={{ fontFamily: 'Whisper', fontSize: '4vw', fontWeight: 'bold', color: '#000' }}>Soham Banik</p>
        </div>
      </div>


    </div>
  );
};

export default Home;

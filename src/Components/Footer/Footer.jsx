import React from "react";
import { MdCopyright } from "react-icons/md";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import gmail from "../../assets/images/gmail.png";

const Footer = () => {
  return (
    <footer
      className="pt-20"
      style={{ background: "linear-gradient(to right, white, lightblue)" }}
    >
      <hr className="h-1 bg-blue-800 mx-10 rounded-full" />

      <div
        className="mx-10 my-8 p-5 text-white rounded-lg flex flex-row justify-between"
        style={{ background: "linear-gradient(to right, #007fff, #0c46bc)" }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Whisper" }}>
            Soham Banik
          </h1>
          <p className="">
            Software Developer, Tect Enthusiast, Student & Lifelong Learner.
          </p>
        </div>

        <div>
          <button className="w-12 rounded-full bg-black">
            <img className="object-contain w-10 rounded-full" src={github} />
          </button>
        </div>
      </div>

      <p className="flex flex-wrap gap-2 justify-center w-full bg-blue-800 text-white px-2 py-4 items-center text-sm">
        <span className="flex flex-row gap-1 items-center">
          Copyright <MdCopyright size={24} /> {new Date().getFullYear()} Soham
          Banik.
        </span>
        <span> All rights reserved. </span>
        <span> Designed and developed by Soham Banik. </span>
      </p>
    </footer>
  );
};

export default Footer;

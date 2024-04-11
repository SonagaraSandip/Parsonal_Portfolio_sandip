import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="p-4 h-screen w-full text-white bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div
        className="max-w-screen-lg mx-auto
      p-4 flex flex-col justify-center  h-full w-full "
      >
        <div className=" pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-8 text-blue-300">
          Hi, my name is{" "}
          <span className="font-bold text-red-400">Sandip Sonagara</span>, and I
          am a final-year student specializing in{" "}
          <span className="font-bold text-green-400">
            Computer Science & Engineering
          </span>{" "}
          at{" "}
          <span className="font-bold text-purple-400">
            Government Engineering College, Patan
          </span>
          . I hail from{" "}
          <span className="font-bold text-yellow-400">Botad, Gujarat</span>. I
          am passionate about coding, particularly in{" "}
          <span className="font-bold text-indigo-400">
            React JS Development
          </span>{" "}
          and other web technologies.
        </p>

        <br />

        <p className="text-xl mt-8 text-gray-400">
          Throughout my academic journey, I have delved deeply into various
          coding projects. Notable projects include:
        </p>
        <ul className="list-disc list-inside text-gray-400">
          <li>
            <span className="font-bold text-blue-400">Country API data:</span> A
            project utilizing a <span className="font-bold text-blue-400">Country API </span>  and{" "}
            <span className="font-bold text-blue-400">ReactJS</span> to display
            country data.
          </li>
          <li>
            <span className="font-bold text-blue-400">
              Expense Tracking System:
            </span>{" "}
            A <span className="font-bold text-blue-400">ReactJS</span> web
            application for tracking expenses.
          </li>
          <li>
            <span className="font-bold text-blue-400">TODOs Application:</span>{" "}
            A task management application built with{" "}
            <span className="font-bold text-yellow-400">JavaScript</span>.
          </li>
        </ul>

        <br />

        <p className="text-xl mt-8 text-gray-400">
          For more details and to view my projects, please{" "}
          <span className="font-bold text-blue-400">
            visit my portfolio section.
          </span>
        </p>
      </div>
    </div>
  );
}

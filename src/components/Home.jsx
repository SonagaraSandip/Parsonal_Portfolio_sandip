import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import profile from "../assets/profile.png";

export default function Home() {
  const handleResumeClick = () => {
    window.open("/sandip_resume.pdf", "_blank");
  };
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className=" flex mx-auto items-center justify-center h-full flex-col max-w-screen-lg px-4 md:flex-row text-white">
          <div className="flex flex-col justify-center h-full">
            <h1 className=" text-4xl sm:text-6xl font-bold  text-white">
              I'm a React Developer
            </h1>
            <p className="text-gray-500 py-4 max-w-[30rem]">
              <span className="text-lg text-gray-500 font-bold">
                Hello, my name is{" "}
                <span className="text-blue-600">Sonagara Sandip S.</span> <br />
              </span>
              <span className="font-semibold text-gray-600 mt-2">
                I'm pursuing my bachelor's in computer science at{" "}
                <span className="text-green-600 font-bold">GEC Patan</span>. <br />
              </span>
              <span className="text-base font-semibold text-gray-600 mt-2">
                For more details, please check my resume{" "}
                <span className="text-red-600 font-bold">here</span>.
              </span>
            </p>
            <div>
              <button
                onClick={handleResumeClick}
                className="group text-1xl flex text-white w-fit  px-6 py-3 my-2 items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-800"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight
                    size={25}
                    alt="Arrow Function"
                    className="ml-1"
                  />
                </span>
              </button>
            </div>
          </div>

          <div className=" flex flex-col justify-center items-center ">
            
            <img
              src={profile}
              className="rounded-full mx-auto  md:w-full w-2/3 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

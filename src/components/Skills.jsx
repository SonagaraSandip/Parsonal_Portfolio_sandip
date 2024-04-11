import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import github from "../assets/github.png";

export default function Skills() {
  const skills = [
    {
      id: 1,
      skill: html,
      title: "HTML",
      lightStyle: "shadow-orange-500",
      darkStyle: "shadow-orange-700 dark:border-orange-700",
    },
    {
      id: 2,
      skill: css,
      title: "CSS",
      lightStyle: "shadow-blue-500",
      darkStyle: "shadow-blue-700 dark:border-blue-700",
    },
    {
      id: 3,
      skill: javascript,
      title: "JavaScript",
      lightStyle: "shadow-yellow-500",
      darkStyle: "shadow-yellow-700 dark:border-yellow-700",
    },
    {
      id: 4,
      skill: tailwind,
      title: "Tailwind CSS",
      lightStyle: "shadow-sky-400",
      darkStyle: "shadow-sky-600 dark:border-sky-600",
    },
    {
      id: 5,
      skill: react,
      title: "ReactJS",
      lightStyle: "shadow-blue-600",
      darkStyle: "shadow-blue-800 dark:border-blue-800",
    },
    {
      id: 6,
      skill: node,
      title: "NodeJS",
      lightStyle: "shadow-lime-500",
      darkStyle: "shadow-lime-700 dark:border-lime-700",
    },
    {
      id: 7,
      skill: github,
      title: "GitHub",
      lightStyle: "shadow-gray-400",
      darkStyle: "shadow-gray-600 dark:border-gray-600",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black"
    >
      <div className="max-w-screen-lg flex flex-col h-full w-full mx-auto justify-center text-white p-4">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-3 grid-cols-2 gap-8 py-8 px-12 sm:px-0 text-center items-center">
          {skills.map(({ id, skill, title, lightStyle, darkStyle }) => (
            <div
              key={id}
              className={`rounded-lg overflow-hidden shadow-md hover:scale-105 duration-500 py-2 ${lightStyle} dark:${darkStyle}`}
            >
              <img src={skill} className="w-20 mx-auto" alt={title} />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

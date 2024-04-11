import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialLink() {
  // const [SideBar, SetSideBar] = useState(false);
  const Links = [
    {
      key: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sandipsonagara/",
      style: "rounded-tr-md",
    },
    {
      key: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/SonagaraSandip",
    },
    {
      key: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sandipsonagara22@gmail.com",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed  ">
      <ul>
        {Links.map(({ key, child, href, style }) => (
          <li
            key={key}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

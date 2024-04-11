import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false); // Close the mobile menu if window size is large
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    {
      id: 1,
      label: "Home",
      link: "home",
    },
    {
      id: 2,
      label: "About",
      link: "about",
    },
    {
      id: 3,
      label: "Portfolio",
      link: "portfolio",
    },
    {
      id: 4,
      label: "Skills",
      link: "skills",
    },
    {
      id: 5,
      label: "Contact",
      link: "contact",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
        <div>
          <h1 className="text-5xl font-signature ml-2">Sandip</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, label, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          aria-label={nav ? "Close Menu" : "Open Menu"}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center top-0 left-0 h-screen w-full absolute bg-gradient-to-b from-black to-gray-500 z-10">
            {links.map(({ id, label, link }) => (
              <li
                key={id} // Use a unique identifier for keys
                className="px-4 py-6 cursor-pointer text-4xl capitalize"
              >
                <Link
                  onClick={() => setNav(false)} // Close menu on link click
                  to={link}
                  smooth
                  duration={500}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

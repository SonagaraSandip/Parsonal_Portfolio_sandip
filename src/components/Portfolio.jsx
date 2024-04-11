import React, { useState, useEffect } from "react";
import DarkCountry from "../assets/Portfolio/DarkCountry.png";
import LightCountry from "../assets/Portfolio/LightCountry.png";
import country_card from "../assets/Portfolio/country_card.png";
import Search_country from "../assets/Portfolio/Search_country.png";
import track_expense from "../assets/Portfolio/track_expense.png";
import track_sort_amount from "../assets/Portfolio/track_sort_amount.png";
import track_sorting_grocery from "../assets/Portfolio/track_sorting_grocery.png";
import todolist from "../assets/Portfolio/todolist.png";
import todolist_text from "../assets/Portfolio/todolist_text.png";

import "./portfolio.css";

const countryPortfolios = [
  {
    id: 1,
    images: [DarkCountry],
  },
  {
    id: 2,
    images: [LightCountry],
  },
  {
    id: 3,
    images: [country_card],
  },
  {
    id: 4,
    images: [Search_country],
  },
];
const expensePortfolio = [
  {
    id: 1,
    images: [track_expense],
  },
  {
    id: 2,
    images: [track_sort_amount],
  },
  {
    id: 3,
    images: [track_sorting_grocery],
  },
];
const todoPortfolio = [
  {
    id: 1,
    images: [todolist],
  },
  {
    id: 2,
    images: [todolist_text],
  },
];

const Portfolio = () => {
  const [currentCountrySlide, setCurrentCountrySlide] = useState(0);
  const [currentExpenseSlide, setCurrentExpenseSlide] = useState(0);
  const [currentTodoSlide, setCurrentTodoSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountrySlide(
        (prevSlide) => (prevSlide + 1) % countryPortfolios.length
      );
      setCurrentExpenseSlide(
        (prevSlide) => (prevSlide + 1) % expensePortfolio.length
      );
      setCurrentTodoSlide(
        (prevSlide) => (prevSlide + 1) % todoPortfolio.length
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handelCountryDemo = () => {
    window.open(
      "https://countries-api-data.netlify.app/",
      "_blank",
      "noopener ,noreferrer"
    );
  };

  const handelCountryCode = () => {
    window.open(
      "https://github.com/SonagaraSandip/Countries/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handelExpenseDemo = () => {
    window.open(
      "https://track-expenses-reactjs.netlify.app/",
      "_blank",
      "noopener ,noreferrer"
    );
  };
  const handelExpenseCode = () => {
    window.open(
      "https://github.com/SonagaraSandip/Expense_Tracker_Using_ReactJS/",
      "_blank",
      "noopener ,noreferrer"
    );
  };
  const handelTodoDemo = () => {
    window.open(
      "https://sonagarasandip.github.io/TO-DOs-List/",
      "_blank",
      "noopener ,noreferrer"
    );
  };
  const handelTodoCode = () => {
    window.open(
      "https://github.com/SonagaraSandip/TO-DOs-List",
      "_blank",
      "noopener ,noreferrer"
    );
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen p-4 "
    >
      <div className="max-w-screen-lg h-full w-full flex justify-center mx-auto p-4 flex-col">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here....</p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-0  ">
          {/* Country Grid */}
          <div className="overflow-hidden rounded-lg shadow-gray-600 shadow-md ">
            {countryPortfolios[currentCountrySlide].images.map((image, id) => (
              <div key={id} className="unset">
                <div className="snap-normal snap-center ">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg duration-300 hover:scale-105 overflow-hidden "
                  />
                  <div className="flex items-center justify-center ">
                    <button
                      onClick={handelCountryDemo}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Demo
                    </button>
                    <button
                      onClick={handelCountryCode}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* track expense */}
          <div className="overflow-hidden rounded-lg shadow-gray-600 shadow-md ">
            {expensePortfolio[currentExpenseSlide].images.map((image, id) => (
              <div key={id} className="unset">
                <div className="snap-normal snap-center ">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg duration-300 "
                  />
                  <div className="flex items-center justify-center ">
                    <button
                      onClick={handelExpenseDemo}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Demo
                    </button>
                    <button
                      onClick={handelExpenseCode}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* to do list */}
          <div className="overflow-hidden rounded-lg shadow-gray-600 shadow-md ">
            {todoPortfolio[currentTodoSlide].images.map((image, id) => (
              <div key={id} className="unset">
                <div className="snap-normal snap-center ">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg duration-300 "
                  />
                  <div className="flex items-center justify-center ">
                    <button
                      onClick={handelTodoDemo}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Demo
                    </button>
                    <button
                      onClick={handelTodoCode}
                      className="w-1/2 px-6 py-2 m-3 text-xl duration-200 hover:scale-105"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ title, description, imgSrc, href, icons }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  // check if icons is defined and is an array before rendering
  if (!Array.isArray(icons)) {
    icons = [];
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div
        className={`f-p-ul-box w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark"
            ? "hover:bg-slate-800"
            : "hover:bg-slate-50"
        } hover:scale-105 link`}
      >
        <div className=" w-full h-64 bg-gray-300 flex  items-center justify-center">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-beige-900 font-bold text-2xl">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <ul className="f-p-ul">
            {icons.map((icon, index) => (
              <li key={index}>
                <img src={icon} alt={`icon ${index}`} className="w-10 h-10" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;


// Navbar.jsx

import { useState, useEffect, createElement } from "react"; // Import createElement and useEffect
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Add useEffect to apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    // You can add logic to save the dark mode state to localStorage if you want to persist it.
  };

  return (
    <div className="w-full flex flex-col items-start">
      <div
        className="cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-primaryLinear p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex flex-col items-start bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "left-5" : "-left-full"
        } ${darkMode ? 'dark-mode' : ''}`}
        style={{ marginTop: '100px'}}
      >
        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full cursor-pointer ${i === active ? "bg-dark_primary text-white" : ""} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="text-xl p-2.5 rounded-full cursor-pointer"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

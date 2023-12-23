import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
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
        {nav.map((item, i) => {
          const IconComponent = item.icon; // Assume item.icon is the React component
          return (
            <a
              key={i}
              href={item.link}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full cursor-pointer ${i === active ? "bg-dark_primary text-white" : ""} `}
            >
              <IconComponent size={24} /> {/* Adjust the size as needed */}
            </a>
          );
        })}
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

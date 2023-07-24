import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const handleMenuClick = (index) => {
    setActive(index);
    setShowMenu(!showMenu); // Toggle the menu on and off
  };

  return (
    <div className="w-full flex justify-left fixed pl-4 pt-4">
      <div className="relative">
        <div
          className="sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2"
          onClick={() => setShowMenu(!showMenu)} // Toggle the menu on and off
        >
          <HiMenuAlt2 size={34} />
        </div>
        {showMenu && (
          <div
            className="fixed inset-0 bg-transparent backdrop-blur-md"
            onClick={() => setShowMenu(false)} // Close the menu when clicked outside
          />
        )}
        <nav
          className={`${
            showMenu ? "absolute top-full left-1/2 transform -translate-x-1/2 z-[999] opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          } flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-md text-dark_primary duration-300 transition-all`}
        >
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => handleMenuClick(i)}
              className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                i === active && "bg-dark_primary text-white"
              }`}
            >
              {createElement(item.icon)}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

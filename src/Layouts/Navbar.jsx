import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center relative">
      <div
        className="sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
        <nav
          className={`absolute top-full right-1/2 transform translate-x-1/2 z-[999] flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-md text-dark_primary duration-300 ${
            showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => {
                setActive(i);
                setShowMenu(false);
              }}
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

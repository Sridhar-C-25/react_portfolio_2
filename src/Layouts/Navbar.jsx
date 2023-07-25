import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[999] flex flex-col items-center">
      <div className="relative">
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={34} />
        </div>
        {showMenu && (
          <nav
            className={`absolute top-full left-1/2 transform -translate-x-1/2 z-[999] flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300`}
          >
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setActive(i)}
                className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                  i === active && "bg-dark_primary text-white"
                } `}
              >
                {createElement(item.icon)}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;

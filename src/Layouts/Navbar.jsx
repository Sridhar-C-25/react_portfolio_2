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
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-4 right-4 z-[999]">
      <div className="relative">
        <div
          className="sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2"
          onClick={handleMenuToggle}
        >
          <HiMenuAlt2 size={34} />
        </div>
        {showMenu && (
          <div
            className="fixed inset-0 bg-transparent"
            onClick={handleMenuToggle}
          />
        )}
        <nav
          className={`${
            showMenu
              ? "absolute top-12 right-0 translate-y-2 z-[999] opacity-100"
              : "opacity-0 pointer-events-none"
          } flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-md text-dark_primary duration-300 transition-opacity`}
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

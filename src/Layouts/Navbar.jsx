import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleMenuClick = (index) => {
    setActive(index);
    setExpanded(false);
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    setExpanded(!expanded);
  };

  return (
    <div className="fixed top-4 left-4 z-[999]">
      <div className="relative">
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg p-2 ${
            expanded ? "bg-white/50 w-28" : "bg-transparent"
          }`}
          onClick={handleMenuToggle}
          style={{ pointerEvents: showMenu ? "none" : "auto" }}
        >
          <HiMenuAlt2 size={34} />
        </div>
        {showMenu && (
          <div className="fixed inset-0" onClick={handleMenuToggle} />
        )}
        <nav
          className={`${
            showMenu
              ? "absolute top-16 left-1/2 -translate-x-1/2 z-[999] opacity-100 w-28"
              : "opacity-0 pointer-events-none w-0"
          } flex flex-col items-center gap-5 px-6 py-2 rounded-lg text-dark_primary`}
          style={{ background: "rgba(255, 255, 255, 0.5)", backdropFilter: "none" }}
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

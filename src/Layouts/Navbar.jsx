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
    <div className="fixed top-4 left-4 z-[999]">
      <div className="relative">
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg p-2 bg-white/50 flex items-center gap-2 transition-all ${
            showMenu ? "w-24" : "w-12"
          }`}
          onClick={handleMenuToggle}
          style={{ pointerEvents: showMenu ? "none" : "auto" }}
        >
          <HiMenuAlt2 size={34} />
          {showMenu &&
            nav.map((item, i) => (
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
        </div>
        {showMenu && (
          <div
            className="fixed inset-0"
            onClick={handleMenuToggle}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;

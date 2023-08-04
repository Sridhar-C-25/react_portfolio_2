import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuStyles = {
    position: "absolute",
    top: "14rem",
    left: showMenu ? "0" : "-100%", // Slide-in effect
    zIndex: "999",
    width: "40rem",
    backgroundColor: "rgba(74, 85, 104, 0.6)", // Use your desired background color
    padding: "6rem",
    backdropFilter: "blur(5px)",
    borderRadius: "1rem",
    color: "#1f2937", // Use your desired text color
    transition: "left 0.3s ease-in-out",
  };

  return (
    <div className="fixed top-4 left-4 z-[999]">
      <div className="relative">
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2`}
          onClick={toggleMenu}
        >
          <HiMenuAlt2 size={34} />
        </div>
        <nav style={menuStyles}>
          {nav.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onClick={() => {
                setActive(i);
                setShowMenu(false);
              }}
              style={{
                fontSize: "2.5rem",
                padding: "1.5rem",
                borderRadius: "50%",
                marginBottom: "1rem",
                backgroundColor:
                  i === active ? "#2f855a" : "transparent", // Use your desired active button color
                color: i === active ? "#ffffff" : "#1f2937", // Use your desired active and inactive text colors
              }}
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

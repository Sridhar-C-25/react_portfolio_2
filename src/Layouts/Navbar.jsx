import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";
import styled, { keyframes } from "styled-components";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <StyledNavbar>
      <div className="relative">
        {/* Button to toggle menu */}
        <div
          className={`sm:cursor-pointer z-[999] rounded-lg bg-white/40 p-2`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt2 size={34} />
        </div>
        {/* Menu contents */}
        <StyledNav
          showMenu={showMenu}
          className={`flex flex-col items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-lg text-dark_primary duration-300`}
        >
          {nav.map((item, i) => (
            <StyledNavItem
              key={i}
              href={item.link}
              onClick={() => setActive(i)}
              className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
                i === active && "bg-dark_primary text-white"
              } `}
            >
              {createElement(item.icon)}
            </StyledNavItem>
          ))}
        </StyledNav>
      </div>
    </StyledNavbar>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const StyledNavbar = styled.div`
  // Your existing styles for the Navbar container
`;

const StyledNav = styled.nav`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  animation: ${({ showMenu }) => (showMenu ? slideIn : slideOut)} 0.3s ease forwards;
  // Rest of your existing styles for the menu
`;

const StyledNavItem = styled.a`
  // Your existing styles for the menu items
`;

export default Navbar;

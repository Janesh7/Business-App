import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* None type list, for small devices use flex display and hidden */}

        {/* Now opening dynamic block of code taking nav and index and instantlly returing a list item, mad should have a key */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            // If the last item of navbar is active than give a margin right of 0 otherwise 10
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Now for Mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
        // Display image as per state, ie when burger menu and when opened, close symbol
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          // The above line is not good, we should never change the state using its previous version
          // rather we need to use a call by function and then do it, like
          //  onClick={() => setToggle({prev} => !prev)}
        />

        <div
        // If not toggled then hidden otherwise flex
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          // Padding of 6, bg color, position absolute, top-20, right-0 , margin x and y, minimu width , rounded edge , is a sidebar
        >
          {/*  Same code as above just not sm hidden tag, and flex display changed to col, and having a margin at bottom instead of right  */}
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

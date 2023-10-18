import React, { useState } from "react";
import NavBarMobail from "./NavBarMobail";

const NavBar = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <nav className="container flex items-center justify-between py-[50px]">
      <a href="/">
        <img src="./images/logo.svg" alt="logo" className="object-contain" />
      </a>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-[30px]">
          <li>
            <a
              href="/"
              className="text-text-nav font-[400] hover:text-text-hover"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-text-nav font-[400] hover:text-text-hover"
            >
              New
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-text-nav font-[400] hover:text-text-hover"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-text-nav font-[400] hover:text-text-hover"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-text-nav font-[400] hover:text-text-hover"
            >
              Categories
            </a>
          </li>
        </ul>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setNavMobile(true)}>
          <img src="./images/icon-menu.svg" alt="menu" className="w-[35px]" />
        </button>
        <div
          className={`${
            navMobile ? "right-0" : "-right-full"
          } fixed top-0 flex-col items-end bg-white bg-wihte w-[250px] h-full z-1 transition-all duration-500`}
        >
          <NavBarMobail setNavMobile={setNavMobile} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

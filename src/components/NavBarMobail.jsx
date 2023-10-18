import React from "react";

const NavBarMobail = ({ setNavMobile }) => {
  return (
    <div>
      <button
        onClick={() => setNavMobile(false)}
        className="ms-[150px] mt-[50px]"
      >
        <img
          src="./images/icon-menu-close.svg"
          alt="close"
          className="w-[30px]"
        />
      </button>
      <ul className="flex flex-col items-start justify-start ps-8 h-full gap-[30px] mt-[120px]">
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
  );
};

export default NavBarMobail;

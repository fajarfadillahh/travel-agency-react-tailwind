import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMenu3Line,
  RiCloseLine,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

// import color mode hooks
import useColorMode from "../hooks/useColorMode";

// import components & parts
import Button from "./Button";

export default function Header() {
  // menu open [mobile version]
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  // sticky header
  const [stickyHeader, setStickyHeader] = useState();

  useEffect(() => {
    const addStickyHeader = () => {
      if (window.scrollY >= 5) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };
    window.addEventListener("scroll", addStickyHeader);

    return () => {
      window.removeEventListener("scroll", addStickyHeader);
    };
  }, [stickyHeader]);

  // dark mode
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      className={`header fixed top-0 left-0 z-50 w-full transition-all duration-400 ${
        stickyHeader
          ? "bg-white shadow-md dark:bg-gray-900"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className={`header__logo text-[18px] font-bold transition-all duration-400 ${
            stickyHeader ? "text-green-600 dark:text-white" : "text-white"
          }`}
        >
          Travel.
        </Link>

        <div
          className={`header__menu fixed top-24 right-0 h-full w-[70%] bg-white px-8 py-12 shadow-[-2px_6px_4px_rgba(0,0,0,0.1)] transition-all duration-400 dark:bg-gray-900 md:static md:top-0 md:flex md:h-auto md:w-auto md:items-center md:gap-6 md:bg-transparent md:p-0 md:shadow-none md:dark:bg-transparent lg:gap-8 ${
            menuOpen ? "right-0" : "-right-full"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6 md:mb-0 md:flex-row lg:gap-8">
            {[
              ["About", "/about"],
              ["Discover", "/discover"],
              ["Best Place", "/best-place"],
              ["Blog", "/blog"],
            ].map(([title, url]) => (
              <li key={url}>
                <Link
                  to={url}
                  className={`header__link text-[15px] font-medium text-green-600 dark:text-white md:hover:text-green-600 ${
                    stickyHeader
                      ? "md:text-green-600 md:dark:text-white"
                      : "md:text-white"
                  }`}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* header theme [desktop version] */}
          <div
            className={`header__theme hidden cursor-pointer p-1 text-[1.3rem] hover:text-green-600 md:inline-flex ${
              stickyHeader ? "text-green-600 dark:text-white" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          <Button url="/contact-us">Contact us</Button>
        </div>

        <div className="header__wrapper inline-flex items-center gap-4 sm:gap-8 md:hidden">
          {/* header theme [mobile version] */}
          <div
            className={`header__theme inline-flex cursor-pointer p-1 text-[1.3rem] hover:text-green-600 ${
              stickyHeader ? "text-green-600 dark:text-white" : "text-white"
            }`}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
          </div>

          <div
            className={`header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] transition-all duration-400 ${
              stickyHeader ? "text-green-600 dark:text-white" : "text-white"
            }`}
            onClick={setHandleMenu}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </div>
        </div>
      </div>
    </header>
  );
}

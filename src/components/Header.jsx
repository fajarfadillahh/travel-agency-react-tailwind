import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

// import components & parts
import Button from "./Button";

export default function Header() {
  // MENU OPEN [MOBILE VERSION]
  const [menuOpen, setMenuOpen] = useState(false);

  const setHandleMenu = () => {
    setMenuOpen((even) => !even);
  };

  // STICKY HEADER
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

  return (
    <header
      className={`header fixed top-0 left-0 z-50 w-full transition-all duration-400 ${
        stickyHeader ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className={`header__logo text-[18px] font-bold transition-all duration-400 ${
            stickyHeader ? "text-green-600" : "text-white"
          }`}
        >
          Travel.
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-12 text-center shadow-md transition-all duration-400 ${
            menuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <ul className="header__list mb-6 flex flex-col gap-6">
            {[
              ["About", "/about"],
              ["Discover", "/discover"],
              ["Best Place", "/best-place"],
              ["Blog", "/blog"],
            ].map(([title, url]) => (
              <li key={url}>
                <Link
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-600 hover:text-green-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Button url="/contact-us">Contact us</Button>
        </div>

        <div
          className={`header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] transition-all duration-400 ${
            stickyHeader ? "text-green-600" : "text-white"
          }`}
          onClick={setHandleMenu}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>
      </div>
    </header>
  );
}

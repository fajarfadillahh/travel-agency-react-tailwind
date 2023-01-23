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
          className={`header__menu fixed top-24 right-0 h-full w-[70%] bg-white px-8 py-12 shadow-[-2px_6px_4px_rgba(0,0,0,0.1)] transition-all duration-400 ${
            menuOpen ? "right-0" : "-right-full"
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

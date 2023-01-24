import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY >= 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll fixed right-6 z-10 inline-flex cursor-pointer bg-green-600 p-3 text-[1.3rem] text-white transition-all duration-400 ${
        isVisible ? "bottom-16" : "-bottom-full"
      }`}
      onClick={scrollToTop}
    >
      <RiArrowUpLine />
    </button>
  );
}

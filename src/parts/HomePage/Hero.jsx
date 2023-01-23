import React from "react";
import { Link } from "react-router-dom";
import {
  RiInstagramFill,
  RiYoutubeFill,
  RiTwitterFill,
  RiArrowRightLine,
} from "react-icons/ri";

// import components & parts
import Button from "../../components/Button";

// import images
import HeroImg1 from "../../assets/images/hero1.jpg";
import HeroImg2 from "../../assets/images/hero2.jpg";

export default function Hero() {
  return (
    <section className="hero pb-16">
      <div className="hero__wrapper relative flex h-[85vh] items-center justify-center">
        {/* hero bg */}
        <img
          src={HeroImg1}
          alt="hero bg"
          className="hero__bg absolute top-0 left-0 h-full w-full object-cover object-[83%]"
        />

        <div className="hero__container container relative grid gap-12">
          <div className="hero__data">
            <p className="hero__data-subtitle pb-2 text-[15px] font-semibold text-white">
              Discover your places
            </p>
            <h1 className="hero__data-title pb-4 text-[42px] font-medium text-white">
              Explore the <br /> Best{" "}
              <b>
                Beautiful <br />
                Beaches.
              </b>
            </h1>
            <Button url="/" className="hero__data-button inline-flex">
              Explore now
            </Button>
          </div>

          {/* hero socials media */}
          <ul className="hero__socials flex w-max flex-col gap-6">
            <li>
              <Link
                to="/"
                className="hero__socials-icon inline-flex text-[1.3rem] text-white"
              >
                <RiInstagramFill />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hero__socials-icon inline-flex text-[1.3rem] text-white"
              >
                <RiYoutubeFill />
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hero__socials-icon inline-flex text-[1.3rem] text-white"
              >
                <RiTwitterFill />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hero__info absolute right-6 bottom-6 grid w-64 grid-cols-2 items-center gap-3 bg-green-600 p-4">
          <div>
            <h5 className="hero__info-title pb-2 text-[15px] font-semibold text-white">
              5 best places to visit.
            </h5>
            <Link
              to="/"
              className="hero__info-button inline-flex items-center gap-2 text-[14px] font-semibold text-white"
            >
              More
              <RiArrowRightLine />
            </Link>
          </div>

          <div className="hero__info-overlay overflow-hidden">
            <img
              src={HeroImg2}
              alt="hero info img"
              className="hero__info-img h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

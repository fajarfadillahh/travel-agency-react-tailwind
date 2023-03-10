import React from "react";

// import components & parts
import Button from "../../components/Button";

// import images
import AboutImg1 from "../../assets/images/about1.jpg";
import AboutImg2 from "../../assets/images/about2.jpg";

export default function About() {
  return (
    <section className="about section transition-all duration-400 dark:bg-gray-900">
      <div className="about__container container grid justify-items-center gap-12 xs:max-w-sm md:max-w-3xl md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl">
        <div className="about__data text-center md:text-left">
          <h1 className="about__title section-title">
            More Informastion About <br />
            The Best Beaches
          </h1>
          <p className="about__text section-text pb-8 lg:max-w-sm">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <Button url="/" className="about__button inline-flex">
            Reverse a place
          </Button>
        </div>

        <div className="about__img flex items-center gap-4">
          <img
            src={AboutImg1}
            alt="about img"
            className="about__img-1 w-32 lg:w-40 xl:w-48"
          />
          <img
            src={AboutImg2}
            alt="about img"
            className="about__img-2 w-44 lg:w-56 xl:w-64"
          />
        </div>
      </div>
    </section>
  );
}

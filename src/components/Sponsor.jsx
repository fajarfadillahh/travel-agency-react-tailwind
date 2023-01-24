import React from "react";

// import images
import SponsorImg1 from "../assets/images/sponsors1.png";
import SponsorImg2 from "../assets/images/sponsors2.png";
import SponsorImg3 from "../assets/images/sponsors3.png";
import SponsorImg4 from "../assets/images/sponsors4.png";
import SponsorImg5 from "../assets/images/sponsors5.png";

export default function Sponsor() {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container">
        <div className="sponsor__group grid grid-cols-2 justify-items-center gap-x-6 gap-y-14">
          <div className="sponsor__content">
            <img
              src={SponsorImg1}
              alt="sponsor img"
              className="sponsor__img w-24 invert-[0.7] transition-all duration-400 hover:invert-[0.4]"
            />
          </div>

          <div className="sponsor__content">
            <img
              src={SponsorImg2}
              alt="sponsor img"
              className="sponsor__img w-24 invert-[0.7] transition-all duration-400 hover:invert-[0.4]"
            />
          </div>

          <div className="sponsor__content">
            <img
              src={SponsorImg3}
              alt="sponsor img"
              className="sponsor__img w-24 invert-[0.7] transition-all duration-400 hover:invert-[0.4]"
            />
          </div>

          <div className="sponsor__content">
            <img
              src={SponsorImg4}
              alt="sponsor img"
              className="sponsor__img w-24 invert-[0.7] transition-all duration-400 hover:invert-[0.4]"
            />
          </div>

          <div className="sponsor__content">
            <img
              src={SponsorImg5}
              alt="sponsor img"
              className="sponsor__img w-24 invert-[0.7] transition-all duration-400 hover:invert-[0.4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

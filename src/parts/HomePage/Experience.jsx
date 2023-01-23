import React from "react";

// import images
import ExperienceImg1 from "../../assets/images/experience1.jpg";
import ExperienceImg2 from "../../assets/images/experience2.jpg";

export default function Experience() {
  return (
    <section className="experience section">
      <div className="experience__container container grid justify-items-center gap-12">
        <div className="experience__data text-center">
          <h1 className="experience__title section-title">
            With Our Experience <br />
            We Will Serve You
          </h1>

          <div className="experience__group grid grid-cols-3 items-center gap-8">
            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-gray-600">
                24
              </h3>
              <p className="experience__content-text text-[12px] text-gray-600">
                Year <br />
                Experience
              </p>
            </div>

            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-gray-600">
                1500+
              </h3>
              <p className="experience__content-text text-[12px] text-gray-600">
                Tours <br />
                Complete
              </p>
            </div>

            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-gray-600">
                850+
              </h3>
              <p className="experience__content-text text-[12px] text-gray-600">
                Tourist <br />
                Destinations
              </p>
            </div>
          </div>
        </div>

        <div className="experience__img relative">
          <img
            src={ExperienceImg1}
            alt="experience img"
            className="experience__img-1 w-[290px] pb-16"
          />
          <img
            src={ExperienceImg2}
            alt="experience img"
            className="experience__img-2 absolute -right-6 top-12 w-[130px]"
          />
        </div>
      </div>
    </section>
  );
}

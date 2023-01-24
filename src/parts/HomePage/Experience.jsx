import React from "react";

// import images
import ExperienceImg1 from "../../assets/images/experience1.jpg";
import ExperienceImg2 from "../../assets/images/experience2.jpg";

export default function Experience() {
  return (
    <section className="experience section">
      <div className="experience__container container grid justify-items-center gap-12 xs:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
        <div className="experience__data text-center">
          <h1 className="experience__title section-title">
            With Our Experience <br />
            We Will Serve You
          </h1>

          <div className="experience__group grid grid-cols-3 items-center gap-8 md:gap-16 lg:gap-24">
            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-green-600 lg:text-[24px] xl:text-[28px]">
                24
              </h3>
              <p className="experience__content-text text-[12px] text-gray-600">
                Year <br />
                Experience
              </p>
            </div>

            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-green-600 lg:text-[24px] xl:text-[28px]">
                1500+
              </h3>
              <p className="experience__content-text text-[12px] text-gray-600">
                Tours <br />
                Complete
              </p>
            </div>

            <div className="experience__content">
              <h3 className="experience__content-number pb-1 text-[20px] font-semibold text-green-600 lg:text-[24px] xl:text-[28px]">
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
            className="experience__img-1 w-[290px] pb-16 xs:w-[330px] md:w-[400px] lg:w-[480px] xl:w-[700px]"
          />
          <img
            src={ExperienceImg2}
            alt="experience img"
            className="experience__img-2 absolute -right-6 top-12 w-[130px] xs:w-[160px] md:-right-12 md:w-[190px] lg:-right-16 lg:w-[210px] xl:-right-24 xl:top-20 xl:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

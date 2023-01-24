import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import images
import DiscoverImg1 from "../../assets/images/discover1.jpg";
import DiscoverImg2 from "../../assets/images/discover2.jpg";
import DiscoverImg3 from "../../assets/images/discover3.jpg";
import DiscoverImg4 from "../../assets/images/discover4.jpg";

export default function Discover() {
  return (
    <section className="discover section">
      <div className="discover__data pb-8 text-center">
        <h1 className="discover__title section-title">
          Discover The Most <br />
          Attractive Places
        </h1>
      </div>

      <div className="discover__container container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={32}
          coverflowEffect={{
            rotate: 0,
          }}
          modules={[EffectCoverflow]}
          className="discover__group"
        >
          <SwiperSlide className="discover__card group relative w-56 overflow-hidden">
            <img
              src={DiscoverImg1}
              alt="discover img"
              className="discover__card-img transition-all duration-400 group-hover:scale-110"
            />

            {/* card overlay */}
            <div className="discover__card-overlay absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-gray-900/90 to-transparent" />

            <div className="discover__card-data absolute bottom-8 left-6">
              <h3 className="discover__card-title text-[18px] font-bold text-white">
                Bali
              </h3>
              <p className="discover__card-text text-[14px] text-white">
                24 tours available
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="discover__card group relative w-56 overflow-hidden">
            <img
              src={DiscoverImg2}
              alt="discover img"
              className="discover__card-img transition-all duration-400 group-hover:scale-110"
            />

            {/* card overlay */}
            <div className="discover__card-overlay absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-gray-900/90 to-transparent" />

            <div className="discover__card-data absolute bottom-8 left-6">
              <h3 className="discover__card-title text-[18px] font-bold text-white">
                Hawaii
              </h3>
              <p className="discover__card-text text-[14px] text-white">
                18 tours available
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="discover__card group relative w-56 overflow-hidden">
            <img
              src={DiscoverImg3}
              alt="discover img"
              className="discover__card-img transition-all duration-400 group-hover:scale-110"
            />

            {/* card overlay */}
            <div className="discover__card-overlay absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-gray-900/90 to-transparent" />

            <div className="discover__card-data absolute bottom-8 left-6">
              <h3 className="discover__card-title text-[18px] font-bold text-white">
                Hvar
              </h3>
              <p className="discover__card-text text-[14px] text-white">
                21 tours available
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="discover__card group relative w-56 overflow-hidden">
            <img
              src={DiscoverImg4}
              alt="discover img"
              className="discover__card-img transition-all duration-400 group-hover:scale-110"
            />

            {/* card overlay */}
            <div className="discover__card-overlay absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-gray-900/90 to-transparent" />

            <div className="discover__card-data absolute bottom-8 left-6">
              <h3 className="discover__card-title text-[18px] font-bold text-white">
                Whitehaven
              </h3>
              <p className="discover__card-text text-[14px] text-white">
                17 tours available
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
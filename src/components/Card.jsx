import React from "react";
import { RiStarFill } from "react-icons/ri";

export default function Card({ image, rating, title, location, price }) {
  return (
    <div className="card group relative h-[250px] w-full cursor-pointer overflow-hidden xs:h-[260px] lg:h-[330px] xl:h-[410px]">
      <img
        src={image}
        alt="card img"
        className="card__img h-full w-full object-cover object-center transition-all duration-400 group-hover:scale-110"
      />

      {/* card overlay data */}
      <div className="card__overlay absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-gray-900/90 to-transparent" />

      {/* card content */}
      <div className="card__content absolute top-0 left-0 flex h-full w-full flex-col justify-between p-4 xl:p-6">
        <div className="card__rating inline-flex w-max items-center gap-2 rounded-full bg-green-600 py-1 px-2 text-[14px] font-semibold text-white lg:text-[15px]">
          <RiStarFill className="card__icon text-[1rem]" />
          {rating}
        </div>

        <div className="card__data">
          <h3 className="card__title font-bold text-white lg:text-[20px] xl:text-[24px]">
            {title}
          </h3>
          <p className="card__location pb-3 text-[14px] text-white lg:text-[15px]">
            {location}
          </p>
          <p className="card__price text-[14px] text-white lg:text-[15px]">
            <b className="card__number text-[16px] lg:text-[20px] xl:text-[24px]">
              ${price}
            </b>{" "}
            /night
          </p>
        </div>
      </div>
    </div>
  );
}

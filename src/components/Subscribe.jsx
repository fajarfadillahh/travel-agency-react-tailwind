import React from "react";

// import components & parts
import Button from "./Button";

export default function Subscribe() {
  return (
    <section className="subscribe section transition-all duration-400 dark:bg-gray-900">
      <div className="subscribe__bg bg-green-600 py-16 md:bg-transparent">
        <div className="subscribe__container container grid gap-12 md:bg-green-600 md:py-20 md:px-12 lg:max-w-3xl xl:max-w-4xl">
          <div className="subscribe__data text-center">
            <h1 className="subscribe__title section-title text-white">
              Subscribe To Get <br />
              Our Newsletter
            </h1>
            <p className="subscribe__text section-text text-white">
              Subscribe to our newsletter and <br />
              get a special 30% discount.
            </p>
          </div>

          <form
            action=""
            className="subscribe__form flex items-center gap-4 bg-white p-2 xs:w-[420px] xs:justify-self-center md:w-[500px]"
          >
            <input
              type="email"
              placeholder="Enter email address"
              className="subscribe__input h-[52px] w-full pl-2 text-[15px] font-semibold text-green-600 outline-none placeholder:text-[15px] placeholder:font-normal placeholder:text-gray-600"
            />
            <Button url="/" className="subscribe__button">
              Subscibe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

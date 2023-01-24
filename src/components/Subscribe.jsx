import React from "react";

// import components & parts
import Button from "./Button";

export default function Subscribe() {
  return (
    <section className="subscribe section">
      <div className="subscribe__bg bg-green-600 py-16">
        <div className="subscribe__container container grid justify-items-center gap-12">
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
            className="subscribe__form flex items-center gap-4 bg-white p-2"
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

import React from "react";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";

// import video
import VideoFile from "../../assets/video/video.mp4";

export default function Video() {
  return (
    <section className="video section">
      <div className="video__container container grid justify-items-center gap-12">
        <div className="video__data text-center">
          <h1 className="video__title section-title">
            The Best View Video <br /> In The World
          </h1>
          <p className="video__text section-text">
            Find out more with our video of the most beautiful and pleasant
            places for you and your family.
          </p>
        </div>

        <div className="video__content relative">
          <video src={VideoFile} className="video__content-file" />

          <button className="video__content-button absolute right-6 -bottom-5 inline-flex bg-green-600 py-3 px-5 text-[1.3rem] text-white">
            <RiPlayFill />
          </button>
        </div>
      </div>
    </section>
  );
}

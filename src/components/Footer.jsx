import React from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pt-32 pb-16 transition-all duration-400 dark:bg-gray-900">
      <div className="footer__container container grid gap-24 lg:max-w-4xl xl:max-w-5xl">
        <div className="footer__group grid gap-12 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:justify-items-center">
          <div className="footer__content">
            <Link
              to="/"
              className="footer__content-logo text-[18px] font-bold text-green-600 dark:text-white"
            >
              Travel
            </Link>

            <p className="footer__content-text section-text pb-6 pt-2">
              Travel you choose the <br />
              destinaiton, we offer you the <br />
              experience.
            </p>

            <ul className="footer__content-socials inline-flex w-max items-center gap-6 text-[1.3rem] text-green-600 dark:text-white">
              <Link to="/" target="_blank" className="footer__content-icon">
                <RiTwitterFill />
              </Link>
              <Link to="/" target="_blank" className="footer__content-icon">
                <RiYoutubeFill />
              </Link>
              <Link to="/" target="_blank" className="footer__content-icon">
                <RiInstagramFill />
              </Link>
              <Link to="/" target="_blank" className="footer__content-icon">
                <RiFacebookFill />
              </Link>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 text-[17px] font-semibold text-green-600 dark:text-white">
              About
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["About Us", "/about"],
                ["Features", "/features"],
                ["News & Blog", "/news-blog"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link section-text hover:text-green-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 text-[17px] font-semibold text-green-600 dark:text-white">
              Compony
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["Team", "/team"],
                ["Plan & Pricing", "/plan-pricing"],
                ["Become a member", "/become-member"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link section-text hover:text-green-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__content-title pb-4 text-[17px] font-semibold text-green-600 dark:text-white">
              Support
            </h3>

            <ul className="footer__content-list flex flex-col gap-2">
              {[
                ["FAQs", "/faqs"],
                ["Support Center", "/support-center"],
                ["Contact Us", "/contact-us"],
              ].map(([title, url]) => (
                <li key={url}>
                  <Link
                    to={url}
                    className="footer__content-link section-text hover:text-green-600 hover:underline"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="footer__copyrights border-t border-gray-200 pt-8 text-center text-[15px] text-green-600 dark:text-white">
          ?? Copyrights 2023 Travel. All rigths reserved | Develop by Fajar
          Fadillah A ??????
        </p>
      </div>
    </footer>
  );
}

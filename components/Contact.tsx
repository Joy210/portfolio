import Link from "next/link";
import ButtonLink from "./Button";
import { menuItem } from "./data/navbarData";

const Contact = () => {
  return (
    <div className="contact-wrapper text-center pt-12 pb-[88px] md:pt-120 md:pb-100 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inner-content space-y-10 md:space-y-120">
          <div className="content space-y-6 md:space-y-12">
            <h2 className="text-slate-300 font-bold lh-120">
              Write a <span className="text-slate-900"> message, </span>
              <br />
              and <span className="text-indigo-500"> let’s discuss </span> with
              <br />
              <span className="text-slate-900">your project. </span>
            </h2>

            <p className="text-base md:text-32 font-semibold text-slate-900">
              sohanoor404@gmail.com
            </p>

            <ButtonLink name="Book a Call" url="" isIcon={true} />
          </div>

          {/* Copyright section start */}
          <div className="copyright flex items-center justify-between text-xs md:text-base">
            <div className="flex items-center space-x-1 text-slate-60 mx-auto md:mx-0">
              <i className="ri-copyright-line"></i>
              <p>2023 Portfolio by Sohanur Rahman</p>
            </div>

            <div className="hidden md:block">
              <ul className="font-medium flex items-center space-x-6">
                {menuItem.map(({ name, url }, i) => {
                  return (
                    <li
                      key={i}
                      className="transform translate-y-0 hover:-translate-y-0.5 ease-in-out duration-200"
                    >
                      <Link
                        href={url}
                        target="_blank"
                        className="flex items-center justify-center text-slate-600 hover:text-indigo-500 leading-5"
                      >
                        <span className="menu-name"> {name} </span>

                        <i className="ri-arrow-right-up-line text-[20px]" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Copyright section end */}
        </div>

        {/* Plane SVG Start */}
        <div className="absolute top-0 right-0 hidden md:block">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1">
              <path
                d="M137.5 12.5L68.75 81.25"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M137.5 12.5L93.75 137.5L68.75 81.25L12.5 56.25L137.5 12.5Z"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        {/* Plane SVG End */}
      </div>

      <div
        className="watermark uppercase text-[66px] md:text-264 font-extrabold text-slate-100 md:text-slate-50 absolute z-0 -bottom-2 md:-bottom-10
       m-auto left-0 right-0 leading-none"
      >
        contact
      </div>
    </div>
  );
};

export default Contact;

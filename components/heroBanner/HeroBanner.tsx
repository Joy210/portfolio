import Image from "next/image";
import Link from "next/link";
import MousePointer from "../MousePointer";
import { whatsappLink } from "../data/heroBannerData";
import HeaderCircle from "../svg/HeaderCircle";

const HeroBanner = () => {
  return (
    <div className="bg-slate-100 py-12 md:py-24 relative">
      <div className="container">
        <div className="relative space-y-4 md:space-y-8 z-10">
          {/* desktop version start */}
          <div className="hidden md:block space-y-0.5">
            <h1 className="flex items-center pl-28 space-x-6">
              <span> Hi 👋, I’m </span>
              <span className="text-indigo-500"> Joy </span>
              <span>
                <Image
                  src="/assets/joy_header.png"
                  loading="lazy"
                  alt="author-image"
                  width={136}
                  height={96}
                  className="rounded-full object-contain"
                />
              </span>
            </h1>

            <h1 className="flex items-center space-x-5">
              <span> oneStop</span>
              <span> ✨ </span>
              <span className="text-slate-900"> creative</span>
              <span> person </span>
            </h1>

            <h1 className="flex items-center space-x-5 pl-56">
              <span> for all design needs. </span>
            </h1>
          </div>
          {/* desktop version end */}

          {/* mobile version start */}
          <div className="visible md:hidden space-y-0.5">
            <h1 className="">
              <span> Hi 👋,</span>
            </h1>

            <h1 className="text-slate-900 text-[64px]">
              <span> I&apos;m </span>
              <span className="text-indigo-500"> Joy </span>
            </h1>

            <div className="-space-y-[2.4px] m-0">
              <h1 className="flex items-center">
                <span> oneStop</span>
                <span> ✨ </span>
              </h1>

              <h1 className="flex items-center space-x-1.5">
                <span className="text-slate-900"> creative</span>
                <span> person </span>
              </h1>

              <h1 className="flex items-center space-x-1.5">
                <span> for all </span>
                <span className="text-slate-900"> design </span>
              </h1>

              <h1 className="flex items-center"> needs. </h1>
            </div>
          </div>
          {/* mobile version end */}

          <div className="md:grid md:grid-cols-6 md:gap-8 items-start">
            <div className="hidden md:block">
              <div className="flex items-center py-3">
                <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                <span className="grow h-0.5 bg-slate-200"></span>
                <span className="w-2 h-2 rounded-full bg-slate-200"></span>
                <span className="grow h-0.5 bg-slate-200"></span>
                <span className="w-2 h-2 rounded-full bg-slate-200"></span>
              </div>
            </div>

            <div className="md:col-span-4 md:px-1 md:space-y-12  space-y-6">
              <p className="text-slate-600 text-sm md:text-xl font-light leading-relaxed">
                I am a multi-disciplinary creative{" "}
                <span className="font-semibold text-slate-800">
                  Product Designer
                </span>{" "}
                and solution provider, boasting nearly{" "}
                <span className="font-semibold text-slate-800">4.5+ years</span>{" "}
                of extensive experience in the creative industry.
              </p>

              <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center gap-4 transform translate-y-0 hover:-translate-y-2 ease-in-out duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center text-2xl border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 duration-300 ease-in-out">
                    <i className="ri-whatsapp-fill animate-pulse"></i>
                  </div>

                  <div className="content text-slate-500 pt-0.5">
                    <p className="flex items-center text-emerald-500 font-semi">
                      <span className="menu-name "> Whatsapp </span>

                      <i className="ri-arrow-right-up-line text-2xl leading-none" />
                    </p>
                    <p className="text-sm leading-normal font-light">
                      Chat Real-Time
                    </p>
                  </div>
                </Link>

                <div className="hidden md:block h-12">
                  <div className="flex flex-col items-center gap-1 py-0.5 h-full">
                    <span className="grow w-0.5 bg-slate-200"></span>
                    <span className="uppercase text-[10px] font-semibold text-slate-400 leading-none">
                      or
                    </span>
                    <span className="grow w-0.5 bg-slate-200"></span>
                  </div>
                </div>

                <Link
                  href={"/"}
                  target="_blank"
                  className="flex items-center gap-4 transform translate-y-0 hover:-translate-y-2 ease-in-out duration-300 group"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-xl flex items-center justify-center text-2xl border border-indigo-200 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 duration-300 ease-in-out">
                    <i className="ri-calendar-fill text-xl animate-pulse"></i>
                  </div>

                  <div className="content text-slate-500 pt-0.5">
                    <p className="flex items-center text-indigo-500 font-semi">
                      <span className="menu-name"> Book a Call </span>

                      <i className="ri-arrow-right-up-line text-2xl leading-none" />
                    </p>
                    <p className="text-sm leading-normal font-light">
                      Schedule a metting
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="empty"></div>
          </div>
        </div>
      </div>

      {/* Circle BG Shape */}
      {/* <Image
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 z-0"
        src={"/assets/bg_circle_shape.png"}
        alt="BG Circle Shape"
        width={500}
        height={500}
        priority={false}
      /> */}

      <HeaderCircle className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-0 z-0" />
      {/* Circle BG Shape */}

      <div className="mouse-pointer absolute top-[164px] md:top-40 md:left-1/2 z-10 pl-48 md:pl-44 pt-2">
        <MousePointer
          fill="#F43F5E"
          textColor="text-white"
          textBgColor="bg-rose-500"
          text="Product Designer"
        />
      </div>
    </div>
  );
};

export default HeroBanner;

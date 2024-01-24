import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { useSwiper } from "swiper/react";

const SwiperNavigationBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="md:absolute md:right-0 md:bottom-0 text-3xl flex justify-end gap-6 md:gap-0 z-10 bg-white text-slate-800">
      <button
        className=" md:w-14 md:h-14 flex items-center justify-center bg-white outline-none rounded-xl hover:text-indigo-500 ease-in-out duration-300 text-slate-400"
        aria-label="prev"
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftLine size={24} />
      </button>

      <button
        className=" md:w-14 md:h-14 flex items-center justify-center bg-white outline-none rounded-xl hover:text-indigo-500 ease-in-out duration-300"
        aria-label="next"
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightLine size={24} />
      </button>
    </div>
  );
};

export default SwiperNavigationBtn;

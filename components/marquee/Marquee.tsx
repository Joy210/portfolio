import { marqueeTexts } from "../data/marqueeTextData";

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden text-base uppercase font-semibold space-x-4 bg-indigo-500 text-white">
      <div className="py-4 md:py-6 animate-marquee whitespace-nowrap flex items-center gap-4">
        {marqueeTexts.map((text, i) => {
          return (
            <span key={i} className="flex items-center gap-4">
              <span> {text} </span>
              <span className="text-sm">
                <i className="ri-shining-2-fill"></i>
              </span>
            </span>
          );
        })}
      </div>

      <div className="absolute top-0 py-6 animate-marquee2 whitespace-nowrap  flex items-center gap-4">
        {marqueeTexts.map((text, i) => {
          return (
            <span key={i} className="flex items-center gap-4">
              <span> {text} </span>
              <span className="text-sm">
                <i className="ri-shining-2-fill"></i>
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;

// Marquee Text

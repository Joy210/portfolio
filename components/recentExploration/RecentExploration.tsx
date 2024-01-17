/* eslint-disable @next/next/no-img-element */
import { highlightedText } from "../about/About";
import {
  recentExploreData,
  recentExploreData2,
} from "../data/recentExploreData";

const RecentExploration = () => {
  return (
    <div className="bg-slate-950 py-12 pb-16 md:py-120 relative space-y-8 md:space-y-20">
      <div className="container">
        <div className="md:px-20 text-center">
          <h2 className="text-slate-800 font-extrabold leading-tight">
            My Recent {highlightedText("Visual Explorations")}
          </h2>
        </div>
      </div>

      <div className="space-y-2 md:space-y-8">
        {/* slide to right */}
        <div className="relative flex overflow-x-hidden space-x-8">
          <div className=" animate-imageSlider whitespace-nowrap flex items-center gap-2 md:gap-8">
            {recentExploreData.map(({ title, imgURL }, i) => (
              <div
                className="min-w-[148px] md:min-w-[380px] h-[100px] md:h-[280px] rounded-xl overflow-hidden border border-slate-900"
                key={i}
              >
                <img
                  src={imgURL}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-imageSlider2 whitespace-nowrap flex items-center gap-2 md:gap-8">
            {recentExploreData.map(({ title, imgURL }, i) => (
              <div
                className="min-w-[148px] md:min-w-[380px] h-[100px] md:h-[280px] rounded-xl overflow-hidden border border-slate-900"
                key={i}
              >
                <img
                  src={imgURL}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* slide to left */}
        <div className="relative flex overflow-x-hidden space-x-8">
          <div className=" animate-slidetoright whitespace-nowrap flex items-center gap-2 md:gap-8">
            {recentExploreData2.map(({ title, imgURL }, i) => (
              <div
                className="min-w-[200px] h-[148px] md:min-w-[380px] md:h-[280px] rounded-xl overflow-hidden border border-slate-900"
                key={i}
              >
                <img
                  src={imgURL}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 animate-slidetoright2 whitespace-nowrap flex items-center gap-2 md:gap-8">
            {recentExploreData2.map(({ title, imgURL }, i) => (
              <div
                className="min-w-[200px] h-[148px] md:min-w-[380px] md:h-[280px] rounded-xl overflow-hidden border border-slate-900"
                key={i}
              >
                <img
                  src={imgURL}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentExploration;

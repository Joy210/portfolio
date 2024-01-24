/* eslint-disable @next/next/no-img-element */
import { highlightedText } from "../about/About";
import ImageSlider from "./ImageSlider";

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

      <div className="space-y-2 md:space-y-2">
        {/* slide to right */}
        <ImageSlider duration="80" fromRight />

        {/* slide to left */}
        <ImageSlider duration="120" fromLeft />
      </div>
    </div>
  );
};

export default RecentExploration;

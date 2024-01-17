import { cityCount, destinationData } from "../data/destinationData";
import MapSvg from "../svg/mapSvg";

const GlobalWork = () => {
  return (
    <div className="py-12 md:py-120">
      <div className="container relative space-y-6 md:space-y-2">
        <div className="p-5 bg-slate-950 rounded-2xl text-white w-[288px] md:w-80 space-y-2 md:absolute top-0 right-0 md:mr-16 animate-mousePointer hover:animate-none mx-auto">
          <h4 className="text-lg font-semi">Global Work Network</h4>

          <ul className="grid grid-cols-2 text-sm text-slate-400 leading-normal md:leading-loose font-light">
            {destinationData.map((cities, i) => (
              <li
                key={i}
                className="transform translate-x-0 hover:translate-x-2 ease-in-out duration-300 hover:text-indigo-400 hover:font-semi"
              >
                {cities}
              </li>
            ))}
          </ul>

          <span className="w-5 h-5 bg-slate-950 absolute rotate-45 -bottom-2 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 rounded"></span>
        </div>

        <div className="flex justify-center">
          <MapSvg />
        </div>

        <div className="text-slate-300 mx-auto text-center text-[3.5rem] font-extrabold leading-tight uppercase">
          <h3> Collaborating </h3>
          <h3>
            Across <span className="text-slate-900"> {cityCount}+ Global </span>
          </h3>
          <h3 className="text-slate-900"> Destinations </h3>
        </div>
      </div>
    </div>
  );
};

export default GlobalWork;

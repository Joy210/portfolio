import { getDribbbleShots } from "@/utils/getDribbbleShots";
import { FC } from "react";
import ShotsCard from "./ShotsCard";

type ImageSliderProps = {
  fromLeft?: boolean;
  fromRight?: boolean;
  duration?: string;
};

const ImageSlider: FC<ImageSliderProps> = async ({
  fromLeft,
  fromRight,
  duration,
}) => {
  // get dribbble shots
  const shots = await getDribbbleShots();
  // console.log(shots);

  // style
  const styles: any = {
    duration: {
      "--time": `${duration}s`,
    },
  };

  return (
    <div
      className="scroll relative flex w-full overflow-hidden"
      style={styles.duration}
    >
      {/* Image slider row 1 start */}
      <div
        className={`flex items-center justify-center whitespace-nowrap ${
          fromRight === true
            ? "fromRight"
            : "" || fromLeft === true
            ? "fromLeft"
            : ""
        }`}
      >
        {shots &&
          shots.map((shot) => (
            <ShotsCard
              key={shot.id}
              title={shot.title}
              imgURL={shot.images.two_x}
              url={shot.html_url}
            />
          ))}
      </div>
      {/* Image slider row 1 end */}

      {/* Image slider row 2 start */}
      <div
        className={`flex items-center justify-center whitespace-nowrap ${
          fromRight === true
            ? "fromRight"
            : "" || fromLeft === true
            ? "fromLeft"
            : ""
        }`}
      >
        {shots &&
          shots.map((shot) => (
            <ShotsCard
              key={shot.id}
              title={shot.title}
              imgURL={shot.images.two_x}
              url={shot.html_url}
            />
          ))}
      </div>
      {/* Image slider row 2 end */}
    </div>
  );
};

export default ImageSlider;

import { FC } from "react";

type HeaderCircleProps = {
  className?: string;
};

const HeaderCircle: FC<HeaderCircleProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="580"
      height="580"
      viewBox="0 0 580 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_f_715_4128)">
        <circle cx="290" cy="290" r="250" fill="url(#paint0_radial_715_4128)" />
      </g>
      <defs>
        <filter
          id="filter0_f_715_4128"
          x="0"
          y="0"
          width="580"
          height="580"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_715_4128"
          />
        </filter>
        <radialGradient
          id="paint0_radial_715_4128"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(290 290) rotate(90) scale(250)"
        >
          <stop stop-color="white" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default HeaderCircle;

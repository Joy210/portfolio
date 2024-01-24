import { FC } from "react";

type MousePointerProps = {
  text: string;
  textColor: string;
  textBgColor: string;
  fill: string;
};

// const fillColor = {
//   indigo: "#f59e0b",
//   dark: "#0f172a",
//   success: "#10b981",
//   warning: "#f59e0b",
//   error: "#f43f5e",
// };

const MousePointer: FC<MousePointerProps> = ({
  text,
  textBgColor,
  textColor,
  fill,
}) => {
  // const test: FC<String> = () => {
  //   if (fill === "indigo") return fillColor.indigo;
  // };

  return (
    <div className="w-8 h-8 flex items-center justify-center relative animate-mousePointer">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.2817 6.88377C18.6007 7.41951 18.4999 9.32035 17.1316 9.71366L10.2228 11.7L7.06754 18.1584C6.44306 19.438 4.55318 19.2069 4.25409 17.8144L1.03855 2.81588C0.981093 2.54928 0.997405 2.27207 1.08574 2.01406C1.17407 1.75604 1.33108 1.52699 1.53987 1.35156C1.74866 1.17612 2.00134 1.06092 2.27071 1.01837C2.54009 0.975819 2.81596 1.00752 3.06867 1.11006L17.2817 6.88377Z"
          fill={fill}
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      <p
        className={`py-1.5 px-2.5 text-nowrap ${textBgColor} rounded-lg text-xs ${textColor} absolute left-5 -bottom-5 -ml-0.5 mb-0.5`}
      >
        {text}
      </p>
    </div>
  );
};

export default MousePointer;

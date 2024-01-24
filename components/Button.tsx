import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { FC } from "react";

type ButtonProps = {
  name: string;
  url: string;
  isIcon?: boolean;
  isLarge?: boolean;
};

const ButtonLink: FC<ButtonProps> = ({ url, name, isIcon, isLarge }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`group ml-2 bg-slate-900 text-white rounded-full inline-flex items-center hover:bg-indigo-500 ease-in-out duration-300 transform translate-y-0 hover:-translate-y-1 ${
        isIcon === true
          ? isLarge === true
            ? buttonProperty.lg
            : buttonProperty.md
          : isLarge === true
          ? "h-14 px-8"
          : "h-12 px-6"
      }`}
    >
      <span> {name} </span>

      {isIcon === true && (
        <span className="p-1 rounded-full bg-white text-slate-900 flex item-center justify-center group-hover:text-indigo-500 ease-in-out duration-300">
          {isLarge ? (
            <RiArrowRightUpLine size={24} />
          ) : (
            <RiArrowRightUpLine size={22} />
          )}
        </span>
      )}

      {/* {isIcon === true && (
        <span
          className={`rounded-full bg-white flex item-center justify-center font-semibold text-slate-900 group-hover:text-indigo-500 ease-in-out duration-300 ${
            isLarge === true ? iconSize.lg : iconSize.md
          }`}
        >
          <i
            className={`ri-arrow-right-up-line ${
              isLarge === true ? "-mt-[1px]" : "-mt-[1px]"
            }`}
          />
        </span>
      )} */}
    </Link>
  );
};

export default ButtonLink;

// Button and Icon property for md, lg size
const buttonProperty = {
  md: "h-12 pl-5 pr-2 space-x-2",
  lg: "h-14 pl-6 pr-3 space-x-3 text-lg",
};

// const iconSize = {
//   md: "h-7 w-7 text-[20px]",
//   lg: "h-9 w-9 text-[26px]",
// };

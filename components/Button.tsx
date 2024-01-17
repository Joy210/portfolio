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
      className={`group ml-2 font-normal bg-slate-900 text-white rounded-full inline-flex items-center hover:bg-indigo-500 ease-in-out duration-300 transform translate-y-0 hover:-translate-y-1 ${
        isIcon === true
          ? isLarge === true
            ? buttonProperty.lg
            : buttonProperty.md
          : isLarge === true
          ? "h-14 px-8 text-[18px]"
          : "h-12 px-6"
      }`}
    >
      <span> {name} </span>

      {isIcon === true && (
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
      )}
    </Link>
  );
};

export default ButtonLink;

// Button and Icon property for md, lg size
const buttonProperty = {
  md: "h-12 pl-5 pr-2.5 space-x-2",
  lg: "h-14 text-[18px] pl-6 pr-2.5 space-x-3",
};

const iconSize = {
  md: "h-7 w-7 text-[20px]",
  lg: "h-9 w-9 text-[26px]",
};

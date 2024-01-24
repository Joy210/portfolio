import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Heading from "../Heading";
import { educationHistory, workHistoryList } from "../data/aboutTextsData";
import AdobeXD from "../svg/AdobeXD";
import Figma from "../svg/Figma";
import Framer from "../svg/Framer";
import Illustrator from "../svg/Illustrator";
import Miro from "../svg/Miro";
import Photoshop from "../svg/Photoshop";
import Spline from "../svg/Spline";

const About = () => {
  return (
    <div className="bg-slate-950 py-12 md:py-120">
      <div className="container space-y-8 md:space-y-14">
        <Heading text1="info." text2="about me" bgDark />

        <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="w-full p-5 md:p-6 bg-gray-900 border border-gray-800 rounded-2xl">
            <p className="text-slate-500 text-sm md:text-lg leading-normal mb-0">
              {highlightedText(`✨ Strong commitment to collaboration and solutions-oriented
              problem-solving ✨`)}
              Use various web design software to develop
              {highlightedText(`customer-focused`)} websites and designs.
              Committed to {highlightedText(`high standards`)} of web design,
              user experience, usability and speed for multiple types of
              end-users.
            </p>
          </div>

          <div className="order-first md:order-none row-span-2 w-full h-[340px] md:h-[445px] p-6 text-slate-500 text-lg bg-gray-900 border border-gray-800 rounded-xl relative">
            <Image
              className="w-auto h-full object-contain"
              src={"/assets/author_lg.webp"}
              alt="Author Image"
              fill
              sizes="width: 100%, height: 100%"
            />

            <div className="text-white absolute bottom-6 space-y-2">
              <p className="bg-slate-950 inline-block text-sm px-3.5 py-2 rounded-lg bg bg-opacity-40 backdrop-blur-md">
                Hi 👋
              </p>
              <p className="bg-slate-950 text-sm px-3.5 py-2 rounded-lg bg bg-opacity-40 backdrop-blur-md">
                My name is Md. Sohanur Rahman
              </p>
            </div>
          </div>

          <div className="w-full p-6 text-slate-500 text-lg bg-gray-900 border border-gray-800 rounded-xl space-y-8 md:space-y-6">
            <h3 className="text-base text-white font-semi flex justify-between items-center">
              <span className="uppercase">Experience</span>
              <span className="text-xs py-1 px-2.5 leading-base bg-indigo-500 rounded-full">
                4.5+ yrs
              </span>
            </h3>

            <div className="list [&>*:first-child]:pt-0 [&>*:last-child]:pb-0  [&>*:last-child]:border-b-0">
              {workHistoryList.map(
                ({ designation, company, url, duration }, i) => (
                  <>
                    <LinkComponent
                      className={
                        "py-3.5 border-b border-white border-opacity-5"
                      }
                      key={i}
                      title={designation}
                      organization={company}
                      duration={duration}
                      url={url}
                    />
                  </>
                )
              )}
            </div>
          </div>

          {/* Eucation Card Start */}
          <div className="w-full p-6 text-slate-500 text-lg bg-gray-900 border border-gray-800 rounded-xl space-y-6 hidden md:block">
            <h3 className="text-base text-white uppercase font-semi">
              Education
            </h3>

            <LinkComponent
              title={educationHistory.title}
              organization={educationHistory.institution}
              duration={educationHistory.duration}
              url={educationHistory.url}
            />
          </div>

          {/* ================== */}

          <div className="w-full p-6 text-slate-500 text-lg bg-gray-900 border border-gray-800 rounded-xl space-y-6 md:hidden">
            <h3 className="text-base text-white uppercase font-semi">
              Education
            </h3>

            <LinkComponent
              title={educationHistory.title}
              organization={educationHistory.institution}
              duration={educationHistory.duration}
              url={educationHistory.url}
              isEducation
            />
          </div>
          {/* Eucation Card Start */}

          <div className="w-full p-6 text-slate-500 text-lg bg-gray-900 border border-gray-800 rounded-xl space-y-6">
            <h3 className="text-base text-white uppercase font-semi">
              Design Tools
            </h3>

            <div className="flex gap-3">
              <Figma />
              <Framer />
              <AdobeXD />
              <Illustrator />
              <Photoshop />
              <Miro />
              <Spline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Highlighted Text
export const highlightedText = (text: string) => {
  return <span className="text-white"> {text} </span>;
};

type LinkComponentProps = {
  title: string;
  organization: string;
  duration: string;
  url: string;
  className?: string;
  isEducation?: boolean;
};

// Link Component
const LinkComponent: FC<LinkComponentProps> = ({
  title,
  organization,
  duration,
  url,
  className,
  isEducation,
}) => {
  return (
    <>
      {isEducation ? (
        <Link
          href={url}
          target="_blank"
          className={`block group ease-in-out ${className} ${
            isEducation ? "space-y-3" : "space-y-1"
          }`}
        >
          <div
            className={`flex ${
              isEducation
                ? "flex-col justify-start gap-1"
                : "items-center justify-between"
            }`}
          >
            <h4 className="text-sm text-slate-300 group-hover:text-white duration-300">
              {title}
            </h4>

            <p className="text-xs flex items-center gap-0.5 group-hover:text-indigo-400 group-hover:translate-x-1 duration-300">
              <span className="group-hover:underline">{organization}</span>
              <RiArrowRightUpLine size={16} />
            </p>
          </div>

          <p className="text-[10px] md:text-[11px] leading-none text-slate-400 font-light">
            {duration}
          </p>
        </Link>
      ) : (
        <Link
          href={url}
          target="_blank"
          className={`block space-y-1 group ease-in-out ${className}`}
        >
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-slate-300 group-hover:text-white duration-300">
              {title}
            </h4>
            <span className="text-[10px] md:text-[11px] leading-none text-slate-400 font-light">
              {duration}
            </span>
          </div>

          <p className="text-xs flex items-center gap-0.5 group-hover:text-indigo-400 group-hover:translate-x-1 duration-300">
            <span className="group-hover:underline">{organization}</span>
            <RiArrowRightUpLine size={16} />
          </p>
        </Link>
      )}

      {/* <div className="divider w-full h-[1px] bg-white bg-opacity-5"></div> */}
    </>
  );
};

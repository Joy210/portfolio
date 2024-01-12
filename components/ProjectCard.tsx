import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProjectCardProps = {
  url: string;
  title: string;
  tag: string;
  imageURL: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ url, title, tag, imageURL }) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="space-y-6 group ease-in-out duration-300 w-full"
    >
      <div className="relative w-full h-[560px] bg-slate-800 rounded-2xl overflow-hidden">
        <Image
          className="object-cover w-full h-full group-hover:scale-110 duration-300"
          src={imageURL}
          alt="Case Study"
          fill
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="space-y-1 leading-tight group-hover:pl-4 duration-300">
        <h2 className="text-2xl font-semi group-hover:text-indigo-400">
          {title}
        </h2>
        <p className="text-base text-slate-500 font-light">{tag}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;

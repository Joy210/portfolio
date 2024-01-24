import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ShotsCardProps = {
  title: string;
  imgURL: string;
  url: string;
};

const ShotsCard: FC<ShotsCardProps> = ({ title, imgURL, url }) => {
  return (
    <Link href={url} target="_blank">
      <Image
        className="max-w-[180px] md:max-w-[380px] scale-90 rounded-xl md:rounded-2xl hover:scale-95 duration-300 ease-in-out"
        src={imgURL}
        alt={title}
        quality={100}
        width={380}
        height={240}
        priority={false}
        // fill
        sizes="width: 100%, height: 100%"
        loading="lazy"
      />
    </Link>
  );
};

export default ShotsCard;

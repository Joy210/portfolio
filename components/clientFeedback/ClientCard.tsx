import { FC } from "react";

type FeedbackDataProps = {
  data: { name: string; location: string; quote: string };
};

const ClientCard: FC<FeedbackDataProps> = ({ data }) => {
  return (
    <div className="space-y-4 md:space-y-10 text-slate-600">
      {/* <QuoteIcon /> */}

      <p className="text-[13px] md:text-2xl font-light leading-normal">
        {data.quote}
      </p>

      <div className="space-y-1 md:space-y-1.5">
        <h5 className="text-sm md:text-xl font-semibold text-slate-900">
          {data.name}
        </h5>
        <p className=" text-xs md:text-base"> {data.location} </p>
      </div>
    </div>
  );
};

export default ClientCard;

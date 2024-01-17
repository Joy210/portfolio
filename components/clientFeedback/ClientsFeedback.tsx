"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Heading from "../Heading";
import { clientFeedbackList } from "../data/clientData";
import Quote from "../svg/Quote";
import ClientCard from "./ClientCard";
import SwiperNavigationBtn from "./SwiperNavigationBtn";

const ClientsFeedback = () => {
  const swiperNavigation = useSwiper();

  return (
    <div className="py-12 md:py-120 relative">
      <div className="container space-y-8 md:space-y-20">
        <Heading text1="Clients" text2="Feedback" />

        <div className="md:w-[960px] mx-auto relativ space-y-4 md:space-y-10">
          <Quote className="h-8 w-8" />

          <Swiper
            spaceBetween={56}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            // navigation={true}
            // pagination={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {clientFeedbackList &&
              clientFeedbackList.map((data, i) => (
                <SwiperSlide key={i}>
                  <ClientCard data={data} />
                </SwiperSlide>
              ))}

            {/* Custom Navigation Button Component */}
            <SwiperNavigationBtn />
            {/* Custom Navigation Button Component */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;

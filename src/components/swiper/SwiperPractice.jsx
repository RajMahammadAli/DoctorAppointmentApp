import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperPractice = () => {
  const timeSlots = [
    {
      id: 1,
      date: "Mon, 10 Oct",
      slot: "10 slots",
      mainTextColor: "#3A643B",
      subTextColor: "#818181",
    },
    {
      id: 2,
      date: "Tue, 11 Oct",
      slot: "02 slots",
      mainTextColor: "#131313",
      subTextColor: "#D5512E",
    },
    {
      id: 3,
      date: "Wed, 12 Oct",
      slot: "05 slots",
      mainTextColor: "#0D0D0D",
      subTextColor: "#F1B93A",
    },
    {
      id: 4,
      date: "Thrus, 13 Oct",
      slot: "06 slots",
      mainTextColor: "#3A643B",
      subTextColor: "#3a643b41",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {timeSlots.map((timeSlot, index) => (
        <SwiperSlide key={index} className="mx-5 cursor-pointer">
          <div className="bg-[#3a643b41] border border-[#3A643B] py-3 rounded-lg text-center">
            <h1
              className={`text-[${timeSlot.mainTextColor}] text-base font-semibold`}
            >
              {timeSlot.date}
            </h1>
            <p className={`text-[${timeSlot.subTextColor}] text-base `}>
              {timeSlot.slot}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperPractice;

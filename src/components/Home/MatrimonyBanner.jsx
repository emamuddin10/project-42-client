import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Find Your Life Partner",
    subtitle: "Discover a soulmate who shares your values, dreams, and vision for life.",
    image: "https://plus.unsplash.com/premium_photo-1681841703443-53de247ce32b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Build a Loving Relationship",
    subtitle: "Create lasting bonds built on trust, respect, and understanding.",
    image: "https://images.unsplash.com/photo-1708794308807-12ae2cf7d3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Start Your Forever Journey",
    subtitle: "Your story begins here, with someone meant just for you.",
    image: "https://plus.unsplash.com/premium_photo-1690148812608-9942834931a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const MatrimonyBanner = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto mt-6 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[300px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-white text-center p-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MatrimonyBanner;

import React from "react";
import Slide from "../../utils/Slide.jsx";
import "./Home.css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Home() {
  return (
    <div className="bg-black">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={1}
        slidesPerView={1.1}
        navigation
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Slide
            name="Juus"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fuga
            similique laboriosam eos veritatis id!"
            mediaLink="https://juusstorage.blob.core.windows.net/website/videos/home/turntable-mobile.mp4"
            shopRoute="shop/juus-products"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            name="Nova"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, fuga
            similique laboriosam eos veritatis id!"
            mediaLink="https://juusstorage.blob.core.windows.net/website/videos/home/homepage-explosion.mp4"
            shopRoute="shop/nova-products"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;

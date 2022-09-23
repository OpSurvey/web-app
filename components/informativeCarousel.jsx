import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import 'swiper/css'
import { EffectCreative } from "swiper";
import StatusCard from "./InformativeCard";

export default function InformativeCarousel(props) {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StatusCard
            statusTitle="Cotizaciones realizadas"
            statusValue="25"
            statusPercent="12.2%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard
            statusTitle="Mayor Cliente"
            statusValue="Acme inc"
            statusPercent="47.1%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StatusCard
            statusTitle="Recetas Creadas"
            statusValue="110"
            statusPercent=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <StatusCard
            statusTitle="Cotizaciones realizadas"
            statusValue="25"
            statusPercent="12.2%"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

/* eslint-disable react/prop-types */
import "./styles.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import numberWithCommas from "../utils/thousandSeparator";

function Card({ room }) {
  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {room.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{room.place}, {room.country}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{room.rating}</p>
        </div>
      </div>

      <p style={{ margin: 0, color: "var(--font-grey)" }}>{numberWithCommas(room.distance)} kilometers away</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{room.date}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{room.type}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{room.category}</p>
      <p style={{ margin: "0.2rem", marginLeft: '0px', fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "700" }}>${room.price}</span> night
      </p>
    </div>
  );
}

export default Card;

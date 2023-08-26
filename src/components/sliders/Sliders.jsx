import "./Sliders.css";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Sliders = ({ title }) => {
  const [data, setdata] = useState([]);
  // const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  // function rotateCards() {
  //   setCurrentFirstIndex(currentFirstIndex+1);
  // }
  useEffect(() => {
    const getAllProducts = async () => {
      const vals = (await axios.get("http://localhost:3001/api/products")).data;
      setdata(vals);
    };
    getAllProducts();
  }, []);
  return (
    <div className="slider-container">
      <div className="slider-title">{title}</div>
      <div className="cards-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
        >
          {data.map((card, idx) => {
            return (
              <SwiperSlide key={idx}>
                <Card
                  name={card.name}
                  price={card.price}
                  url={card.url}
                  discount={card.discount}
                  desc={card.desc}
                  category={card.category}
                  productId={card._id}
                ></Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Sliders;

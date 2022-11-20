import React,{useState} from "react";
import "./Carousel.css";
import left from "../../../assets/icons/left-arrow.png";
import right from "../../../assets/icons/right-arrow.png";

const Carousel = ({ item }) => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const left_slide_handler = () => {
        if(currentIndex===0)setCurrentIndex(item.images.length-1);
        else setCurrentIndex(currentIndex-1);
    }

    const right_slide_handler = () => {
        if(currentIndex===item.images.length-1)setCurrentIndex(0);
        else setCurrentIndex(currentIndex+1);
    }

  return (
    <>
      <div className="carousel-div">
        <img src={left} alt="left" onClick={left_slide_handler} className="prev-btn" />
      </div>
      <div className="item-image_content">
        <img src={item.images[currentIndex]} alt={item.name} />
      </div>
      <div className="carousel-div">
        <img src={right} alt="right" onClick={right_slide_handler} className="next-btn" />
      </div>
    </>
  );
};

export default Carousel;

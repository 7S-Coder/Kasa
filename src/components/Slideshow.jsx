import { useState } from "react";
import leftArrow from "../img/VectorLeft.svg";
import rightArrow from "../img/VectorRight.svg";
import "../styles/components/Slideshow.scss";

const Slideshow = (data) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextPicture = () => {
    const isLastSlide = currentIndex === data.data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow_container">
      {data.data.length > 1 && (
        <div className="arrow-container">
          <img
            src={leftArrow}
            alt=""
            className="slideshow_container_arrow leftArrow"
            onClick={previousPicture}
          />
          <img
            src={rightArrow}
            alt=""
            className="slideshow_container_arrow rightArrow"
            onClick={nextPicture}
          />
        </div>
      )}
      <div className="slideshow_container_pictures">
        <img src={data.data[currentIndex]} alt="" />
      </div>
      {data.data.length > 1 && (
        <div className="slideshow_container_numbers">
          <p>{currentIndex + 1 + "/" + data.data.length}</p>
        </div>
      )}
    </div>
  );
};

export default Slideshow;

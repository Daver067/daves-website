import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
interface CarouselContainer {
  slides: React.ReactElement[];
}
const CarouselContainer: React.FC<CarouselContainer> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-1000 `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => {
          return s;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-5 md:px-10 ">
        <button>
          <FaArrowLeftLong
            className="bg-black bg-opacity-40 rounded-2xl p-2 m-auto h-8 w-8 text-xl hover:bg-opacity-70 transition ease-in-out duration-500"
            onClick={previousSlide}
          ></FaArrowLeftLong>
        </button>
        <button>
          <FaArrowRightLong
            className="bg-black bg-opacity-40 rounded-2xl p-2 m-auto h-8 w-8 text-xl hover:bg-opacity-70 transition ease-in-out duration-500"
            onClick={nextSlide}
          ></FaArrowRightLong>
        </button>
      </div>
    </div>
  );
};

export default CarouselContainer;

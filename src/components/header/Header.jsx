import { useState } from "react";
const Header = () => {
  const slides = [
    "https://w.wallhaven.cc/full/4v/wallhaven-4v237l.jpg",
    "https://w.wallhaven.cc/full/4g/wallhaven-4go61l.jpg",
    "https://w.wallhaven.cc/full/49/wallhaven-492vjx.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div className="relative w-full max-w-[100%] mx-auto">
        <div className=" rounded-lg">
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-[100%] h-[100vh] object-cover"
          />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white rounded-full px-[12px] py-[2px] text-[30px]"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2  right-4 transform -translate-y-1/2  text-white rounded-full px-[12px] py-[2px]  text-[30px]"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Header;

import { Button } from "flowbite-react";
import bgImage from "../assets/Images/hero.svg";
import mobilelogin from '../assets/Images/mobilelogin.svg';
import mobile from '../assets/Images/mobile1.svg'
import { useState } from "react";

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

  // Array of slide images
  const slides = [
    bgImage,
    mobilelogin,
    mobile,
  ];


  return (
    <div className="flex p-6 mb-2 bg-slate-100 dark:text-white dark:bg-slate-800 md:justify-between items-center sm:px-[5rem] bg-Silver">
      <div className="left">
        <div className="pt-[4rem] md:max-w-[45rem] ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-D_Grey">
            Lessons and insights{" "}
            <span className="text-Primary text-green-500">from 8 years</span>
          </h1>
          <p className="pt-4 text-slate-500">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="pt-6">
            <Button href="" className="text-white rounded-md bg-green-400 dark:bg-green-500">
              Register
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute z-30 flex bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeSlide ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setActiveSlide(index)}
            id={`button-${index}`}
          ></button>
        ))}
      </div>
      <div className="right">
        <img src={slides[activeSlide]} />
      </div>      
    </div>
  );
}

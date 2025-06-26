import React, {useEffect, useState, useCallback, useContext} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {Link} from "react-router";
import {GrPrevious} from "react-icons/gr";
import {GrNext} from "react-icons/gr";
import {FiPlay} from "react-icons/fi";
import {IoPause} from "react-icons/io5";
import {AuthContext} from "../ContexFile/Context";
export const Slider = () => {
  const {user, loding} = useContext(AuthContext);

  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
    Autoplay({delay: 3000, playOnInit: false}),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAutoplay = useCallback(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    setIsPlaying(autoplay.isPlaying());

    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false));
  }, [emblaApi]);

  const slides = [
    {
      image: "https://i.ibb.co/JFqyn9wc/images-7.jpg",
      text: "Every lunch tastes super, makes belly happy, never waste.",
    },
    {
      image: "https://i.ibb.co/v41DCd6w/images-2.jpg ",
      text: "	Every plate holds extra spicy, tangy, juicy, sweet stuff.",
    },

    {
      image: "https://i.ibb.co/wFqy0fFm/images-3.jpg ",
      text: "Sharp smell hints sweet, spicy, tangy, tasty extra treat.",
    },
    {
      image: "https://i.ibb.co/gFtNXjRg/images-4.jpg ",
      text: "Spicy flavor works every time, makes heart truly happy.",
    },

    {
      image: " https://i.ibb.co/27kHpnXk/images-5.jpg",
      text: "Steam rises while hands grab tasty bites with haste.",
    },
    {
      image: "https://i.ibb.co/gMVQbdX8/images-6.jpg ",
      text: "Sweet smell gives hints about taste, makes moods sunny.",
    },
  ];

  return (
    <div className="w-full   relative">
      <div className="overflow-hidden  " ref={emblaRef}>
        <div className="flex ">
          {slides.map((slide, index) => (
            <div key={index} className="flex-none w-full ">
              <div
                className="h-56  sm:h-64 md:h-92 lg:h-120 bg-cover bg-center  flex items-center justify-center relative shadow-xl border-2 "
                style={{backgroundImage: `url(${slide.image})`}}
              >
                <div className="bg-black/15   shadow-2xl  p-2 sm:p-6 rounded-lg text-center w-3/4 space-y-2 sm:py-10 lg:py-20 sm:space-y-4">
                  <p className="text-white  sm:text-xl md:text-2xl font-semibold sm:font-bold">
                    {slide.text}
                  </p>
                  <button className="btn btn-primary w-[150px] text-white font-semibold">
                    {loding ? (
                      <span className="loading  loading-spinner loading-xl"></span>
                    ) : user ? (
                      <Link to={"/allrecipe"}> See Recipes</Link>
                    ) : (
                      <Link to={"/login"}> Create Account</Link>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="  mt-7 w-5/10  mx-auto bg-black/30 flex space-x-4 border-2 border-black/30 rounded-full py-2 px-4  justify-between">
        <button
          onClick={scrollPrev}
          disabled={isPlaying}
          className={`group relative text-white flex flex-col  items-center`}
        >
          <GrPrevious size={24} />

          {isPlaying || (
            <span className="absolute bottom-full mb-3 text-xs bg-black/20 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Previous
            </span>
          )}
        </button>

        <button
          onClick={toggleAutoplay}
          className={`group relative ${
            isPlaying
              ? "text-black cursor-pointer"
              : "text-white cursor-pointer"
          } flex flex-col items-center ml-1  `}
        >
          {isPlaying ? <IoPause size={24} /> : <FiPlay size={24} />}
          <span className="absolute bottom-full mb-3 text-xs bg-black/20 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            {isPlaying ? " Pause" : "AutoPlay"}
          </span>
        </button>

        <button
          onClick={scrollNext}
          disabled={isPlaying}
          className={`group relative text-white flex flex-col items-center`}
        >
          <GrNext size={24} />
          {isPlaying || (
            <span className="absolute bottom-full mb-3 text-xs bg-black/20 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Next
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

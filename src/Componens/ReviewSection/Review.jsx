import React, {useCallback} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {GrPrevious, GrNext} from "react-icons/gr";
import {FaStar, FaRegStar} from "react-icons/fa";
import {Fade} from "react-awesome-reveal";
const Review = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const reviews = [
    {
      id: 1,
      name: "Jhankar Dorbesh",
      img: "https://i.ibb.co.com/gLvLZ85M/images-2.jpg",
      review:
        "The Indian curry recipe was perfectly spiced and easy to follow.",
      stars: 4,
    },
    {
      id: 2,
      name: "Nadim Abdullah",
      img: "https://i.ibb.co.com/W4nnGfVh/lawyer-ahmednadimabdullah-barrister-senior-associate-fmassociates.jpg",
      review:
        "Loved the Italian pasta recipe—it turned out restaurant-quality!",
      stars: 5,
    },
    {
      id: 3,
      name: "Shakil Ahmed",
      img: "https://i.ibb.co.com/gMq3jtWQ/banner-img-1.png",
      review: "Tried the Mexican tacos recipe—tasty but a bit too spicy.",
      stars: 3,
    },
    {
      id: 4,
      name: "Rafiq Hossain",
      img: "https://i.ibb.co.com/q3Z0bkFQ/lawyer-barrister-wazedjamil-associate-fmassociates.jpg",
      review: "The Chinese fried rice recipe was quick and very flavorful.",
      stars: 4,
    },
    {
      id: 5,
      name: "Wazed Jamil",
      img: "https://i.ibb.co.com/23CMFqXF/Ashique-Sadman-Bin-Saleh.jpg",
      review: "Made the American burger recipe—juicy and delicious!",
      stars: 5,
    },
    {
      id: 6,
      name: "Deepesh Ojha",
      img: "https://i.ibb.co.com/cKSYTGMm/deepesh-ojha1630409931-thumb.webp",
      review: "The Indian biryani recipe was good, just took a bit long.",
      stars: 3,
    },
  ];

  return (
   <div>
     <div className=" mx-auto ">
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Customer Reviews
        </h1>
      </Fade>

      <div className="overflow-hidden   " ref={emblaRef}>
        <div className="flex">
          {reviews.map((review) => (
            <div key={review.id} className="flex-none w-full  p-4">
              <div className="border rounded-xl shadow-lg p-6 mx-10 sm:mx-20 md:mx-44 lg:mx-56 flex flex-col items-center text-center bg-white h-full">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 text-black">{review.name}</h2>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) =>
                    i < review.stars ? (
                      <FaStar key={i} className="text-yellow-400" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-300" />
                    )
                  )}
                </div>
                <p className=" text-gray-700 ">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-6">
        <button
          onClick={scrollPrev}
          className="p-3 border hover:text-white rounded-full hover:bg-black  transition"
        >
          <GrPrevious size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="p-3 hover:bg-black border rounded-full  hover:text-white transition"
        >
          <GrNext size={24} />
        </button>
      </div>
    </div>
   </div>
  );
};

export default Review;

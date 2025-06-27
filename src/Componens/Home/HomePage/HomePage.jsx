import React, {useEffect, useState} from "react";
import {Slider} from "../../Slider/Slider";
import SortedSix from "../SortedSix/SortedSix";
import Review from "../../ReviewSection/Review";
import QnaSection from "../../QnASection/QnaSection";
import Loding from "../../Loding/Loding";
import CategorySection from "../CategorySection/CategorySection";
import OfferSection from "../OfferSection/OfferSection";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import BlogSection from "../BlogSection/BlogSection";

// import {Typewriter} from "react-simple-typewriter";
// import {Fade} from "react-awesome-reveal";
const HomePage = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loding />;
  return (
    <div>
      {/* <Fade>
        {" "}
        <div className="text-5xl my-10 flex justify-center items-center font-bold text-red-500">
          <Typewriter
            words={["Men Sad", "Men Eat", "Men Happy"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </Fade> */}

      <div className="mt-10">
        <Slider></Slider>
      </div>
      <div className="mt-10 border-2 p-5 rounded-lg mx-[2%] lg:mx-[5%]">
        <SortedSix></SortedSix>
      </div>
      {/* <div className="mt-10">
        <Review></Review>
      </div> */}
      {/* <div className="mt-10">
        <QnaSection></QnaSection>
      </div> */}

      <div>
        <CategorySection></CategorySection>
      </div>
      <div>
        <OfferSection></OfferSection>
      </div>
      <div>
        <BlogSection></BlogSection>
      </div>
      <div>
        <NewsletterSection></NewsletterSection>
      </div>
    </div>
  );
};

export default HomePage;

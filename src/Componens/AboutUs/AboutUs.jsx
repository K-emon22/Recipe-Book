import React, {useEffect, useState} from "react";
import {FaGithub, FaFacebook, FaLinkedin, FaEnvelope} from "react-icons/fa";
import Loding from "../Loding/Loding";

const AboutUs = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 200);
  });
  if (load) {
    return <Loding></Loding>;
  }
  return (
    <div className=" mt-10  mx-[2%] lg:mx-[5%]">
      <span className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white ">
        <div className="  mx-auto text-center w-full flex flex-col justify-center items-center space-y-6">
          <h2 className="text-4xl font-bold mb-4">About Recipe Book App</h2>
          <p className=" leading-relaxed text-xl">
            The Recipe Book App is a modern and user-friendly platform for food
            enthusiasts <br /> to discover, manage, and share delicious recipes
            from around the world.
          </p>

          <span className="mt-10 text-left">
            <h3 className="text-2xl font-semibold mb-4">🌟 Key Features</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                🔥 Top Recipes: Showcases the most liked recipes dynamically.
              </li>
              <li>
                🔐 Auth System: Secure login/register with Google support.
              </li>
              <li>
                📋 Add & Manage Recipes: Users can add, update, or delete their
                recipes.
              </li>
              <li>
                🛒 Wishlist & Like: Add to wishlist and like others’ recipes
                (except your own).
              </li>
              <li>
                🎨 Responsive & Unique UI: Mobile-first, clean and engaging user
                interface.
              </li>
            </ul>
          </span>

          <div className="mt-10 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              🔧 Technologies Used
            </h3>
            <p>
              React | React Router | Firebase | MongoDB | Express.js | Tailwind
              CSS | DaisyUI | Lottie | Toastify
            </p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default AboutUs;

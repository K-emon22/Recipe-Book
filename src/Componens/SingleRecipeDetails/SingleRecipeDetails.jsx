import React, {useContext, useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {BiSolidLike} from "react-icons/bi";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";
const SingleRecipeDetails = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const single = useLoaderData();

  const [count, setCount] = useState();

  const {_id} = single;

  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    if (single?.likeCount) {
      setCount(single.likeCount);
    }
  }, [single]);

  const handleLike = (email) => {
    if (email == user?.email) {
      return;
    }
    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(() => {
        setCount(count + 1);
      });
  };

  if (loading) {
    return <Loding></Loding>;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center flex-col w-5/6 items-center ">
        <div className="mt-8 font-semibold flex flex-row gap-2 ">
          {" "}
          <div className="font-bold text-blue-600">{count}</div> people
          interested in this recipe.{" "}
        </div>
        <div className="flex flex-col gap-3 p-5  border rounded-lg w-full sm:w-3/4 mt-10 md:w-2/3 justify-center items-center">
          <img
            className=" aspect-[4/2]  w-full rounded-lg mx-auto "
            src={single.image}
            alt={single.title}
          />
          <div className=" flex flex-col sm:flex-row gap-5 justify-between">
            <h1 className="font-bold text-2xl md:text-[18px] ">
              {single.title}
            </h1>{" "}
            <h1 className="font-semibold my-auto">
              Cuisine Type :
              <span className="text-black/50 "> {single.cuisineType}</span>
            </h1>
          </div>

          <div className="flex sm:flex-row flex-col gap-5 justify-center items-center">
            <h1 className="font-semibold my-auto">
              {" "}
              Category :
              <span className="text-black/50"> {single.category}</span>
            </h1>
            <h1 className="font-semibold">
              {" "}
              Preparation Time :
              <span className=" text-black/50">
                {" "}
                {single.preparationTime} Minutes
              </span>
            </h1>
          </div>

          <p className="font-semibold">
            {" "}
            Ingredients :
            <span className="text-black/50"> {single.ingredients}</span>
          </p>
          <p>
            <span className="font-semibold"> instructions :</span>
            <span className="text-black "> {single.instructions}</span>
          </p>
          <h1 className="flex flex-row gap-2">
            <span
              onClick={() => handleLike(single.email)}
              className="my-auto cursor-pointer"
            >
              <BiSolidLike className="text-blue-600" size={20} />
            </span>
            <span className="font-bold">
              {" "}
              {single?.email == user?.email ? 0 : count}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipeDetails;

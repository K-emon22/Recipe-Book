import React, {useContext, useEffect, useState} from "react";
import {useLoaderData} from "react-router";
import {BiSolidLike} from "react-icons/bi";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";

const SingleRecipeDetails = () => {
  useEffect(() => {
    window.scroll({top: 0, behavior: "smooth"});
  }, []);

  const single = useLoaderData();
  const {user} = useContext(AuthContext);

  const [count, setCount] = useState();
  const [loading, setLoading] = useState(true);
  const {_id} = single;

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
    if (email === user?.email) return;

    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${_id}`,
      {
        method: "PATCH",
        headers: {"content-type": "application/json"},
      }
    )
      .then((res) => res.json())
      .then(() => setCount((prev) => prev + 1));
  };

  if (loading) return <Loding />;

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl  shadow-xl rounded-xl p-6 space-y-6">
        <div className="text-center  text-sm font-semibold">
          <span className="text-blue-600 font-bold">{count}</span> people are
          interested in this recipe.
        </div>

        <img
          src={single.image}
          alt={single.title}
          className="rounded-lg w-full object-cover aspect-[4/2]"
        />

        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{single.title}</h1>
          <span className="text-sm text-gray-700 font-semibold">
            Cuisine:{" "}
            <span className="text-gray-700 font-normal">
              {single.cuisineType}
            </span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm  font-medium">
          <p>
            Category: <span className="text-gray-700">{single.category}</span>
          </p>
          <p>
            Prep Time:{" "}
            <span className="text-gray-700">
              {single.preparationTime} minutes
            </span>
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-lg text-gray-800 mb-1">
            Ingredients
          </h1>
          <p className=" text-sm">{single.ingredients}</p>
        </div>

        <div>
          <h1 className="font-semibold text-lg text-gray-800 mb-1">
            Instructions
          </h1>
          <p className=" text-sm text-justify leading-relaxed">
            {single.instructions}
          </p>
        </div>

        <button
          onClick={() => handleLike(single.email)}
          disabled={single?.email === user?.email}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 text-white font-semibold rounded-lg transition ${
            single?.email === user?.email
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          <BiSolidLike size={20} />
          {single?.email === user?.email
            ? "You can't like your own recipe"
            : `Like (${count})`}
        </button>
      </div>
    </section>
  );
};

export default SingleRecipeDetails;

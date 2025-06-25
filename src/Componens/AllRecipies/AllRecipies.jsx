import React, {useContext, useEffect, useState} from "react";

import {BiSolidLike} from "react-icons/bi";
import {Link} from "react-router";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";
import {Fade} from "react-awesome-reveal";
const AllRecipies = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [allRec, setAllRec] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fAll, setFAll] = useState([]);

  const {loding, user} = useContext(AuthContext);

  const handleLike = (id, email) => {
    if (email == user?.email) {
      return;
    }
    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const updatedRec = allRec.map((item) => {
            if (item._id === id) {
              return {...item, likeCount: parseInt(item.likeCount || 0) + 1};
            }
            return item;
          });
          setAllRec(updatedRec);

          const selectedCuisine = document.querySelector("select").value;
          if (
            selectedCuisine === "All Cuisine" ||
            selectedCuisine === "Select Cuisine"
          ) {
            setFAll(updatedRec);
          } else {
            const filteredItem = updatedRec.filter(
              (rec) => rec.cuisine === selectedCuisine
            );
            setFAll(filteredItem);
          }
        }
      });
  };

  useEffect(() => {
    fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        setAllRec(data);
        setLoading(false);

        setFAll(data);
      });
  }, []);

  const handleFilter = (cuisine) => {
    const filteredItem = allRec.filter((rec) => rec.cuisine == cuisine);

    if (cuisine == "All Cuisine") {
      setFAll(allRec);
    } else {
      setFAll(filteredItem);
    }
  };

  if (loading) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our All Recipes
        </h1>
      </Fade>

      <div className="flex items-center justify-center my-10">
        <select
          defaultValue="Select Cuisine"
          className="select border-2 border-black text-center font-semibold"
          onChange={(cuisine) => handleFilter(cuisine.target.value)}
        >
          <option disabled={true}>Select Cuisine</option>

          <option
            value={"All Cuisine"}
            className="cursor-pointer  text-center my-1 border-2 rounded-lg "
          >
            {" "}
            All Cuisine
          </option>
          <option
            value={"American"}
            className="cursor-pointer  text-center my-1 border-2 rounded-lg "
          >
            {" "}
            American
          </option>
          <option
            value={"Chinese"}
            className="cursor-pointer  text-center my-1 border-2 rounded-lg "
          >
            {" "}
            Chinese{" "}
          </option>
          <option
            value={"Indian"}
            className="cursor-pointer  text-center my-1 border-2 rounded-lg "
          >
            {" "}
            Indian
          </option>
          <option
            value={"Italian"}
            className="cursor-pointer  text-center my-1 border-2 rounded-lg "
          >
            {" "}
            Italian
          </option>
        </select>
      </div>

      {fAll.length === 0 ? (
        <h1 className="font-bold text-center bg-black/30 py-20 rounded-lg my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          {" "}
          No Recipes Found By This Cuisine Name{" "}
        </h1>
      ) : (
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
          {fAll.map((single) => (
            <div key={single._id}>
              {loding ? (
                <div className="flex w-52 flex-col gap-4 mx-auto">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 p-2 border rounded-lg h-full">
                  <img
                    className="w-full aspect-[4/2]  mx-auto h-fit rounded-lg"
                    src={single.image}
                    alt={single.title}
                  />
                  <h1 className="font-bold text-2xl md:text-[18px] ">
                    {single.title}
                  </h1>
                  <h1 className="font-semibold">
                    {" "}
                    <span className="text-black/50">Cuisine Type:</span>{" "}
                    {single.cuisine}
                  </h1>

                  <div className="grid grid-cols-4 justify-between">
                    <h1 className="font-bold  col-span-3 rounded-lg px-1">
                      {Array.isArray(single.category) ? (
                        single.category.map((item, index) => (
                          <span
                            key={index}
                            className="mr-1 mb-1  bg-gray-500 rounded-lg px-1  py-1  text-sm inline-block"
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span className="mr-1 py-1  text-sm bg-gray-500 rounded-lg px-1 inline-block">
                          {single.category}
                        </span>
                      )}
                    </h1>
                    <h1 className="flex flex-row gap-2 justify-end">
                      <span
                        onClick={() => handleLike(single._id, single.email)}
                        className="my-auto cursor-pointer"
                      >
                        <BiSolidLike className="text-blue-600" size={20} />
                      </span>
                      <span className="font-bold my-auto">
                        {single.likeCount}
                      </span>
                    </h1>
                  </div>

                  <Link className="mt-auto" to={`/recipeDetails/${single._id}`}>
                    <button className="btn btn-primary w-full ">
                      {" "}
                      View Details
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipies;

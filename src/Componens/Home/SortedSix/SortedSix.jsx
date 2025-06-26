import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../ContexFile/Context";
import {BiSolidLike} from "react-icons/bi";
import {Link} from "react-router";
import {Fade} from "react-awesome-reveal";

const SortedSix = () => {
  const [six, setSix] = useState([]);
  const {loding, user} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hero-pro-assignment-10-server-site.vercel.app/sortSix")
      .then((res) => res.json())
      .then((data) => {
        setSix(data);
        setLoading(false);
      });
  }, []);

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
          const updateSix = six.map((item) => {
            if (item._id === id) {
              return {...item, likeCount: parseInt(item.likeCount || 0) + 1};
            }
            return item;
          });
          setSix(updateSix);
        }
      });
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-25">
        <div className="flex items-center justify-center min-h-4/5 inset-0  ">
          <div className="flex items-center justify-center w-20 h-20">
            <div className=" w-full h-full rounded-full border-[5px] border-dotted border-black animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" mx-[2%] lg:mx-[5%]">
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Our Top Recipes
        </h1>
      </Fade>

      <div className=" grid sm:grid-cols-2 md:grid-cols-4 gap-5 ">
        {six.map((single) => (
          <div key={single._id}>
            {loding ? (
              <div className="flex w-52 flex-col gap-4 mx-auto ">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ) : (
              <div className="flex flex-col gap-3 p-2 border rounded-lg h-full">
                <img
                  className="w-full aspect-[4/2] rounded-lg  mx-auto h-fit"
                  src={single.image}
                  alt={single.title}
                />
                <h1 className="font-bold text-2xl md:text-[18px] ">
                  {single.title}
                </h1>
                <h1 className="font-semibold">
                  {" "}
                  <span className="text-black/50 ">Cuisine Type:</span>{" "}
                  <span className="font-normal">{single.cuisine}</span>
                </h1>

                <div className="flex flex-row justify-between">
                  <h1 className="font-bold">
                    {Array.isArray(single.category) ? (
                      single.category.map((item, index) => (
                        <span
                          key={index}
                          className="mr-1 mb-1 bg-[#570df8]/30 border-2 border-[#570df8] text-white rounded-lg px-1  py-1  text-sm inline-block"
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
                  <h1 className="flex flex-row gap-2">
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
                <h2 className="line-clamp-2"> {single.instructions}</h2>
                <Link to={`/recipeDetails/${single._id}`} className="mt-auto">
                  {" "}
                  <button className="btn btn-primary w-full mt-auto">
                    {" "}
                    View Details
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to={"/allrecipe"}>
          <button className=" btn btn-primary ">See All Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default SortedSix;

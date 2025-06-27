import React, {useContext, useEffect, useState} from "react";
import {BiSolidLike} from "react-icons/bi";
import {Link} from "react-router";
import Swal from "sweetalert2";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";
import UpdateModal from "../UpdateModal/UpdateModal";
import {Fade} from "react-awesome-reveal";
const MyRecipe = () => {
  const [allRec, setAllRec] = useState([]);
  const {loding} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const {user} = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://hero-pro-assignment-10-server-site.vercel.app/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setAllRec(data);
        setLoading(false);
      });
  }, [user]);

  const myAdded = allRec.filter((rec) => rec?.email == user?.email);

  const handleDelete = (id) => {
    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        const removed = allRec.filter((rec) => rec._id !== id);
        setAllRec(removed);
        Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
      });
  };

  const handleUpdate = (id, category) => {
    console.log(id);
    setCat(category);
  };

  if (loading) {
    return <Loding></Loding>;
  }

  return (
    <div className=" mx-[2%] lg:mx-[5%]">
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Your Added Recipies
        </h1>
      </Fade>

      <div className="">
        {myAdded.length === 0 ? (
          <div className="bg-black/30 py-10 rounded-lg flex flex-col items-center justify-center gap-5 mt-20 ">
            <h1 className="font-bold text-center    text-2xl  md:text-3xl ">
              You haven't added any recipes yet. <br /> Add some!
            </h1>
            <Link to={"/addrecipe"}>
              {" "}
              <button className="font-bold btn btn-primary">
                {" "}
                Add Recipe{" "}
              </button>
            </Link>
          </div>
        ) : (
          <div>
            {myAdded.map((single) => (
              <div
                className="flex justify-center items-center"
                key={single._id}
              >
                <div className="flex flex-col gap-3 p-5  border rounded-lg w-full sm:w-3/4 mt-10 md:w-2/4 justify-center items-center">
                  {loding ? (
                    <div className="flex items-center justify-center w-20 h-20">
                      <div className=" w-full h-full rounded-full border-[3px]  border-black animate-spin"></div>
                    </div>
                  ) : (
                    <img
                      className=" aspect-[4/2]  w-full rounded-lg mx-auto "
                      src={single.image}
                      alt={single.title}
                    />
                  )}
                  <div className=" flex flex-col sm:flex-row gap-5 justify-between">
                    <h1 className="font-bold text-2xl md:text-[18px] text-center ">
                      {single.title}
                    </h1>{" "}
                    <h1 className="font-semibold my-auto">
                      Cuisine Type :
                      <span className="text-black/50 "> {single.cuisine}</span>
                    </h1>
                  </div>

                  <h1 className="font-semibold my-auto">
                    {" "}
                    Category:
                    <span className="text-black/50">
                      {Array.isArray(single.category) ? (
                        single.category.map((item, index) => (
                          <span
                            key={index}
                            className="mr-1 mb-1 bg-[#570df8]/30 border-2 border-[#570df8] rounded-lg px-1  py-1  text-sm "
                          >
                            {item}
                          </span>
                        ))
                      ) : (
                        <span className="mr-1 py-1  text-sm bg-gray-400 rounded-lg px-1 inline-block">
                          {single.category}
                        </span>
                      )}
                    </span>
                  </h1>
                  <h1 className="font-semibold">
                    {" "}
                    Preparation Time :
                    <span className=" text-black/50">
                      {" "}
                      {single.preparationTime} Minutes
                    </span>
                  </h1>

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
                    <span className="my-auto cursor-pointer">
                      <BiSolidLike
                        className="text-blue-600 cursor-not-allowed"
                        size={20}
                      />
                    </span>
                    <span className="font-bold ">{single.likeCount}</span>
                  </h1>

                  <div className="flex flex-row justify-between w-full">
                    <div
                      onClick={() => handleUpdate(single._id, single.category)}
                      className=""
                    >
                      <UpdateModal id={single._id} cat={cat}></UpdateModal>
                    </div>
                    <button
                      onClick={() => handleDelete(single._id)}
                      className="btn btn-primary"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipe;

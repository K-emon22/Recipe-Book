
import React, {useContext, useEffect, useState} from "react";
import {FiSearch} from "react-icons/fi";
import {BiSolidLike} from "react-icons/bi";
import {Link} from "react-router";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";
import {Fade} from "react-awesome-reveal";

const AllRecipies = () => {
  useEffect(() => {
    window.scroll({top: 0, behavior: "smooth"});
  }, []);

  const [allRec, setAllRec] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredByCuisine, setFilteredByCuisine] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fAll, setFAll] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [currentCuisine, setCurrentCuisine] = useState("Select Cuisine");
  const {loding, user} = useContext(AuthContext);

  const handleLike = (id, email) => {
    if (email === user?.email) return;

    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
      {
        method: "PATCH",
        headers: {"content-type": "application/json"},
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const updatedRec = allRec.map((item) =>
            item._id === id
              ? {...item, likeCount: parseInt(item.likeCount || 0) + 1}
              : item
          );
          setAllRec(updatedRec);
          if (
            currentCuisine === "All Cuisine" ||
            currentCuisine === "Select Cuisine"
          ) {
            setFilteredByCuisine(updatedRec);
          } else {
            setFilteredByCuisine(
              updatedRec.filter((rec) => rec.cuisine === currentCuisine)
            );
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
        setFilteredByCuisine(data);
      });
  }, []);

  const handleFilter = (cuisine) => {
    setCurrentCuisine(cuisine);
    if (cuisine === "All Cuisine") {
      setFilteredByCuisine(allRec);
    } else {
      setFilteredByCuisine(allRec.filter((rec) => rec.cuisine === cuisine));
    }
    setSearchTerm("");
  };

  const handleSearch = (value) => setSearchTerm(value);

  const handleSort = (option, listToSort = fAll) => {
    setSortOption(option);
    let sorted = [...listToSort];

    if (option === "title-asc")
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (option === "title-desc")
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    else if (option === "likes-asc")
      sorted.sort(
        (a, b) => (parseInt(a.likeCount) || 0) - (parseInt(b.likeCount) || 0)
      );
    else if (option === "likes-desc")
      sorted.sort(
        (a, b) => (parseInt(b.likeCount) || 0) - (parseInt(a.likeCount) || 0)
      );

    setFAll(sorted);
  };

  useEffect(() => {
    if (!searchTerm) handleSort(sortOption, filteredByCuisine);
    else {
      const lowerSearch = searchTerm.toLowerCase();
      const searched = filteredByCuisine.filter(
        (rec) =>
          rec.title.toLowerCase().includes(lowerSearch) ||
          rec.cuisine.toLowerCase().includes(lowerSearch)
      );
      handleSort(sortOption, searched);
    }
  }, [filteredByCuisine, searchTerm]);

  if (loading) return <Loding />;

  return (
    <div className="mx-[2%] lg:mx-[5%]">
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-extrabold my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-700">
          All Recipes
        </h1>
      </Fade>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,4fr] mb-10 gap-6">
        <div></div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search by title or cuisine..."
              className="w-full py-3 pl-4 pr-10 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none text-gray-400"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <FiSearch
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="hidden lg:block"></div>

          <select
            value={currentCuisine}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 font-semibold text-gray-800 bg-gray-100 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer hidden md:block "
          >
            <option disabled value="Select Cuisine">
              Select Cuisine
            </option>
            <option value="All Cuisine">All Cuisine</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
          </select>

          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-3 px-4 font-semibold text-gray-800 bg-gray-100 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer  hidden md:block"
          >
            <option value="default" disabled>
              Sort Recipes
            </option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="likes-asc">Likes (Low to High)</option>
            <option value="likes-desc">Likes (High to Low)</option>
          </select>

          <div className="md:hidden flex flex-row gap-8">
            <select
              value={currentCuisine}
              onChange={(e) => handleFilter(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 font-semibold text-gray-800 bg-gray-100 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer"
            >
              <option disabled value="Select Cuisine">
                Select Cuisine
              </option>
              <option value="All Cuisine">All Cuisine</option>
              <option value="American">American</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
            </select>

            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 px-4 font-semibold text-gray-800 bg-gray-100 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer"
            >
              <option value="default" disabled>
                Sort Recipes
              </option>
              <option value="title-asc">Title (A-Z)</option>
              <option value="title-desc">Title (Z-A)</option>
              <option value="likes-asc">Likes (Low to High)</option>
              <option value="likes-desc">Likes (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {fAll.length === 0 ? (
        <h2 className="font-semibold text-center bg-gray-100 text-red-700 py-16 rounded-lg my-10 text-xl sm:text-2xl md:text-3xl">
          No Recipes Found
        </h2>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fAll.map((single) => (
            <div
              key={single._id}
              className="flex flex-col gap-1.5 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {loding ? (
                <div className="flex flex-col gap-3 w-full mx-auto">
                  <div className="animate-pulse bg-gray-300 h-32 rounded-lg"></div>
                  <div className="animate-pulse bg-gray-300 h-5 w-28 rounded"></div>
                  <div className="animate-pulse bg-gray-300 h-5 w-full rounded"></div>
                  <div className="animate-pulse bg-gray-300 h-5 w-full rounded"></div>
                </div>
              ) : (
                <>
                  <img
                    className="w-full aspect-[4/2] rounded-lg object-cover"
                    src={single.image}
                    alt={single.title}
                  />
                  <span className="font-semibold text-lg text-indigo-800">
                    {single.title}
                  </span>
                  <h1 className="text-sm font-semibold flex flex-row gap-1 text-gray-600">
                    <span className="  ">Cuisine: </span>
                   <p className="font-normal"> {single.cuisine}</p>
                  </h1>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(single.category) ? (
                        single.category.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-[#570df8]/20 border-[#570df8] border-2 text-indigo-800 text-xs px-2 py-1 rounded-lg "
                          >
                            {item} 
                          </span>
                        ))
                      ) : (
                        <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {single.category}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleLike(single._id, single.email)}
                      className="flex items-center gap-1 text-indigo-600 hover:text-indigo-900 transition cursor-pointer"
                      aria-label="Like recipe"
                    >
                      <BiSolidLike size={20} />
                      <span className="font-semibold">
                        {single.likeCount || 0}
                      </span>
                    </button>
                  </div>

                  <span className="text-gray-700 line-clamp-2">
                    {single.instructions}
                  </span>

                  <Link to={`/recipeDetails/${single._id}`} className="mt-auto">
                    <button className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white py-2 rounded-lg transition">
                      View Details
                    </button>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipies;

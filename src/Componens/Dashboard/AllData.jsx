import React from "react";
import {Link} from "react-router";

const AllData = ({category}) => {
  if (category.length === 0) {
    return (
      <div className="bg-red-100 text-red-700 px-4 py-6 rounded-lg text-center my-8 font-semibold">
        No Recipes Available
      </div>
    );
  }

  return (
    <div className=" rounded-lg shadow-sm shadow-white p-4 ">
      <h1 className="text-xl font-bold mb-4 text-indigo-700">
        Recipe Summary List
      </h1>
      <ul className="space-y-3">
        {category.map((rec) => (
          <li
            key={rec._id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-3 gap-2"
          >
            <div>
              <h1 className="font-semibold text-lg text-gray-800">{rec.title}</h1>
              <h1 className="text-sm text-gray-600">
                Cuisine: <span className="text-gray-700">{rec.cuisine}</span> |
                Likes:{" "}
                <span className="text-indigo-600 font-semibold">
                  {rec.likeCount || 0}
                </span>
              </h1>
            </div>
            <Link to={`/recipeDetails/${rec._id}`}>
              <button className="btn btn-sm mt-2 sm:mt-0 bg-indigo-500 hover:bg-indigo-700 text-white rounded px-4 py-1">
                Go to Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllData;

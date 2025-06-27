import React from "react";

const CategorySection = () => {
  const cuisines = [
    {name: "American", image: "https://i.ibb.co/93nBCMQR/679a768f61781.webp"},
    {
      name: "Chinese",
      image: "https://i.ibb.co/DHfSJycZ/attachment-conor-s-articles-88.jpg",
    },
    {name: "Indian", image: "https://i.ibb.co/QFZS1z78/images-1.jpg"},
    {name: "Italian", image: "https://i.ibb.co/FkXMnBtB/images-3.jpg"},
    {name: "Mexican", image: "https://i.ibb.co/DxPFd6h/images-2.jpg"},
  ];

  return (
    <div className="mt-10 mx-[2%] lg:mx-[5%] rounded-lg p-5 shadow shadow-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-indigo-700">
        Our Categories Are
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            className="rounded-2xl shadow-md hover:shadow-xl  hover:scale-105 transition-transform  shadow-gray-200 overflow-hidden"
          >
            <img
              src={cuisine.image}
              alt={cuisine.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col justify-between ">
              <h1 className="text-xl font-semibold text-gray-800">
                {cuisine.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

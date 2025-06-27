// import React from "react";

// const blogs = [
//   {
//     title: "5 Easy Recipes to Try This Weekend",
//     image: "https://i.ibb.co/rfzG8r5g/faith-nwmp.webp",
//     excerpt: "Quick and delicious meals for busy foodies.",
//   },
//   {
//     title: "Top 10 Healthy Ingredients You Should Use",
//     image:
//       "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80",
//     excerpt: "Make your meals healthier and tastier.",
//   },
//   {
//     title: "Why Homemade is Always Better",
//     image: "https://i.ibb.co/4nFCzKJB/images.jpg",
//     excerpt: "The joy and benefits of cooking at home.",
//   },
// ];

// const BlogSection = () => {
//   return (
//     <div className="mt-10 mx-[2%]  lg:mx-[5%]">
//       <h1 className="text-3xl font-bold text-center mb-10">Latest Blogs</h1>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-5 shadow-lg shadow-violet-200 rounded-lg">
//         {blogs.map((blog, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition flex flex-col"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="h-40 w-full object-cover"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="font-semibold text-lg mb-1 text-gray-800">
//                 {blog.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-4 flex-grow">
//                 {blog.excerpt}
//               </p>
//               <button className="text-indigo-600 text-start font-medium hover:underline mt-auto">
//                 Read More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
import React from "react";
import { Link } from "react-router";

const blogs = [
  {
    id: "1",
    title: "5 Easy Recipes to Try This Weekend",
    image: "https://i.ibb.co/rfzG8r5g/faith-nwmp.webp",
    excerpt: "Quick and delicious meals for busy foodies.",
  },
  {
    id: "2",
    title: "Top 10 Healthy Ingredients You Should Use",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80",
    excerpt: "Make your meals healthier and tastier.",
  },
  {
    id: "3",
    title: "Why Homemade is Always Better",
    image: "https://i.ibb.co/4nFCzKJB/images.jpg",
    excerpt: "The joy and benefits of cooking at home.",
  },
];

const BlogSection = () => {
  return (
    <div className="mt-10 mx-[2%] lg:mx-[5%]">
      <h1 className="text-3xl font-bold  mb-10">Latest Blogs</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-5 shadow-lg shadow-violet-200 rounded-lg">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg mb-1 text-gray-800">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {blog.excerpt}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-indigo-600 text-start font-medium hover:underline mt-auto"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

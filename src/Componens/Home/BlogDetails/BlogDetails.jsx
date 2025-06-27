import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router";
import {FaArrowLeft} from "react-icons/fa";
import Loding from "../../Loding/Loding";

const blogs = [
  {
    id: "1",
    title: "5 Easy Recipes to Try This Weekend",
    author: "Emon Chowdhury",
    date: "June 25, 2025",
    image: "https://i.ibb.co/rfzG8r5g/faith-nwmp.webp",
    content: `
Weekends are a great time to try out new recipes without the weekday rush. Here are five recipes that are easy, quick, and delicious:

1. One-Pot Pasta – A 20-minute creamy pasta with minimal cleanup.
2. Grilled Chicken Tacos – Quick-grilled chicken with fresh toppings.
3. Shakshuka – Poached eggs in a spicy tomato sauce, perfect for brunch.
4. Homemade Pizza – Use store-bought dough and your favorite toppings.
5. Fruit Smoothie Bowl – Refreshing, healthy, and perfect for hot afternoons.

Each of these recipes brings comfort, flavor, and simplicity to your weekend meals.
    `,
  },
  {
    id: "2",
    title: "Top 10 Healthy Ingredients You Should Use",
    author: "Emon Chowdhury",
    date: "June 20, 2025",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80",
    content: `
Eating healthy doesn't have to be boring. Here are 10 ingredients to add to your kitchen:

1. Quinoa – A protein-packed grain alternative.
2. Chia Seeds – Great for fiber and omega-3s.
3. Avocados – Healthy fats and creamy texture.
4. Greek Yogurt – High in protein and probiotics.
5. Spinach – Iron-rich and nutrient dense.
6. Sweet Potatoes – Complex carbs and beta-carotene.
7. Blueberries – Antioxidant-rich and delicious.
8. Salmon – Excellent source of omega-3 fatty acids.
9. Almonds – Great snack for energy and vitamin E.
10. Turmeric – Anti-inflammatory spice.

Try adding these ingredients to your daily meals for better health and flavor!
    `,
  },
  {
    id: "3",
    title: "Why Homemade is Always Better",
    author: "Emon Chowdhury",
    date: "June 15, 2025",
    image: "https://i.ibb.co/4nFCzKJB/images.jpg",
    content: `
Homemade meals offer a number of benefits:

- Control over ingredients: Know exactly what's in your food.
- Budget-friendly: Save money by avoiding takeout.
- Healthier: Reduce salt, sugar, and preservatives.
- Customizable: Adjust to taste, spice level, or dietary needs.
- Emotional connection: Cooking creates bonding moments with family and friends.

Plus, the satisfaction of creating something from scratch is unmatched!
    `,
  },
];

const BlogDetails = () => {
  const [lod, setLod] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLod(false);
    }, 200);
  },[]);

  const {id} = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (lod) {
    return <Loding></Loding>;
  }

  return (
    <div className=" p-5 mx-[2%] lg:mx-[5%] flex justify-center items-center flex-col  mt-10  rounded-xl shadow-md shadow-gray-300">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl mb-6 w-full h-[300px] object-cover shadow"
      />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        {blog.title}
      </h1>
      <div className="flex items-center text-sm  text-gray-500 mb-6">
        <span>✍️ {blog.author}</span>
        <span className="mx-2">•</span>
        <span>📅 {blog.date}</span>
      </div>
      <div className="text-gray-500 text-lg text-justify leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex btn btn-primary items-center  font-semibold"
        >
          <FaArrowLeft className="mr-2" /> Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;

import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../ContexFile/Context";
import Loding from "../Loding/Loding";
import Swal from "sweetalert2";
import {Fade} from "react-awesome-reveal";
const AddRecipe = () => {
  const {user} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  const email = user?.email;

 
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const title = e.target.title.value;
    const ingredients = e.target.ingredients.value;
    const preparationTime = e.target.prepTime.value;
    const cuisine = e.target.cuisine.value;
    const likeCount = parseInt(e.target.likeCount.value);
    const instructions = e.target.instructions.value;
    const categoryInputs = e.target.querySelectorAll(
      'input[name="category"]:checked'
    );
    const category = Array.from(categoryInputs).map((input) => input.value);
    const email = e.target.useremail.value;

    const recipe = {
      image,
      title,
      ingredients,
      preparationTime,
      cuisine,
      instructions,
      likeCount,
      category,
      email,
    };

    if (category.length === 0) {
      setInput("Please Select A Category");
      return;
    }


    fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then(() => {

        Swal.fire({
          title: "Success!",
          text: `${title} is added successfully! 🎉`,
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .then(() => {
        e.target.reset();
        setInput("");
      });
  };

  if (loading) {
    return <Loding></Loding>;
  }

  return (
    <div>
      <Fade duration={800} delay={100} triggerOnce={false}>
        <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Add Recipies
        </h1>
      </Fade>

      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handlePost} className="space-y-4 w-5/6 sm:w-1/2  ">
          <input
            type="hidden"
            name="useremail"
            className="p-2 font-semibold border w-full rounded-lg"
            defaultValue={email}
          />
          <br />
          <input
            type="text"
            name="image"
            className="p-2 font-semibold border w-full rounded-lg"
            required
            placeholder="Enter Your Food URL"
          />
          <br />

          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            required
            className="p-2 font-semibold w-full    border  rounded-lg"
          />
          <br />

          <textarea
            name="ingredients"
            placeholder="Ingredients"
            required
            className="p-2 font-semibold w-full    border rounded-lg "
            rows={3}
          ></textarea>

          <br />

          <input
            type="number"
            name="prepTime"
            placeholder="Preparation Time (minutes)"
            required
            className="p-2 font-semibold w-full    border rounded-lg "
          />
          <br />

          <select
            name="cuisine"
            required
            className="p-2 font-semibold w-full    border  rounded-lg"
          >
            <option value="">Select Cuisine</option>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
          </select>
          <br />

          <div className="w-full border rounded-lg p-4 font-semibold">
            <p className="mb-2">Select Category</p>
            <div className="space-y-2 grid grid-cols-2 md:grid-cols-3 ">
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Breakfast" />
                <span>Breakfast</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Lunch" />
                <span>Lunch</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Dinner" />
                <span>Dinner</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Dessert" />
                <span>Dessert</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Vegan" />
                <span>Vegan</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="category" value="Snack" />
                <span>Snack</span>
              </label>
            </div>

            <div className="text-red-600">{input}</div>
          </div>

          <br />

          <textarea
            name="instructions"
            placeholder="Instructions"
            required
            className="p-2 font-semibold w-full    border rounded-lg "
            rows={5}
          ></textarea>
          <br />
          <input defaultValue={0} name="likeCount" type="hidden" />

          <button
            type="submit"
            className="p-2 font-semibold bg-blue-500 text-white rounded-full w-full"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;

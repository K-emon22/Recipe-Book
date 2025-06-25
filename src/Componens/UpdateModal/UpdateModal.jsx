import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";

const UpdateModal = ({id}) => {
  const [updateData, setUpdateData] = useState({});

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateData(data);
        setSelectedCategories(data.category || []);
      });
  }, [id]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const title = e.target.title.value;
    const ingredients = e.target.ingredients.value;
    const preparationTime = e.target.prepTime.value;
    const cuisine = e.target.cuisine.value;
    const likeCount = parseInt(e.target.likeCount.value);
    const instructions = e.target.instructions.value;
    const username = e.target.username.value;

    if (selectedCategories.length === 0) {
      setInput("Please Select A Category");
      return;
    }

    const recipe = {
      image,
      title,
      ingredients,
      preparationTime,
      likeCount,
      cuisine,
      instructions,
      category: selectedCategories,
      username,
    };

    fetch(
      `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Your recipe has been updated.", "success");
        document.getElementById("my_modal_5").close();
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  };

  const cancelUpdate = () => {
    document.getElementById("my_modal_5").close();
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex flex-row justify-between">
            <h3 className="font-bold text-lg my-auto">Update Your Recipe</h3>
            <h1
              onClick={cancelUpdate}
              className="btn btn-outline btn-error font-bold"
            >
              Cancel
            </h1>
          </div>

          <div className="modal-action">
            <form
              onSubmit={handleUpdate}
              method="dialog"
              className="w-full space-y-5"
            >
              <input
                type="hidden"
                name="username"
                className="p-2 font-semibold border w-full rounded-lg"
                defaultValue={updateData?.username}
              />
              <input type="hidden" name="_id" defaultValue={updateData?._id} />

              <input
                type="text"
                name="image"
                className="p-2 font-semibold border w-full rounded-lg"
                placeholder="Enter Your Food URL"
                defaultValue={updateData?.image}
              />

              <input
                type="text"
                name="title"
                placeholder="Recipe Title"
                className="p-2 font-semibold w-full border rounded-lg"
                defaultValue={updateData?.title}
              />

              <textarea
                name="ingredients"
                placeholder="Ingredients"
                className="p-2 font-semibold w-full border rounded-lg"
                rows={3}
                defaultValue={updateData?.ingredients}
              ></textarea>

              <input
                type="number"
                name="prepTime"
                placeholder="Preparation Time (minutes)"
                className="p-2 font-semibold w-full border rounded-lg"
                defaultValue={updateData?.preparationTime}
              />

              <input
                defaultValue={updateData?.likeCount}
                name="likeCount"
                type="hidden"
              />

              <select
                name="cuisine"
                required
                className="p-2 font-semibold w-full border rounded-lg"
                value={updateData?.cuisine || ""}
                onChange={(e) =>
                  setUpdateData((prev) => ({...prev, cuisine: e.target.value}))
                }
              >
                <option value="">Select Cuisine</option>
                <option value="American">American</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
              </select>

              <div className="w-full border rounded-lg p-4 font-semibold">
                <p className="mb-2">Select Category</p>
                <div className="space-y-2 grid grid-cols-2 md:grid-cols-3">
                  {[
                    "Breakfast",
                    "Lunch",
                    "Dinner",
                    "Dessert",
                    "Vegan",
                    "Snack",
                  ].map((item) => (
                    <label key={item} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="category"
                        value={item}
                        checked={selectedCategories.includes(item)}
                        onChange={handleCategoryChange}
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
                <div className="text-red-600">{input}</div>
              </div>

              <textarea
                name="instructions"
                placeholder="Instructions"
                className="p-2 font-semibold w-full border rounded-lg"
                rows={5}
                defaultValue={updateData?.instructions}
              ></textarea>

              <div className="flex justify-center items-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateModal;

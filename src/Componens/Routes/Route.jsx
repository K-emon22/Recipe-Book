import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import HomePage from "../Home/HomePage/HomePage";
import Register from "../FirebaseAuth/register";
import Login from "../FirebaseAuth/Login";
import AllRecipies from "../AllRecipies/AllRecipies";
import AddRecipe from "../AddRecipe/AddRecipe";
import MyRecipe from "../MyRecipe/MyRecipe";
import Error from "../ErrorPage/Error";
import SingleRecipeDetails from "../SingleRecipeDetails/SingleRecipeDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AboutUs from "../AboutUs/AboutUs";


export const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {path: "/allrecipe", element: <AllRecipies></AllRecipies>},
      {
        path: "/addrecipe",
        element: (
          <PrivateRoute>
            <AddRecipe></AddRecipe>
          </PrivateRoute>
        ),
      },
      {
        path: "/myrecipe",
        element: (
          <PrivateRoute>
            <MyRecipe></MyRecipe>
          </PrivateRoute>
        ),
      },
      {
        loader: ({params}) =>
          fetch(
            `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${params.id}`
          ),
        path: "/recipeDetails/:id",
        element: (
          <PrivateRoute>
            <SingleRecipeDetails></SingleRecipeDetails>
          </PrivateRoute>
        ),
      },
      {path: "/aboutus", element: <AboutUs></AboutUs>},
    ],
  },

  {
    path: "/*",
    element: <Error></Error>,
  },
]);

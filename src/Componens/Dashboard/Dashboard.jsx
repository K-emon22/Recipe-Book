import React, {useContext, useEffect, useState} from "react";
import {FaCheckCircle} from "react-icons/fa";
import {BsFillClockFill} from "react-icons/bs";
import {FiCalendar} from "react-icons/fi";
import axios from "axios";
import {GoSun} from "react-icons/go";
import {WiMoonAltWaningCrescent5} from "react-icons/wi";
import {AuthContext} from "../ContexFile/Context";
import {Loader} from "lucide-react";
import {NavLink} from "react-router";
import {BsMenuButtonWideFill} from "react-icons/bs";
import Footer from "../Footer/Footer";
import Loding from "../Loding/Loding";
const Dashboard = () => {
  const [lod, setLod] = useState(true);
  const {user} = useContext(AuthContext);
  console.log(user);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios("https://hero-pro-assignment-10-server-site.vercel.app/recipes").then(
      (res) => {
        setCategory(res.data);
        setLod(false);
      }
    );
  }, []);
  console.log(category);

  const [allRec, setAllRec] = useState([]);

  useEffect(() => {
    fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        setAllRec(data);
      });
  }, [user]);

  const userRecipe = allRec.filter((myRec) => myRec.email == user.email);
  const myTotalLikes = userRecipe.reduce(
    (sum, recipe) => sum + (recipe.likeCount || 0),
    0
  );
  console.log(userRecipe);

  if (lod) {
    return <Loding></Loding>;
  }
  return (
    <div className="min-h-screen pt-5">
      <div className="w-full flex justify-center items-center px-[2%] lg:px-[5%]">
        <h2 className="px-6 py-2 rounded-lg w-full border-2 border-primary mb-5 text-center font-bold text-xl text-white bg-primary shadow-[0_4px_0_0_#3d0fc5] hover:shadow-[0_2px_0_0_#3d0fc5] active:translate-y-1 transition-all duration-200 dark:bg-[#570df8]/90 dark:text-white">
          DashBoard
        </h2>
      </div>
      <div className="   rounded-lg text-gray-800 px-[2%] lg:px-[5%]">
        <div className=" mb-5 flex flex-row justify-between">
          <h1 className="text-3xl hidden lg:block font-bold ">
            Welcome in <span className="text-yellow-600">Recipe Book</span>
          </h1>
          <div className="my-auto hidden lg:block ">
            <span onClick={toggleTheme}>
              {theme == "light" ? (
                <GoSun size={30} className="text-yellow-500 rounded-full" />
              ) : (
                <WiMoonAltWaningCrescent5
                  size={30}
                  className="  rounded-full"
                />
              )}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4  gap-2 ">
          <div className="hidden lg:block mt-1.5  rounded-lg ">
            <ul className="menu p-4  text-white min-h-full rounded-lg w-full bg-[#570df8]/90 font-semibold space-y-2 shadow-lg border-2 border-gray-400">
              {/* Nav Links */}
              <NavLink
                to="/"
                className={({isActive}) =>
                  `block px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-semibold shadow"
                      : "hover:bg-primary/10"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/allrecipe"
                className={({isActive}) =>
                  `block px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-semibold shadow"
                      : "hover:bg-primary/10"
                  }`
                }
              >
                All Recipes
              </NavLink>

              {user && (
                <NavLink
                  to="/addrecipe"
                  className={({isActive}) =>
                    `block px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white font-semibold shadow"
                        : "hover:bg-primary/10"
                    }`
                  }
                >
                  Add Recipe
                </NavLink>
              )}

              {user && (
                <NavLink
                  to="/myrecipe"
                  className={({isActive}) =>
                    `block px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white font-semibold shadow"
                        : "hover:bg-primary/10"
                    }`
                  }
                >
                  My Recipes
                </NavLink>
              )}

              {user && (
                <NavLink
                  to="/dashboard"
                  className={({isActive}) =>
                    `block px-4 py-2 rounded-lg  duration-200 font-semibold hover:scale-105 transition-transform ${
                      isActive
                        ? "bg-violet-300 text-black shadow-[0_4px_0_0_#6d28d9] active:translate-y-[1px]"
                        : ""
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}

              <NavLink
                to="/aboutus"
                className={({isActive}) =>
                  `block px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-semibold shadow"
                      : "hover:bg-primary/10"
                  }`
                }
              >
                About Us
              </NavLink>
            </ul>
          </div>

          <div className="col-span-3 p-1.5 my-auto">
            {" "}
            <div className="flex flex-row justify-between w-full mb-10 lg:mb-0">
              <div className="my-auto ">
                <h1 className="sm:text-3xl text-xl font-bold  lg:hidden ">
                  Welcome in Recipe Book{" "}
                </h1>
              </div>

              <div className=" my-auto flex flex-row gap-2">
                <div className="my-auto lg:hidden">
                  <span onClick={toggleTheme}>
                    {theme == "light" ? (
                      <GoSun
                        size={30}
                        className="text-yellow-500 rounded-full"
                      />
                    ) : (
                      <WiMoonAltWaningCrescent5
                        size={30}
                        className="  rounded-full"
                      />
                    )}
                  </span>
                </div>
                <div className="drawer z-50  lg:hidden drawer-end">
                  <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                  />

                  {/* Main Content */}
                  <div className="drawer-content  ">
                    <label
                      htmlFor="my-drawer"
                      className="btn btn-primary drawer-button"
                    >
                      <BsMenuButtonWideFill />
                    </label>
                    {/* Your page content goes here */}
                  </div>

                  {/* Drawer Side Panel */}
                  <div className="drawer-side mt-[69px] ">
                    <label
                      htmlFor="my-drawer"
                      className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-2/3 sm:w-1/2 md:w-1/4 min-h-full bg-base-100  text-base-content space-y-2 shadow-lg border-2 border-gray-400">
                      {/* Nav Links */}
                      <NavLink
                        to="/"
                        className={({isActive}) =>
                          `block px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-white font-semibold shadow"
                              : "hover:bg-primary/10"
                          }`
                        }
                      >
                        Home
                      </NavLink>

                      <NavLink
                        to="/allrecipe"
                        className={({isActive}) =>
                          `block px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-white font-semibold shadow"
                              : "hover:bg-primary/10"
                          }`
                        }
                      >
                        All Recipes
                      </NavLink>

                      {user && (
                        <NavLink
                          to="/addrecipe"
                          className={({isActive}) =>
                            `block px-4 py-2 rounded-lg transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-white font-semibold shadow"
                                : "hover:bg-primary/10"
                            }`
                          }
                        >
                          Add Recipe
                        </NavLink>
                      )}

                      {user && (
                        <NavLink
                          to="/myrecipe"
                          className={({isActive}) =>
                            `block px-4 py-2 rounded-lg transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-white font-semibold shadow"
                                : "hover:bg-primary/10"
                            }`
                          }
                        >
                          My Recipes
                        </NavLink>
                      )}

                      {user && (
                        <NavLink
                          to="/dashboard"
                          className={({isActive}) =>
                            `block px-4 py-2 rounded-lg transition-all duration-200 ${
                              isActive
                                ? "bg-primary text-white font-semibold shadow"
                                : "hover:bg-primary/10"
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                      )}

                      <NavLink
                        to="/aboutus"
                        className={({isActive}) =>
                          `block px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-white font-semibold shadow"
                              : "hover:bg-primary/10"
                          }`
                        }
                      >
                        About Us
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-6xl mx-auto">
              {/* Stats Row */}
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                <div className=" border-2 border-gray-400  p-4 rounded-xl shadow text-center">
                  <h1 className="text-sm text-gray-500">Recipes</h1>
                  <h1 className="text-xl  text-gray-500 font-bold"> {allRec.length}</h1>
                </div>
                <div className=" p-4 bg-[#570df8]/90 rounded-xl shadow text-center">
                  <p className="text-sm text-white">My Recipe</p>
                  <h2 className="text-xl text-white font-bold">{userRecipe.length}</h2>
                </div>
                <div className="border-gray-400  border-2 p-4 rounded-xl shadow text-center">
                  <h1 className="text-sm text-gray-500">My Recipe Upvotes</h1>
                  <h1 className="text-xl text-gray-500 font-bold">{myTotalLikes}</h1>
                </div>
                {user && (
                  <div className="border-gray-400  border-2  p-4 rounded-xl shadow text-center">
                    <h1 className="text-sm text-gray-500">Views</h1>
                    <h1 className="text-xl  text-gray-500 font-bold">203</h1>
                  </div>
                )}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Profile & Pension */}

                <div className="flex flex-col gap-6">
                  <div className=" rounded-xl border-2 border-gray-400 p-2 flex items-center justify-center h-full">
                    <img
                      src={user?.photoURL}
                      alt="User"
                      referrerPolicy="no-referrer"
                      className="object-cover  w-48 rounded-lg  "
                    />
                  </div>

                  <div className=" border-2 border-gray-400 rounded-xl shadow p-4 flex flex-col items-center justify-center h-full">
                    <h1 className="font-bold text-lg">{user?.displayName}</h1>
                    <h1 className="font-semibold">{user?.email}</h1>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="border-2 border-gray-400 text-gray-500 rounded-xl shadow p-4">
                    <h1 className="text-md font-semibold mb-2">Process</h1>
                    <h1 className="text-3xl font-bold">6.1h</h1>
                    <h1 className="text-sm text-gray-500 mb-4">
                      Week time this week
                    </h1>
                    <div className="flex justify-between text-xs text-gray-500">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (day) => (
                          <div key={day} className="flex flex-col items-center">
                            <div className="h-12 w-2 bg-yellow-400 rounded-full mb-1"></div>
                            <h1>{day}</h1>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className=" text-gray-400 border-2 border-gray-400 rounded-xl shadow p-4 flex flex-col items-center">
                    <h1 className="text-md font-semibold mb-2">Time Tracker</h1>
                    <BsFillClockFill
                      size={30}
                      className="text-yellow-500 mb-2"
                    />
                    <h1 className="text-2xl font-bold">02:35</h1>
                  </div>
                </div>

                <div className=" rounded-xl shadow p-4 border-2 border-gray-400">
                  <h1 className="text-md font-semibold mb-2">
                    Recipe Categories
                  </h1>

                  <h1 className="text-sm text-gray-600 mb-4">
                    {" "}
                    Most of the food category added done
                  </h1>
                  <ul className="space-y-2">
                    {[...new Set(category.map((item) => item.cuisine))].map(
                      (cuisine, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-black"
                        >
                          <FaCheckCircle className="text-green-500" />
                          {cuisine}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;

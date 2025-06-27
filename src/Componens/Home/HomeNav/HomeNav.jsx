import React, {useContext, useEffect, useState} from "react";
import {CgMenuRight} from "react-icons/cg";
import {Link, NavLink, useNavigate} from "react-router";
import {AuthContext} from "../../ContexFile/Context";
import {RxCross2} from "react-icons/rx";

import {GoSun} from "react-icons/go";
import {WiMoonAltWaningCrescent5} from "react-icons/wi";
const HomeNav = () => {
  const [menu, setMenu] = useState(true);
  const {user, logout, loding} = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();
  const logouts = () => {
    logout().then(() => navigate("/"));
  };
  const photo = user?.photoURL;
  const name = user?.displayName;

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

  return (
    <div>
      <div
        className={`sticky top-0 z-50 px-[2%] lg:px-[5%] bg-[#570df8]/30 ${
          theme === "light" ? "text-black" : "text-white "
        } backdrop-blur-md`}
      >
        <nav className=" flex flex-row justify-between  p-1 rounded-b-lg  ">
          <div className="flex flex-row my-auto">
            <img
              className="aspect-[4/3] w-[50px] sm:w-[70px] rounded-lg mr-3"
              src={"https://i.ibb.co/Rp8zjDQR/image-6.jpg"}
              alt=""
            />

            <h1 className="font-bold text-xl sm:text-2xl my-auto  xl:text-5xl hidden md:block">
              Recipe Book
            </h1>
          </div>
          <div className="block md:hidden my-auto">
            <h1 className="font-bold text-xl sm:text-2xl my-auto ">
              Recipe Book
            </h1>
          </div>

          <div className="hidden lg:block my-auto">
            <ul className="flex flex-row  gap-3 font-semibold  ">
              <NavLink
                className={({isActive}) =>
                  `${
                    isActive
                      ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                      : "p-1"
                  }`
                }
                to={"/"}
              >
                Home
              </NavLink>

              <NavLink
                className={({isActive}) =>
                  `${
                    isActive
                      ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                      : "p-1"
                  }`
                }
                to={"/allrecipe"}
              >
                All Recipes
              </NavLink>

              {user && (
                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] text-white p-1 rounded-lg text-center "
                        : "p-1"
                    }`
                  }
                  to={"/addrecipe"}
                >
                  Add Recipe
                </NavLink>
              )}

              {user && (
                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                        : "p-1"
                    }`
                  }
                  to={"/myrecipe"}
                >
                  {" "}
                  My Recipes
                </NavLink>
              )}

              {user && (
                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                        : "p-1"
                    }`
                  }
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              )}

              <NavLink
                className={({isActive}) =>
                  `${
                    isActive
                      ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                      : "p-1"
                  }`
                }
                to={"/aboutus"}
              >
                {" "}
                About Us
              </NavLink>
            </ul>
          </div>

          <div className="flex flex-row gap-2 md:gap-0 ">
            <div className="my-auto hidden md:block mr-2">
              <span onClick={toggleTheme}>
                {theme == "light" ? (
                  <GoSun size={30} className="text-black rounded-full" />
                ) : (
                  <WiMoonAltWaningCrescent5
                    size={30}
                    className="  rounded-full"
                  />
                )}
              </span>
            </div>
            {loding ? (
              <span className="loading loading-ring   w-[50px]"></span>
            ) : (
              <div>
                {user ? (
                  <div className="flex flex-row gap-3  justify-end">
                    <div className="dropdown dropdown-end ">
                      <div tabIndex={0} role="button" className=" m-1">
                        <div className=" ">
                          <img
                            className="  w-[50px]  rounded-full   "
                            src={photo}
                            alt={name}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm border-2 bg-white"
                      >
                        <li className="flex flex-row ">
                          <h2 className="font-bold text-black">{name}</h2>
                        </li>
                        <li className="">
                          <Link to={"/"}>
                            <button
                              onClick={logouts}
                              className=" btn   btn-primary my-auto "
                            >
                              Logout{" "}
                            </button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="my-auto flex flex-row gap-2 sm:gap-5 mt-1.5">
                    <Link className="my-auto" to={"/login"}>
                      <button className="btn   btn-primary my-auto hidden md:block">
                        {" "}
                        Login{" "}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            <div
              onClick={() => setMenu(!menu)}
              className="dropdown dropdown-end my-auto "
            >
              <div tabIndex={0} role="button" className=" ">
                <div className="my-auto">
                  <span className="block lg:hidden ml-5 my-auto cursor-pointer">
                    {menu ? <CgMenuRight size={30} /> : <RxCross2 size={30} />}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content font-semibold menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border-2"
              >
                <div className="mx-auto mb-2">
                  <div className="my-auto ">
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
                </div>

                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                        : "p-1"
                    }`
                  }
                  to={"/"}
                >
                  Home
                </NavLink>

                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                        : "p-1"
                    }`
                  }
                  to={"/allrecipe"}
                >
                  All Recipes
                </NavLink>

                {user && (
                  <NavLink
                    className={({isActive}) =>
                      `${
                        isActive
                          ? "bg-green-400 p-1 rounded-lg text-center "
                          : "p-1"
                      }`
                    }
                    to={"/addrecipe"}
                  >
                    Add Recipe
                  </NavLink>
                )}

                {user && (
                  <NavLink
                    className={({isActive}) =>
                      `${
                        isActive
                          ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                          : "p-1"
                      }`
                    }
                    to={"/myrecipe"}
                  >
                    {" "}
                    My Recipes
                  </NavLink>
                )}
                {user && (
                  <NavLink
                    className={({isActive}) =>
                      `${
                        isActive
                          ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                          : "p-1"
                      }`
                    }
                    to={"/dashboard"}
                  >
                    Dashboard
                  </NavLink>
                )}
                <NavLink
                  className={({isActive}) =>
                    `${
                      isActive
                        ? "bg-[#570df8] p-1 rounded-lg text-center  text-white"
                        : "p-1"
                    }`
                  }
                  to={"/aboutus"}
                >
                  {" "}
                  About Us
                </NavLink>

                {user ? (
                  ""
                ) : (
                  <div className="my-auto flex flex-row gap-2 sm:gap-5 mt-1.5">
                    <Link className="my-auto" to={"/login"}>
                      <button className="btn   btn-primary my-auto md:hidden ">
                        {" "}
                        Login{" "}
                      </button>
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HomeNav;

// // import React, {useContext, useEffect, useState} from "react";
// // import {FiSearch} from "react-icons/fi";
// // import {BiSolidLike} from "react-icons/bi";
// // import {Link} from "react-router";
// // import {AuthContext} from "../ContexFile/Context";
// // import Loding from "../Loding/Loding";
// // import {Fade} from "react-awesome-reveal";
// // const AllRecipies = () => {
// //   useEffect(() => {
// //     window.scroll({
// //       top: 0,
// //       behavior: "smooth",
// //     });
// //   }, []);

// //   const [allRec, setAllRec] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [fAll, setFAll] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [sortOption, setSortOption] = useState("default");
// //   const {loding, user} = useContext(AuthContext);

// //   const handleLike = (id, email) => {
// //     if (email === user?.email) {
// //       return;
// //     }

// //     fetch(
// //       `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
// //       {
// //         method: "PATCH",
// //         headers: {
// //           "content-type": "application/json",
// //         },
// //       }
// //     )
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.modifiedCount) {
// //           const updatedRec = allRec.map((item) => {
// //             if (item._id === id) {
// //               return {...item, likeCount: parseInt(item.likeCount || 0) + 1};
// //             }
// //             return item;
// //           });

// //           setAllRec(updatedRec);

// //           const selectedCuisine = document.querySelector("select").value;
// //           let filteredItem;

// //           if (
// //             selectedCuisine === "All Cuisine" ||
// //             selectedCuisine === "Select Cuisine"
// //           ) {
// //             filteredItem = updatedRec;
// //           } else {
// //             filteredItem = updatedRec.filter(
// //               (rec) => rec.cuisine === selectedCuisine
// //             );
// //           }

// //           const sorted = [...filteredItem];
// //           if (sortOption === "title-asc") {
// //             sorted.sort((a, b) => a.title.localeCompare(b.title));
// //           } else if (sortOption === "title-desc") {
// //             sorted.sort((a, b) => b.title.localeCompare(a.title));
// //           } else if (sortOption === "likes-asc") {
// //             sorted.sort(
// //               (a, b) => parseInt(a.likeCount || 0) - parseInt(b.likeCount || 0)
// //             );
// //           } else if (sortOption === "likes-desc") {
// //             sorted.sort(
// //               (a, b) => parseInt(b.likeCount || 0) - parseInt(a.likeCount || 0)
// //             );
// //           }

// //           setFAll(sorted);
// //         }
// //       });
// //   };
// //   useEffect(() => {
// //     fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         setAllRec(data);
// //         setLoading(false);

// //         setFAll(data);
// //       });
// //   }, []);

// //   const handleFilter = (cuisine) => {
// //     const filteredItem = allRec.filter((rec) => rec.cuisine == cuisine);

// //     if (cuisine == "All Cuisine") {
// //       setFAll(allRec);
// //     } else {
// //       setFAll(filteredItem);
// //     }
// //   };

// //  const handleSearch = (value) => {
// //   setSearchTerm(value);

// //   const lowerSearch = value.toLowerCase();

// //   const filtered = allRec.filter((rec) =>
// //     rec.cuisine.toLowerCase().includes(lowerSearch)
// //   );

// //   setFAll(filtered);
// // };

// //   const handleSort = (option) => {
// //     setSortOption(option);

// //     const sorted = [...fAll];

// //     if (option === "title-asc") {
// //       sorted.sort((a, b) => a.title.localeCompare(b.title));
// //     } else if (option === "title-desc") {
// //       sorted.sort((a, b) => b.title.localeCompare(a.title));
// //     } else if (option === "likes-asc") {
// //       sorted.sort(
// //         (a, b) => parseInt(a.likeCount || 0) - parseInt(b.likeCount || 0)
// //       );
// //     } else if (option === "likes-desc") {
// //       sorted.sort(
// //         (a, b) => parseInt(b.likeCount || 0) - parseInt(a.likeCount || 0)
// //       );
// //     }

// //     setFAll(sorted);
// //   };

// //   if (loading) {
// //     return <Loding></Loding>;
// //   }

// //   return (
// //     <div className="mx-[2%] lg:mx-[5%]">
// //       <Fade duration={800} delay={100} triggerOnce={false}>
// //         <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
// //           Our All Recipes
// //         </h1>
// //       </Fade>

// //       <div className="flex items-center flex-col sm:flex-row justify-between my-10">
// //         <div className="w-full md:w-[400px] mb-4 sm:mb-0 sm:mr-4 flex">
// //           <input
// //             type="text"
// //             placeholder="Search by title or cuisine..."
// //             className="input  rounded-r-none w-full"
// //             value={searchTerm}
// //             onChange={(e) => handleSearch(e.target.value)}
// //           />
// //           <button className="btn btn-primary rounded-l-none" type="button">
// //             <FiSearch size={20} />
// //           </button>
// //         </div>
// //         <div className="w-full md:w-[400px]">
// //           <select
// //             defaultValue="Select Cuisine"
// //             className="select border border-gray-400 text-center font-semibold w-full"
// //             onChange={(cuisine) => handleFilter(cuisine.target.value)}
// //           >
// //             <option disabled={true}>Select Cuisine</option>

// //             <option
// //               value={"All Cuisine"}
// //               className="cursor-pointer  text-center my-1 border-2 rounded-lg "
// //             >
// //               {" "}
// //               All Cuisine
// //             </option>
// //             <option
// //               value={"American"}
// //               className="cursor-pointer  text-center my-1 border-2 rounded-lg "
// //             >
// //               {" "}
// //               American
// //             </option>
// //             <option
// //               value={"Chinese"}
// //               className="cursor-pointer  text-center my-1 border-2 rounded-lg "
// //             >
// //               {" "}
// //               Chinese{" "}
// //             </option>
// //             <option
// //               value={"Indian"}
// //               className="cursor-pointer  text-center my-1 border-2 rounded-lg "
// //             >
// //               {" "}
// //               Indian
// //             </option>
// //             <option
// //               value={"Italian"}
// //               className="cursor-pointer  text-center my-1 border-2 rounded-lg "
// //             >
// //               {" "}
// //               Italian
// //             </option>
// //           </select>
// //         </div>
// //         <div className="w-full md:w-[250px] mt-4 md:mt-0">
// //           <select
// //             className="select border border-gray-400 text-center font-semibold w-full"
// //             value={sortOption}
// //             onChange={(e) => handleSort(e.target.value)}
// //           >
// //             <option value="default" disabled>
// //               Sort Recipes
// //             </option>
// //             <option value="title-asc">Title (A-Z)</option>
// //             <option value="title-desc">Title (Z-A)</option>
// //             <option value="likes-asc">Likes (Low to High)</option>
// //             <option value="likes-desc">Likes (High to Low)</option>
// //           </select>
// //         </div>
// //       </div>

// //       {fAll.length === 0 ? (
// //         <h1 className="font-bold text-center bg-black/30 py-20 rounded-lg my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
// //           {" "}
// //           No Recipes Found By This Cuisine Name{" "}
// //         </h1>
// //       ) : (
// //         <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5">
// //           {fAll.map((single) => (
// //             <div key={single._id}>
// //               {loding ? (
// //                 <div className="flex w-52 flex-col gap-4 mx-auto">
// //                   <div className="skeleton h-32 w-full"></div>
// //                   <div className="skeleton h-4 w-28"></div>
// //                   <div className="skeleton h-4 w-full"></div>
// //                   <div className="skeleton h-4 w-full"></div>
// //                 </div>
// //               ) : (
// //                 <div className="flex flex-col gap-3 p-2 border rounded-lg h-full">
// //                   <img
// //                     className="w-full aspect-[4/2]  mx-auto h-fit rounded-lg"
// //                     src={single.image}
// //                     alt={single.title}
// //                   />
// //                   <h1 className="font-bold text-2xl md:text-[18px] ">
// //                     {single.title}
// //                   </h1>
// //                   <h1 className="font-semibold">
// //                     {" "}
// //                     <span className="text-black/50">Cuisine Type:</span>{" "}
// //                     {single.cuisine}
// //                   </h1>

// //                   <div className="grid grid-cols-4 justify-between">
// //                     <h1 className="font-bold  col-span-3 rounded-lg px-1">
// //                       {Array.isArray(single.category) ? (
// //                         single.category.map((item, index) => (
// //                           <span
// //                             key={index}
// //                             className="mr-1 mb-1 bg-[#570df8]/30 border-2 border-[#570df8] text-white rounded-lg px-1  py-1  text-sm inline-block"
// //                           >
// //                             {item}
// //                           </span>
// //                         ))
// //                       ) : (
// //                         <span className="mr-1 py-1  text-sm bg-gray-500 rounded-lg px-1 inline-block">
// //                           {single.category}
// //                         </span>
// //                       )}
// //                     </h1>
// //                     <h1 className="flex flex-row gap-2 justify-end">
// //                       <span
// //                         onClick={() => handleLike(single._id, single.email)}
// //                         className="my-auto cursor-pointer"
// //                       >
// //                         <BiSolidLike className="text-blue-600" size={20} />
// //                       </span>
// //                       <span className="font-bold my-auto">
// //                         {single.likeCount}
// //                       </span>
// //                     </h1>
// //                   </div>
// //                   <h1 className="line-clamp-2">{single.instructions}</h1>

// //                   <Link className="mt-auto" to={`/recipeDetails/${single._id}`}>
// //                     <button className="btn btn-primary w-full ">
// //                       {" "}
// //                       View Details
// //                     </button>
// //                   </Link>
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default AllRecipies;
// import React, { useContext, useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { BiSolidLike } from "react-icons/bi";
// import { Link } from "react-router";
// import { AuthContext } from "../ContexFile/Context";
// import Loding from "../Loding/Loding";
// import { Fade } from "react-awesome-reveal";

// const AllRecipies = () => {
//   useEffect(() => {
//     window.scroll({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   const [allRec, setAllRec] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // filtered by cuisine only
//   const [filteredByCuisine, setFilteredByCuisine] = useState([]);
//   // search term
//   const [searchTerm, setSearchTerm] = useState("");
//   // final filtered + searched + sorted list
//   const [fAll, setFAll] = useState([]);
//   const [sortOption, setSortOption] = useState("default");
//   const { loding, user } = useContext(AuthContext);

//   // Handle Likes
//   const handleLike = (id, email) => {
//     if (email === user?.email) return;

//     fetch(`https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`, {
//       method: "PATCH",
//       headers: { "content-type": "application/json" },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           const updatedRec = allRec.map((item) =>
//             item._id === id ? { ...item, likeCount: parseInt(item.likeCount || 0) + 1 } : item
//           );
//           setAllRec(updatedRec);

//           // Update filteredByCuisine based on current cuisine filter
//           if (currentCuisine === "All Cuisine" || currentCuisine === "Select Cuisine") {
//             setFilteredByCuisine(updatedRec);
//           } else {
//             setFilteredByCuisine(updatedRec.filter((rec) => rec.cuisine === currentCuisine));
//           }
//         }
//       });
//   };

//   // To keep track of currently selected cuisine
//   const [currentCuisine, setCurrentCuisine] = useState("Select Cuisine");

//   // Initial fetch
//   useEffect(() => {
//     fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllRec(data);
//         setLoading(false);
//         setFilteredByCuisine(data);
//       });
//   }, []);

//   // Handle filter by cuisine
//   const handleFilter = (cuisine) => {
//     setCurrentCuisine(cuisine);
//     if (cuisine === "All Cuisine") {
//       setFilteredByCuisine(allRec);
//     } else {
//       setFilteredByCuisine(allRec.filter((rec) => rec.cuisine === cuisine));
//     }
//     setSearchTerm(""); // reset search on cuisine change
//   };

//   // Handle Search on filtered cuisine data
//   const handleSearch = (value) => {
//     setSearchTerm(value);
//   };

//   // Handle sort option change
//   const handleSort = (option, listToSort = fAll) => {
//     setSortOption(option);
//     let sorted = [...listToSort];

//     if (option === "title-asc") {
//       sorted.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (option === "title-desc") {
//       sorted.sort((a, b) => b.title.localeCompare(a.title));
//     } else if (option === "likes-asc") {
//       sorted.sort((a, b) => (parseInt(a.likeCount) || 0) - (parseInt(b.likeCount) || 0));
//     } else if (option === "likes-desc") {
//       sorted.sort((a, b) => (parseInt(b.likeCount) || 0) - (parseInt(a.likeCount) || 0));
//     }
//     setFAll(sorted);
//   };

//   // Update displayed list when filteredByCuisine or searchTerm changes
//   useEffect(() => {
//     // filter by search term on filteredByCuisine data
//     if (!searchTerm) {
//       // no search, just show filteredByCuisine + sort
//       handleSort(sortOption, filteredByCuisine);
//     } else {
//       const lowerSearch = searchTerm.toLowerCase();
//       const searched = filteredByCuisine.filter(
//         (rec) =>
//           rec.title.toLowerCase().includes(lowerSearch) ||
//           rec.cuisine.toLowerCase().includes(lowerSearch)
//       );
//       handleSort(sortOption, searched);
//     }
//   }, [filteredByCuisine, searchTerm]);

//   if (loading) {
//     return <Loding />;
//   }

//   return (
//     <div className="mx-[2%] lg:mx-[5%]">
//       <Fade duration={800} delay={100} triggerOnce={false}>
//         <h1 className="font-bold my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Our All Recipes</h1>
//       </Fade>

//       <div className="flex items-center flex-col sm:flex-row justify-between my-10">
//         <div className="w-full md:w-[400px] mb-4 sm:mb-0 sm:mr-4 flex">
//           <input
//             type="text"
//             placeholder="Search by title or cuisine..."
//             className="input rounded-r-none w-full"
//             value={searchTerm}
//             onChange={(e) => handleSearch(e.target.value)}
//           />
//           <button className="btn btn-primary rounded-l-none" type="button">
//             <FiSearch size={20} />
//           </button>
//         </div>

//         <div className="w-full md:w-[400px]">
//           <select
//             value={currentCuisine}
//             className="select border border-gray-400 text-center font-semibold w-full"
//             onChange={(e) => handleFilter(e.target.value)}
//           >
//             <option disabled value="Select Cuisine">
//               Select Cuisine
//             </option>
//             <option value="All Cuisine" className="cursor-pointer text-center my-1 border-2 rounded-lg">
//               All Cuisine
//             </option>
//             <option value="American" className="cursor-pointer text-center my-1 border-2 rounded-lg">
//               American
//             </option>
//             <option value="Chinese" className="cursor-pointer text-center my-1 border-2 rounded-lg">
//               Chinese
//             </option>
//             <option value="Indian" className="cursor-pointer text-center my-1 border-2 rounded-lg">
//               Indian
//             </option>
//             <option value="Italian" className="cursor-pointer text-center my-1 border-2 rounded-lg">
//               Italian
//             </option>
//           </select>
//         </div>

//         <div className="w-full md:w-[250px] mt-4 md:mt-0">
//           <select
//             className="select border border-gray-400 text-center font-semibold w-full"
//             value={sortOption}
//             onChange={(e) => handleSort(e.target.value)}
//           >
//             <option value="default" disabled>
//               Sort Recipes
//             </option>
//             <option value="title-asc">Title (A-Z)</option>
//             <option value="title-desc">Title (Z-A)</option>
//             <option value="likes-asc">Likes (Low to High)</option>
//             <option value="likes-desc">Likes (High to Low)</option>
//           </select>
//         </div>
//       </div>

//       {fAll.length === 0 ? (
//         <h1 className="font-bold text-center bg-black/30 py-20 rounded-lg my-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
//           No Recipes Found By This Cuisine Name
//         </h1>
//       ) : (
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//           {fAll.map((single) => (
//             <div key={single._id}>
//               {loding ? (
//                 <div className="flex w-52 flex-col gap-4 mx-auto">
//                   <div className="skeleton h-32 w-full"></div>
//                   <div className="skeleton h-4 w-28"></div>
//                   <div className="skeleton h-4 w-full"></div>
//                   <div className="skeleton h-4 w-full"></div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-3 p-2 border rounded-lg h-full">
//                   <img
//                     className="w-full aspect-[4/2] mx-auto h-fit rounded-lg"
//                     src={single.image}
//                     alt={single.title}
//                   />
//                   <h1 className="font-bold text-2xl md:text-[18px]">{single.title}</h1>
//                   <h1 className="font-semibold">
//                     <span className="text-black/50">Cuisine Type:</span> {single.cuisine}
//                   </h1>

//                   <div className="grid grid-cols-4 justify-between">
//                     <h1 className="font-bold col-span-3 rounded-lg px-1">
//                       {Array.isArray(single.category) ? (
//                         single.category.map((item, index) => (
//                           <span
//                             key={index}
//                             className="mr-1 mb-1 bg-[#570df8]/30 border-2 border-[#570df8] text-white rounded-lg px-1 py-1 text-sm inline-block"
//                           >
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="mr-1 py-1 text-sm bg-gray-500 rounded-lg px-1 inline-block">
//                           {single.category}
//                         </span>
//                       )}
//                     </h1>
//                     <h1 className="flex flex-row gap-2 justify-end">
//                       <span
//                         onClick={() => handleLike(single._id, single.email)}
//                         className="my-auto cursor-pointer"
//                       >
//                         <BiSolidLike className="text-blue-600" size={20} />
//                       </span>
//                       <span className="font-bold my-auto">{single.likeCount}</span>
//                     </h1>
//                   </div>
//                   <h1 className="line-clamp-2">{single.instructions}</h1>

//                   <Link className="mt-auto" to={`/recipeDetails/${single._id}`}>
//                     <button className="btn btn-primary w-full">View Details</button>
//                   </Link>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // export default AllRecipies;

// import React, {useContext, useEffect, useState} from "react";
// import {FiSearch} from "react-icons/fi";
// import {BiSolidLike} from "react-icons/bi";
// import {Link} from "react-router";
// import {AuthContext} from "../ContexFile/Context";
// import Loding from "../Loding/Loding";
// import {Fade} from "react-awesome-reveal";

// const AllRecipies = () => {
//   useEffect(() => {
//     window.scroll({top: 0, behavior: "smooth"});
//   }, []);

//   const [allRec, setAllRec] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filteredByCuisine, setFilteredByCuisine] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fAll, setFAll] = useState([]);
//   const [sortOption, setSortOption] = useState("default");
//   const [currentCuisine, setCurrentCuisine] = useState("Select Cuisine");
//   const {loding, user} = useContext(AuthContext);

//   const handleLike = (id, email) => {
//     if (email === user?.email) return;

//     fetch(
//       `https://hero-pro-assignment-10-server-site.vercel.app/recipes/${id}`,
//       {
//         method: "PATCH",
//         headers: {"content-type": "application/json"},
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount) {
//           const updatedRec = allRec.map((item) =>
//             item._id === id
//               ? {...item, likeCount: parseInt(item.likeCount || 0) + 1}
//               : item
//           );
//           setAllRec(updatedRec);
//           if (
//             currentCuisine === "All Cuisine" ||
//             currentCuisine === "Select Cuisine"
//           ) {
//             setFilteredByCuisine(updatedRec);
//           } else {
//             setFilteredByCuisine(
//               updatedRec.filter((rec) => rec.cuisine === currentCuisine)
//             );
//           }
//         }
//       });
//   };

//   useEffect(() => {
//     fetch("https://hero-pro-assignment-10-server-site.vercel.app/recipes")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllRec(data);
//         setLoading(false);
//         setFilteredByCuisine(data);
//       });
//   }, []);

//   const handleFilter = (cuisine) => {
//     setCurrentCuisine(cuisine);
//     if (cuisine === "All Cuisine") {
//       setFilteredByCuisine(allRec);
//     } else {
//       setFilteredByCuisine(allRec.filter((rec) => rec.cuisine === cuisine));
//     }
//     setSearchTerm("");
//   };

//   const handleSearch = (value) => {
//     setSearchTerm(value);
//   };

//   const handleSort = (option, listToSort = fAll) => {
//     setSortOption(option);
//     let sorted = [...listToSort];

//     if (option === "title-asc")
//       sorted.sort((a, b) => a.title.localeCompare(b.title));
//     else if (option === "title-desc")
//       sorted.sort((a, b) => b.title.localeCompare(a.title));
//     else if (option === "likes-asc")
//       sorted.sort(
//         (a, b) => (parseInt(a.likeCount) || 0) - (parseInt(b.likeCount) || 0)
//       );
//     else if (option === "likes-desc")
//       sorted.sort(
//         (a, b) => (parseInt(b.likeCount) || 0) - (parseInt(a.likeCount) || 0)
//       );

//     setFAll(sorted);
//   };

//   useEffect(() => {
//     if (!searchTerm) handleSort(sortOption, filteredByCuisine);
//     else {
//       const lowerSearch = searchTerm.toLowerCase();
//       const searched = filteredByCuisine.filter(
//         (rec) =>
//           rec.title.toLowerCase().includes(lowerSearch) ||
//           rec.cuisine.toLowerCase().includes(lowerSearch)
//       );
//       handleSort(sortOption, searched);
//     }
//   }, [filteredByCuisine, searchTerm]);

//   if (loading) return <Loding />;

//   return (
//     <div className="mx-[2%] lg:mx-[5%]">
//       <Fade duration={800} delay={100} triggerOnce={false}>
//         <h1 className="font-extrabold my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-700">
//           All Recipes
//         </h1>
//       </Fade>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">

//         <div className="relative w-full ">
//           <input
//             type="text"
//             placeholder="Search by title or cuisine..."
//             className="w-full py-3 pl-4 pr-10 rounded-lg border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none text-gray-400"
//             value={searchTerm}
//             onChange={(e) => handleSearch(e.target.value)}
//           />
//           <FiSearch
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//             size={20}
//           />
//         </div>
// <div>

// </div>
//         <div className=" flex flex-row  col-span-2">
//           <select
//           value={currentCuisine}
//           onChange={(e) => handleFilter(e.target.value)}
//           className="w-full  rounded-lg border border-gray-300  py-3 px-4 font-semibold text-gray-100 bg-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer"
//         >
//           <option disabled value="Select Cuisine">
//             Select Cuisine
//           </option>
//           <option value="All Cuisine">All Cuisine</option>
//           <option value="American">American</option>
//           <option value="Chinese">Chinese</option>
//           <option value="Indian">Indian</option>
//           <option value="Italian">Italian</option>
//         </select>

//         <select
//           value={sortOption}
//           onChange={(e) => handleSort(e.target.value)}
//           className="w-full  rounded-lg border border-gray-300 text-gray-100 bg-gray-400 py-3 px-4 font-semibold focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 transition outline-none cursor-pointer"
//         >
//           <option value="default" disabled>
//             Sort Recipes
//           </option>
//           <option value="title-asc">Title (A-Z)</option>
//           <option value="title-desc">Title (Z-A)</option>
//           <option value="likes-asc">Likes (Low to High)</option>
//           <option value="likes-desc">Likes (High to Low)</option>
//         </select>
//         </div>
//       </div>

//       {fAll.length === 0 ? (
//         <h2 className="font-semibold text-center bg-gray-400 text-red-700 py-16 rounded-lg my-10 text-xl sm:text-2xl md:text-3xl">
//           No Recipes Found
//         </h2>
//       ) : (
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {fAll.map((single) => (
//             <div
//               key={single._id}
//               className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
//             >
//               {loding ? (
//                 <div className="flex flex-col gap-3 w-full mx-auto">
//                   <div className="animate-pulse bg-gray-300 h-32 rounded-lg"></div>
//                   <div className="animate-pulse bg-gray-300 h-5 w-28 rounded"></div>
//                   <div className="animate-pulse bg-gray-300 h-5 w-full rounded"></div>
//                   <div className="animate-pulse bg-gray-300 h-5 w-full rounded"></div>
//                 </div>
//               ) : (
//                 <>
//                   <img
//                     className="w-full aspect-[4/2] rounded-lg object-cover"
//                     src={single.image}
//                     alt={single.title}
//                   />
//                   <h3 className="font-semibold text-lg text-indigo-800">
//                     {single.title}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-600">
//                     <span className="text-gray-400">Cuisine: </span>
//                     {single.cuisine}
//                   </p>

//                   <div className="flex justify-between items-center">
//                     <div className="flex flex-wrap gap-1">
//                       {Array.isArray(single.category) ? (
//                         single.category.map((item, idx) => (
//                           <span
//                             key={idx}
//                             className="bg-indigo-200 text-indigo-800 text-xs px-2 py-1 rounded-full"
//                           >
//                             {item}
//                           </span>
//                         ))
//                       ) : (
//                         <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">
//                           {single.category}
//                         </span>
//                       )}
//                     </div>
//                     <button
//                       onClick={() => handleLike(single._id, single.email)}
//                       className="flex items-center gap-1 text-indigo-600 hover:text-indigo-900 transition cursor-pointer"
//                       aria-label="Like recipe"
//                     >
//                       <BiSolidLike size={20} />
//                       <span className="font-semibold">
//                         {single.likeCount || 0}
//                       </span>
//                     </button>
//                   </div>

//                   <p className="text-gray-700 line-clamp-2">
//                     {single.instructions}
//                   </p>

//                   <Link to={`/recipeDetails/${single._id}`} className="mt-auto">
//                     <button className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 border-none text-white py-2 rounded-lg transition">
//                       View Details
//                     </button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllRecipies;
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
              className="flex flex-col gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
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
                    <h2  className="  ">Cuisine: </h2>
                   <h2 className="font-normal"> {single.cuisine}</h2>
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

// import {Link, NavLink} from "react-router";

// const Footer = () => {
//   return (
//     <div className="mt-20 ">
//       <footer className="footer footer-horizontal footer-center gap-2 bg-black text-primary-content p-10">
//         <aside className="flex flex-col">
//           <img className="h-15 w-20 rounded-lg" src="https://i.ibb.co/Rp8zjDQR/image-6.jpg" alt="" />
//           <p className="font-bold text-2xl">Recipe Book</p>
//         </aside>

//         <div className="mt-2">
//           <div className="grid grid-flow-col gap-4">
//             <a href="https://twitter.com/ProgrammingHero" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 1200 1227"
//                 width="24"
//                 height="24"
//                 className="fill-current"
//               >
//                 <path d="M1126.29 0H899.3L599.07 440.35 284.83 0H0l420.09 611.42L0 1227h227.08l323.5-471.52L915.17 1227H1200L758.73 584.48 1126.29 0z" />
//               </svg>
//             </a>
//             <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//               </svg>
//             </a>
//             <a href="https://www.facebook.com/ProgrammingHero/" target="_blank">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="fill-current"
//               >
//                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//               </svg>
//             </a>
//           </div>
//           <div className="flex flex-col my-2 gap-2">
//             <p>email: emonsheikh@gmail.com</p>
//             <p>Mobile: 01915367777</p>
//           </div>
//           <Link to={"/term"} className="hover:cursor-pointer hover:underline">
//             {" "}
//             Terms & Conditions{" "}
//           </Link>
//           <p className="">
//             Copyright © {new Date().getFullYear()} - All right reserved
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;
import {Link} from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img
            className="h-16 w-20 rounded-lg"
            src="https://i.ibb.co/Rp8zjDQR/image-6.jpg"
            alt="Recipe Book"
          />
          <h2 className="text-2xl font-bold text-white">Recipe Book</h2>
          <p className="text-sm text-gray-400">
            Discover, cook, and share your favorite recipes with ease.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/ProgrammingHero"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-6 h-6 fill-current hover:text-blue-400"
                viewBox="0 0 1200 1227"
              >
                <path d="M1126.29 0H899.3L599.07 440.35 284.83 0H0l420.09 611.42L0 1227h227.08l323.5-471.52L915.17 1227H1200L758.73 584.48 1126.29 0z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/ProgrammingHero"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-6 h-6 fill-current hover:text-red-500"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ProgrammingHero/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-6 h-6 fill-current hover:text-blue-600"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-2">
          <div>
            <h2 className=" text-white">Email: emonsheikh@gmail.com</h2>
            <h2 className=" text-white text-center md:text-end">Mobile: 01915367777</h2>
          </div>
          <Link to="/term" className="text-sm hover:underline text-indigo-400">
            Terms & Conditions
          </Link>
          <h2 className="text-xs text-white mt-2">
            &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

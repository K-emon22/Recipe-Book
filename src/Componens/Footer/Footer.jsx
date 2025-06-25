import {NavLink} from "react-router";

const Footer = () => {
  return (
    <div className="mt-20 ">
      <footer className="footer footer-horizontal footer-center gap-2 bg-black text-primary-content p-10">
        <aside>
          
          <p className="font-bold text-2xl">Recipe Book</p>
          {/* <div className=" flex flex-col md:flex-row font-semibold ">
            <NavLink
              className={({isActive}) =>
                `${
                  isActive
                    ? "bg-green-400 p-1 rounded-lg text-center  text-black"
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
                    ? "bg-green-400 p-1 rounded-lg text-center text-black "
                    : "p-1"
                }`
              }
              to={"/allrecipe"}
            >
              All Recipes
            </NavLink>

            <NavLink
              className={({isActive}) =>
                `${
                  isActive
                    ? "bg-green-400 p-1 rounded-lg text-center text-black "
                    : "p-1"
                }`
              }
              to={"/addrecipe"}
            >
              Add Recipe
            </NavLink>

            <NavLink
              className={({isActive}) =>
                `${
                  isActive
                    ? "bg-green-400 p-1 rounded-lg text-center  text-black"
                    : "p-1"
                }`
              }
              to={"/myrecipe"}
            >
              {" "}
              My Recipes
            </NavLink>
          </div> */}
        </aside>

        <div className="mt-2">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/ProgrammingHero" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                width="24"
                height="24"
                className="fill-current"
              >
                <path d="M1126.29 0H899.3L599.07 440.35 284.83 0H0l420.09 611.42L0 1227h227.08l323.5-471.52L915.17 1227H1200L758.73 584.48 1126.29 0z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/c/ProgrammingHero" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/ProgrammingHero/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-col my-2 gap-2">
            <p>email: emonsheikh@gmail.com</p>
            <p>Mobile: 01915367777</p>
          </div>
          <p className="">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

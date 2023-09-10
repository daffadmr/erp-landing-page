import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  let params = useParams();
  const loginRoute = params.login === "login";

  const [toggleNav, setToggleNav] = useState(false);

  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  const nav = [
    { name: "About", id: "#about" },
    { name: "Pricing", id: "#pricing" },
    { name: "Contact", id: "#contact" },
  ];

  return (
    <header
      className={`w-full sticky top-0 left-0 z-10 bg-indigo-500 text-white`}
    >
      <div className="container max-w-[1300px] py-2 px-4">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="py-3 flex justify-between">
            <a href="/">
              <h1 className="font-bold text-xl">Resourse-Sync</h1>
            </a>
            <div className="mobile-button lg:hidden flex gap-5 items-center">
              <Link
                to={"/login"}
                className="px-6 py-1 rounded text-white border hover:text-indigo-800 border-white hover:border-indigo-200 hover:bg-indigo-300 active:bg-indigo-600 active:text-indigo-100"
              >
                Login
              </Link>
              <button
                className={`flex flex-col gap-2 transition ${
                  toggleNav && "click"
                } ${loginRoute && 'hidden'}`}
                onClick={() => toggleNavbar()}
              >
                <span
                  className={`hamburger-line origin-top-left transition duration-300 ease-in-out`}
                />
                <span
                  className={`hamburger-line transition duration-200 ease-in-out`}
                />
                <span
                  className={`hamburger-line origin-bottom-left transition duration-200 ease-in-out"`}
                />
              </button>
            </div>
          </div>

          <div
            className={`flex items-center absolute lg:static top-[60px] right-0 w-full lg:w-auto shadow-lg lg:shadow-none bg-indigo-500`}
          >
            <nav
              className={`py-0 lg:py-0 lg:justify-end ${
                toggleNav ? "flex" : "hidden"
              } lg:flex w-full px-4 ${loginRoute && "hidden"}`}
            >
              <ul className="flex gap-5 flex-col lg:w-auto lg:flex-row items-start lg:items-center w-full lg:pb-0">
                {nav.map((list, index) => {
                  return (
                    <li key={index} className={`w-full ${loginRoute && 'hidden'}`}>
                      <a
                        className={`block py-3 lg:w-auto lg:pl-4`}
                        href={`${list.id}`}
                        onClick={() => toggleNavbar()}
                      >
                        {list.name}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <Link
                    to={"/login"}
                    className="px-6 py-1 rounded text-white border hover:text-indigo-800 border-white hover:border-indigo-200 hover:bg-indigo-300 active:bg-indigo-800 hidden lg:flex"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

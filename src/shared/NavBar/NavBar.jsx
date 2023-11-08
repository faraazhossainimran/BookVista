import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const defaultImage = "https://i.ibb.co/j6TjQfR/7309681.jpg";
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(
        // logut
        Swal.fire(
          "Log out succefully!",
          "You are redirect to home page!",
          "Success"
        ),
        navigate("/")
      )
      .catch((error) => {
        Swal.fire("Error!", "Error while logging out!", "error");
      });
  };
  const navLinks = (
    <>
      <li className="text-xl">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-xl">
        <Link to={"/about"}>About Us</Link>
      </li>
      <li className="text-xl">
        <Link to={"/rooms"}>Rooms</Link>
      </li>
      <li className="text-xl">
        <Link to={"/bookings"}>My Bookings</Link>
      </li>

    </>
  );
  return (
    <nav className="relative sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="navbar">
        <div
          className="absolute"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        ></div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl md:text-2xl md:ml-8">
            <Link to={"/"}>BookVista</Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="flex">
              <div className="flex">
                <h3 className=" mt-5 md:mt-3 md:text-xl font-semibold mr-2 md:mr-4">
                  {user?.displayName || "User"}
                </h3>
                <div className="avatar online mr-4">
                  <div className="w-14 rounded-full">
                    <img
                      className=""
                      src={(user && user?.photoUrl) || defaultImage}
                    />
                  </div>
                </div>
              </div>
              <a className="p-2 md:p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold">
                <Link onClick={handleLogOut} >SignOut</Link>
              </a>
            </div>
          ) : (
            <a className="mr-4 p-2 px-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 b-0 text-white font-semibold">
              <Link to={"/login"}>Login</Link>
            </a>
          )}
          {/* <a className="btn mr-8">
            <Link to={"/login"}>Login</Link>
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl bg-gray">
          RentSpot
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-100 md:w-auto bg-slate-50"
          />
        </div>
        <div>
          <Link to="/posts/create" className="btn btn-ghost bg-blue-400">
            Add Post
          </Link>
          <Link to="/login" className="btn btn-ghost">
            Login
          </Link>
          <Link to="/register" className="btn btn-ghost">
            Register
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] py-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-60"
          >
            <li className=" p-1">
              <Link>Profile</Link>
            </li>
            <li className=" p-1">
              <Link>Settings</Link>
            </li>
            <li className=" p-1">
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

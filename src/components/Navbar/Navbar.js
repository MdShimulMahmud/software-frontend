import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLoggedOutUser } from "../../features/auth/authSlice";

const Navbar = () => {
  const { isLoading, isError, error, isLoggedIn, user } = useSelector(
    (state) => state.auth
  );

  const image = user?.profile?.image;

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(fetchLoggedOutUser());
  };

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
          {isLoggedIn && (
            <Link to="/posts/create" className="btn btn-ghost bg-blue-400">
              Add Post
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" className="btn  btn-ghost bg-blue-400">
              Login
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/register" className="btn mx-3 btn-ghost bg-blue-400">
              Register
            </Link>
          )}
        </div>
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    image !== ""
                      ? image
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] py-3 shadow menu menu-sm dropdown-content bg-white rounded-box w-60"
            >
              <li className=" p-1">
                <Link to="/profile">Profile</Link>
              </li>
              <li className=" p-1">
                <Link>Settings</Link>
              </li>
              <li className=" p-1">
                <button onClick={handleLogout} type="button">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

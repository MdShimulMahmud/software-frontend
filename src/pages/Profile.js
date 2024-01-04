import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserPostsDetails from "../components/Profile/UserPostsDetails";

const Profile = () => {
  const { isLoading, isError, error, isLoggedIn, user, isRegistered } =
    useSelector((state) => state.auth);

  function formatTimestamp(timestamp) {
    return format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
  }

  const profile = user?.profile;

  const name = user?.name;
  const email = user?.email;
  const role = user?.role;
  const posts = user?.posts;
  const book = user?.book;

  const image = user?.profile?.images[0];
  const address = user?.profile?.address;
  const phone = user?.profile?.phone;
  const createdAt = user?.profile?.createdAt;

  return (
    <div className="flex flex-row  w-[100%] h-screen bg-slate-400 pt-1">
      <div className="w-1/2 p-10 mr-1 bg-white justify-center items-center">
        <div className="flex flex-col">
          <div className="w-full rounded-full flex justify-center ">
            <img
              className="w-[80vh] h-[50vh]"
              alt="Tailwind CSS Navbar component"
              src={
                image ||
                "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
            />
          </div>
          <div className="w-full px-12 bg-white justify-center items-center">
            <p className="py-3 pl-3 bg-slate-300 rounded-sm">
              <span className="font-semibold">Name: </span>
              {name || "Not provided"}
            </p>
            <p className="py-2 pl-3 bg-slate-300 rounded-sm">
              <span className="font-semibold">Email:</span>
              {email || "Not provided"}
            </p>
            <p className="py-2 pl-3 bg-slate-300 rounded-sm">
              <span className="font-semibold">Role:</span>
              {role || "Not provided"}
            </p>
            <p className="py-2 pl-3 bg-slate-300 rounded-sm">
              <span className="font-semibold">Address:</span>
              {address || "Not provided"}
            </p>
            <p className="py-2 pl-3 bg-slate-300 rounded-sm">
              <span className="font-semibold">Phone:</span>
              {phone || "Not provided"}
            </p>
            {createdAt && (
              <div className="mt-6 text-sm text-gray-500">
                <p>Profile Created: {formatTimestamp(createdAt)}</p>
              </div>
            )}
            {!profile && (
              <div>
                <button className=" p-2 min-w-full rounded-lg bg-blue-700">
                  <Link to="/profile/create">Update Profile</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-1/2 p-10 bg-white justify-center items-center">
        {role === "ADMIN" && (
          <div>
            <h1>Your Posted Property Lists: </h1>
            {<UserPostsDetails posts={posts} />}
          </div>
        )}
        {role === "BUYER" && (
          <div>
            <h1>Your Posted Property Lists: </h1>
            {<UserPostsDetails posts={book} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

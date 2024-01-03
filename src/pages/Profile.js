import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";
import axiosInstance from "../utils/axios";

const Profile = () => {
  function formatTimestamp(timestamp) {
    return format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
  }

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`${api}/profile`);
        setProfile(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {profile ? (
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">User Profile</h1>
            {/* Add an edit button or options for the user to edit their profile */}
            {/* Example: <button className="text-blue-500">Edit</button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* User Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Information</h2>
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {profile.user.name || "Not provided"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {profile.user.email || "Not provided"}
              </p>
              <p>
                <span className="font-semibold">Role:</span>{" "}
                {profile.user.role || "Not provided"}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {profile.address || "Not provided"}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {profile.phone || "Not provided"}
              </p>
            </div>
            {/* Profile Image */}
            <div className="flex justify-center items-center">
              <img
                src={profile.image}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>
          {/* Display additional profile details or actions here */}
          {/* Example: Profile created/updated dates, buttons for specific actions, etc. */}
          <div className="mt-6 text-sm text-gray-500">
            <p>Profile Created: {formatTimestamp(profile.createdAt)}</p>
            <p>Last Updated: {formatTimestamp(profile.updatedAt)}</p>
          </div>
          <div>
            <button className="my-2 p-2 min-w-full rounded-lg bg-blue-700">
              <Link to="/profile/edit">Update Your Profile</Link>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button className="my-2 p-2 min-w-full rounded-lg bg-blue-700">
            <Link to="/profile/create">Create Your Profile</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;

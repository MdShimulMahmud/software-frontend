import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";
import axiosInstance from "../../utils/axios";

async function fetchPosts(postId) {
  try {
    const response = await axiosInstance.get(`${api}/posts/${postId}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

const PostDescription = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const { postId } = useParams();
  console.log(postId);

  useEffect(() => {
    fetchPosts(postId).then((data) => {
      setPost(data);
    });
  }, [postId]);

  return (
    <div className="h-screen">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Seat Capacity:</strong> {post.seatCapacity}
              </p>
              <p>
                <strong>Price:</strong> {post.price}
              </p>
              <p>
                <strong>Type:</strong> {post.type}
              </p>
              <p>
                <strong>Available:</strong> {post.availabe ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <p>
                <strong>Contact:</strong> {post.contact}
              </p>
              <p>
                <strong>Details:</strong> {post.details}
              </p>
              <p>
                <strong>Location:</strong> {post.location}
              </p>
              <p>
                <strong>Coordinates:</strong> {post.coordinates}
              </p>
            </div>
          </div>
          {post.photos && post.photos.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Photos:</h3>
              <div className="flex flex-wrap">
                {post.photos.map((photo, index) => (
                  <div key={index} className="w-1/3 p-2">
                    <img
                      src={photo}
                      alt={`PhotoNo ${index + 1}`}
                      className="rounded-md w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex m-1 pt-3">
          <button
            className="py-2 bg-blue-600 w-full rounded-btn hover:bg-blue-800 cursor-pointer"
            type="button"
          >
            <Link to={`/posts/${postId}/edit`}>Book</Link>
          </button>
          <button
            className="py-2 bg-red-600 w-full rounded-btn hover:bg-blue-800 cursor-pointer"
            type="button"
          >
            <Link to={`/posts/${postId}/delete`}>Delete</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDescription;

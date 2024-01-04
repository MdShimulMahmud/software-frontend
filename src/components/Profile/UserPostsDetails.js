import React from "react";
import { Link } from "react-router-dom";
import PostItem from "../Post/PostItem";

const UserPostsDetails = ({ posts }) => {
  return (
    <div className="flex md:justify-start md:items-start justify-center items-center flex-wrap">
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} className="m-4" key={post.id}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};

export default UserPostsDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostItem from "../components/Post/PostItem";

async function fetchPosts() {
  try {
    const response = await axios.get(`http://localhost:5000/posts/`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Posts = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPostsData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex md:justify-start md:items-start justify-center items-center flex-wrap">
      {postsData.map((post) => (
        <Link to={`/posts/${post.id}`} className="m-4" key={post.id}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;

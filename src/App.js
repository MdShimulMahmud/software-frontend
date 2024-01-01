import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./components/Post/AddPost";
import PostDescription from "./components/Post/PostDescription";
import Registration from "./components/Register/Register";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/create" element={<AddPost />} />
        <Route path="/posts/:postId" element={<PostDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

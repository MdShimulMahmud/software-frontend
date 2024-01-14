import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import AddPost from "./components/Post/AddPost";
import BookPost from "./components/Post/BookPost";
import DeletePost from "./components/Post/DeletePost";
import PostDescription from "./components/Post/PostDescription";
import CreateProfile from "./components/Profile/CreateProfile";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Registration from "./components/Register/Register";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <PublicRoutes>
              <Home />
            </PublicRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Registration />
            </PublicRoutes>
          }
        />
        <Route
          path="/posts"
          element={
            <PublicRoutes>
              <Posts />
            </PublicRoutes>
          }
        />
        <Route
          path="/posts/create"
          element={
            <PrivateRoutes>
              <AddPost />
            </PrivateRoutes>
          }
        />
        <Route path="/posts/:postId" element={<PostDescription />} />
        <Route
          path="/posts/:postId/delete"
          element={
            <PrivateRoutes>
              <DeletePost />
            </PrivateRoutes>
          }
        />
        <Route
          path="/books/:postId"
          element={
            <PrivateRoutes>
              <BookPost />
            </PrivateRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route
          path="/profile/create"
          element={
            <PrivateRoutes>
              <CreateProfile />
            </PrivateRoutes>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <PrivateRoutes>
              <UpdateProfile />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

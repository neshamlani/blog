import React from "react";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import NewBlog from "./pages/NewBlog";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:blogId" element={<Blog />} />
      <Route path="/:state" element={<NewBlog />} />
      <Route path="/:state/:blogId" element={<NewBlog />} />
      <Route path="/all" element={<HomePage />} />
    </Routes>
  );
};

export default App;

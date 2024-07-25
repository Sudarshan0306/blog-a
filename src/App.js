import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";
function App() {
  return (
    <Router>
      <div className="container mx-4">
        <Routes>
          <Route exact path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPostDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

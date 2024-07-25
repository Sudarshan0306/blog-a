import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_KEY = "6e55d84bf70f4a88876a61a982a711df";

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=blog&apiKey=${API_KEY}&page=${page}`
      )
      .then((response) => setPosts(response.data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-2">
            <Link
              to={`/post/${index}`}
              state={{ post }}
              className="text-blue-500 hover:underline"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Previous Page
          </button>
        )}
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default BlogPostList;

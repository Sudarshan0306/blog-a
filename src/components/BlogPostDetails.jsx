import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const BlogPostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state;

  return (
    <div>
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-200 rounded mb-4">Back</button>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{new Date(post.publishedAt).toLocaleDateString()}</p>
      <p className="mb-4">{post.content}</p>
      {post.urlToImage && <img src={post.urlToImage} alt={post.title} className="w-full" />}
    </div>
  );
};

export default BlogPostDetails;

import React, { createContext, useState } from 'react';
import { blogs as initialBlogs } from '../assets/data'; // Your initial blogs data

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleLike = (id) => {
    setBlogs(blogs.map(blog =>
      blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
    ));
  };

  const handleDislike = (id) => {
    setBlogs(blogs.map(blog =>
      blog.id === id ? { ...blog, dislikes: blog.dislikes + 1 } : blog
    ));
  };

  return (
    <BlogContext.Provider value={{ blogs, handleLike, handleDislike }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;

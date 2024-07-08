import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext'; // Import the BlogContext
import BlogCard from './BlogCard';
import './Bloglist.css'; // Import the CSS file
import Footer from '../components/Footer';

const Bloglist = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <>
    <div className="bloglist-container">
      <h1 className="bloglist-heading">Blog List</h1>
      <div className="bloglist">
        {blogs.map((blog, index) => (
          <div key={blog.id} className={`bloglist-item `}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
    <hr />
    <Footer/>
    </>
  );
};

export default Bloglist;

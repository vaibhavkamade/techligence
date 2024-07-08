import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ blog }) => {
  return (
    <div style={{ 
      display: 'flex',
      border: '1px solid #ccc', 
      marginBottom: '20px', 
      padding: '15px', 
      width: '100%', 
      borderRadius: '5px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Image on the left */}
      <div style={{ marginRight: '15px', flex: '0 0 100px' }}>
        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
      </div>

      {/* Content section */}
      <div style={{ flex: '1' }}>
        <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>{blog.title}</h3>
          <p>{blog.content.slice(0, 100)}...</p>
        </Link>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
          {/* Like icon and count */}
          <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'black', marginRight: '5px' }} />
            <span>{blog.likes}</span>
          </div>
          {/* Dislike icon and count */}
          <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faThumbsDown} style={{ color: 'black', marginRight: '5px' }} />
            <span>{blog.dislikes}</span>
          </div>
          {/* Comment icon and count */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faComment} style={{ color: 'black', marginRight: '5px' }} />
            <span>{blog.comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faComment,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Blogs.css"; // Import the CSS file
import Footer from '../components/Footer'

const Blogs = () => {
  const { id } = useParams();
  const { blogs, handleLike, handleDislike } = useContext(BlogContext);
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  const [likes, setLikes] = useState(blog ? blog.likes : 0);
  const [dislikes, setDislikes] = useState(blog ? blog.dislikes : 0);
  const [comments, setComments] = useState(blog ? blog.comments : []);
  const [newComment, setNewComment] = useState("");
  const [editComment, setEditComment] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [likeAction, setLikeAction] = useState(
    blog && (blog.liked ? "liked" : blog.disliked ? "disliked" : null)
  ); // State to track like action

  const handleLikeClick = () => {
    if (likeAction === "liked") {
      // Unlike if already liked
      handleDislike(blog.id);
      setLikes(likes - 1);
      setLikeAction(null);
    } else {
      // Like if not liked or disliked
      handleLike(blog.id);
      setLikes(likes + 1);
      if (likeAction === "disliked") {
        // If previously disliked, reduce dislike count
        setDislikes(dislikes - 1);
      }
      setLikeAction("liked");
    }
  };

  const handleDislikeClick = () => {
    if (likeAction === "disliked") {
      // Undislike if already disliked
      handleLike(blog.id);
      setDislikes(dislikes - 1);
      setLikeAction(null);
    } else {
      // Dislike if not liked or disliked
      handleDislike(blog.id);
      setDislikes(dislikes + 1);
      if (likeAction === "liked") {
        // If previously liked, reduce like count
        setLikes(likes - 1);
      }
      setLikeAction("disliked");
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleEditCommentSubmit = (e) => {
    e.preventDefault();
    if (editedComment.trim() !== "") {
      const updatedComments = comments.map((comment, index) =>
        index === editComment ? editedComment : comment
      );
      setComments(updatedComments);
      setEditComment(null);
      setEditedComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <>
    <div>
    <div className="blogs-container">
      {blog ? (
        <>
        
          <h1 className="blog-title">{blog.title}</h1>
         
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
          )}
          <p className="blog-content">
            {blog.content}
          </p>
          <div className="blog-summary">
            {/* Summary Section */}
            <b>Summary: </b>
            <p>{blog.summary}</p>
          </div>
          <div className="blog-reactions">
            <div className="reaction-item" onClick={handleLikeClick}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className={`reaction-icon ${likeAction === "liked" ? "liked" : ""}`}
              />
              <span className={`reaction-count ${likeAction === "liked" ? "liked" : ""}`}>
                {likes}
              </span>
            </div>
            <div className="reaction-item" onClick={handleDislikeClick}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                className={`reaction-icon ${likeAction === "disliked" ? "disliked" : ""}`}
              />
              <span className={`reaction-count ${likeAction === "disliked" ? "disliked" : ""}`}>
                {dislikes}
              </span>
            </div>
            <div className="comment-count">
              <FontAwesomeIcon icon={faComment} className="comment-icon" />
              {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
            </div>
          </div>

          <div className="blog-comments">
            <h2 className="comment-heading">Comments</h2>
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="comment-input"
              />
              <button type="submit" className="comment-button">
                Comment
              </button>
            </form>
            <ul className="comment-list">
              {comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  {editComment === index ? (
                    <form onSubmit={handleEditCommentSubmit}>
                      <input
                        type="text"
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                        className="edit-comment-input"
                      />
                      <button type="submit" className="edit-comment-button">
                        Save
                      </button>
                    </form>
                  ) : (
                    <>
                      <span>{comment}</span>
                      <div>
                        <button
                          onClick={() => {
                            setEditComment(index);
                            setEditedComment(comment);
                          }}
                          className="edit-comment-btn"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button
                          onClick={() => handleDeleteComment(index)}
                          className="delete-comment-btn"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="blog-not-found">
          Blog not found. <Link to="/">Back to Home</Link>
        </div>
      )}
      <Link to="/blogs" className="back-to-blogs-link">
        &lt; Back to Blogs
      </Link>
    </div>
    </div>
    <hr />
    <Footer/>
    </>
  );
};

export default Blogs;

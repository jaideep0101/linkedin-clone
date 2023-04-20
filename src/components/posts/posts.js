import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./posts.css";
import "../feed/feed.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Chat from "@mui/icons-material/Chat";
import Repeat from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

function Posts({ post }) {
  const [posts, setPosts] = useState([]);
  const [isComment, setIsComment] = useState(false);
  const [likes, setLikes] = useState(0);
  const [commentInputText, setCommentInput] = useState("");
  const [comment, setComment] = useState([]);
  const [liked, setLiked] = useState(false);
  const designations = []

  function handleLikes() {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  }

  function handleClick(e) {
    e.preventDefault();
    setComment((prevValue) => [...prevValue, commentInputText]);
    setCommentInput("");
  }

  return post.map((postList, index) => (
    <div key={index} className="post_container">
      <div className="post_header">
        <Avatar src={postList.photo} />
        <div className="post_info">
          <h2>{postList.userName}</h2>
          <p>{postList.email}</p>
          <p>
            followers <span>{Math.floor(Math.random()* (5000 - 500 + 1) + 500)}</span>
            {post.followers}
          </p>
        </div>
      </div>
      <div className="post_body">
        <p>{postList.message}</p>
      </div>
      {/* <img className="post_image" src={post.image} alt="img" /> */}
      <div className="like_container">
        <p>{postList.likes} likes</p>
      </div>
      <div className="post_buttons">
        <div onClick={handleLikes} className="post_buttons_box">
          <ThumbUpOffAltIcon />
          <p>Like</p>
        </div>
        <div
          className="post_buttons_box"
          onClick={() => setIsComment(!isComment)}
        >
          <Chat />
          <p>Comment</p>
        </div>
        <div className="post_buttons_box">
          <Repeat />
          <p>Repost</p>
        </div>
        <div className="post_buttons_box">
          <SendIcon />
          <p>Send</p>
        </div>
      </div>
      <div className="comment_container">
        {isComment ? (
          <div className="feed_container comment_section">
            <div className="comment_box">
              <Avatar className="feed_avatar" />
              <div className="feed_input">
                <form>
                  <input
                    value={commentInputText}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Start a post"
                    type="text"
                  ></input>
                  <button onClick={handleClick} type="submit">
                    send
                  </button>
                </form>
              </div>
            </div>
            {postList.comments.map((comment, index) => {
              return (
                <div key={index} className="all_comments">
                  <p>{comment}</p>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ));
}

export default Posts;

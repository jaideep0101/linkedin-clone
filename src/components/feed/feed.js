import React, { useState } from "react";
import "./feed.css";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import {
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import Posts from "../posts/posts";
import { db } from "../../firebase";

const options = [
  {
    id: 2,
    photo: SmartDisplayIcon,
    title: "Video",
    color: "#5f9b41",
  },
  {
    id: 3,
    photo: EventNoteIcon,
    title: "Event",
    color: "#c37d16",
  },
  {
    id: 4,
    photo: NewspaperIcon,
    title: "Write article",
    color: "#e16745",
  },
];
function Feed({ userName, email, photo, uid, posts, fetchData }) {
  const [post, setPost] = useState({
    followers: "",
    photo: "",
    userName: "",
    email: "",
    message: "",
    likes: 0,
    comments: [],
  });
  const [emptyPost, setEmptyPost] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setPost({
      message: value,
    });
  }

  async function handleClick(e) {
    e.preventDefault();
    const follow = Math.floor(Math.random() * (5000 - 500 + 1) + 500);
    if (post.message) {
      try {
        const docRef = await addDoc(collection(db, "post"), {
          followers: follow,
          userName,
          email,
          photo,
          message: post.message,
          likes: 0,
          comments: [],
        });
        console.log("Document written with ID: ", docRef.id);
        const updateTimestamp = await updateDoc(docRef, {
          timestamp: serverTimestamp(),
        });
        console.log(updateTimestamp);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setEmptyPost("Post should have some content");
    }
    setPost({ message: "" });
  }

  return (
    <div className="feed">
      {emptyPost && <p className="empty_post_error">{emptyPost}</p>}
      <div className="feed_option">
        <div className="feed_container">
          <Avatar className="feed_avatar" src={photo} />
          <div className="feed_input">
            <form>
              <input
                value={post.message}
                name="message"
                onChange={handleChange}
                placeholder="Start a post"
                type="text"
              ></input>
              <button onClick={handleClick} type="submit">
                send
              </button>
            </form>
          </div>
        </div>
        <div className="feed_options">
          <label htmlFor="image-upload">
            <div className="feed_gallery">
              <ImageIcon style={{ color: "#0a66c2" }} />
              <p>Photo</p>
              {/* <input name="image" value={post.image}  id="image-upload" type="file" accept="image/*" onChange={handleImage}/> */}
            </div>
          </label>
          {options.map((option) => {
            return (
              <div key={option.id} className="feed_gallery">
                <option.photo style={{ color: option.color }} />
                <p>{option.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Posts post={posts} />
    </div>
  );
}

export default Feed;

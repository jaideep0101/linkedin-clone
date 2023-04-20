import React, { useState } from "react";
import "./feed.css";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { addDoc, collection,updateDoc, serverTimestamp} from "firebase/firestore";
import Posts from "../posts/posts";
import CustomPost from "./customPost";
import { db } from "../../firebase";
// import {collection, getDocs } from "firebase/firestore";

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
function Feed({ userName, email, photo, uid, posts,fetchData }) {
  console.log(posts);
  const [post, setPost] = useState({
    photo: "",
    userName: "",
    email: "",
    message: "",
    likes: 0,
    comments: [],
  });
  // const [posts, setPosts] = useState([]);
  // async function fetchDate() {
  //   const querySnapshot = await getDocs(collection(db, "post"));
  //   querySnapshot.forEach((doc) => {
  //     setPosts((prev) => [...prev, doc.data()]);
  //   });
  // }

  // useEffect(() => {
  //   fetchDate();
  // }, [posts]);

  function handleChange(e) {
    const {value}= e.target;
    setPost({
      message:value,
    });
  }

  async function handleClick(e) {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "post"), {
        userName,
        email,
        photo,
        message:post.message,
        likes: 0,
        comments: [],
      });
      console.log("Document written with ID: ", docRef.id);
      const updateTimestamp = await updateDoc(docRef, {
        timestamp: serverTimestamp()
    });
    console.log(updateTimestamp);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setPost({ message: "" });
    fetchData();
  }

  return (
    <div className="feed">
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

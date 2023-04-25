import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./posts.css";
import "../feed/feed.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Chat from "@mui/icons-material/Chat";
import Repeat from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import {
  doc,
  updateDoc,
  collection,
  getDoc,
  arrayUnion,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { UserContext } from "../../context/context";
import { useContext } from "react";

function Posts({sendPost}) {

  const [posts, setPosts] = useState([]);
  const [isComment, setIsComment] = useState(null);
  const [commentInputText, setCommentInput] = useState("");
  

   const [isLoggedIn, setLoggedIn, user]  = useContext(UserContext);
   console.log(user);

 useEffect(() => {
    const q = query(collection(db, "post"), orderBy("timestamp", "desc"));
    console.log(q);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedPosts = [];
      snapshot.forEach((doc) => {
        fetchedPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(fetchedPosts);
    });

    return () => {
      unsubscribe();
    };
  },[],[handleClick],[sendPost]);

  // console.log(posts);


  async function handleLikes(id,likesToAdd) {
    // console.log(id);
    const postRef = doc(db, "post",id);
    const postSnapshot = await getDoc(postRef);
    const post = postSnapshot.data();
    const currentLikes = post.likes;
    const newLikes = currentLikes+likesToAdd;
// const newLikes = post.likes === 0 ? 1 : 0;
  await updateDoc(postRef,{likes:newLikes});
}

function handleComment(id){
  if(isComment === null){
  setIsComment(id);
}else{
  setIsComment(null);
}
}

  async function handleClick(e) {
    e.preventDefault();
    console.log(isComment);
    const postRef = doc(db, "post",isComment);
    const postSnapshot = await getDoc(postRef);
    const post = postSnapshot.data();
    const newComment = {comment:commentInputText}
  await updateDoc(postRef, { comments: arrayUnion(newComment) });
    console.log(post);
    setCommentInput("");
  }

  return posts.map(postList => (
    <div key={postList.id} className="post_container">
      <div className="post_header">
        <Avatar src={postList.photo} />
        <div className="post_info">
          <h2>{postList.userName}</h2>
          {postList.followers ?  <p>followers <span>{postList.followers}</span></p>:<p>followers <span>435</span></p>}
         
        </div>
      </div>
      <div className="post_body">
        <p>{postList.message}</p>
      </div>
    
      <div className="like_container">
        <p>{postList.likes} likes</p>
      </div>
      <div className="post_buttons">
        <div onClick={() =>handleLikes(postList.id,1)} className="post_buttons_box">
          <ThumbUpOffAltIcon />
          <p>Like</p>
        </div>
        <div
          className="post_buttons_box"
          onClick={() => handleComment(postList.id)}
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
        {isComment === postList.id ? (
          <div className="feed_container comment_section">
            <div className="comment_box">
              <Avatar className="comment_avatar" src={user.photoURL} />
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
                  <p>{comment.comment}</p>
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

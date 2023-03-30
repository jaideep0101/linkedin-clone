import React,{useState} from 'react';
import { Avatar } from '@mui/material';
import  "../posts/posts.css";
import "../feed/feed.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Chat from '@mui/icons-material/Chat';
import Repeat from "@mui/icons-material/Repeat";
import SendIcon from '@mui/icons-material/Send';

function CustomPost({id,message}){
    const [isComment,setIsComment] = useState(false);
    const [like,setLikes] = useState(0);
    const [liked,setLiked] = useState(false);
    const [commentInputText,setCommentInput] = useState("");
  const [comments,setComments] = useState([]);

 
function handleLike(){
  if(liked){
    setLikes(like-1);
  }else{
  setLikes(like+1);
  }
  setLiked(!liked);
}
function handleComment(e){
setCommentInput(e.target.value);
}

function handleComments(e){
  e.preventDefault();
  setComments((prevValue)=> [...prevValue,commentInputText])
  setCommentInput("");
   }

 console.log(comments)
return (
        <div key={id} className="post_container" >
        <div className="post_header">
          <Avatar src="https://media.licdn.com/dms/image/C5603AQFNdvG7yaThfA/profile-displayphoto-shrink_400_400/0/1618297126920?e=1685577600&v=beta&t=Gc6e1IYK6dkCzkhS60BG1wvCqn2kGb64WIuSutyhre8"/>
           <div className="post_info">
       <h2>Jaideep Singh Thakur</h2>
       <p>Web Developer</p>
       <p>followers 123</p>
           </div>
        </div>
        <div className="post_body">
     <p>{message}</p>
        </div>
         <img className="post_image"  src="https://img.freepik.com/free-photo/people-taking-selfie-together-registration-day_23-2149096795.jpg"  alt="img" />  
        <div className="like_container">
          <p>{like} likes</p>
        </div>
        <div className='post_buttons'>
        <div onClick={handleLike} className="post_buttons_box">
        <ThumbUpOffAltIcon/>
        <p>Like</p>
        </div>
        <div onClick={()=>setIsComment(!isComment)} className="post_buttons_box" >
        <Chat/>
        <p>Comment</p>
        </div>
        <div className="post_buttons_box">
        <Repeat/>
        <p>Repost</p>
        </div>
        <div className="post_buttons_box">
        <SendIcon/>
        <p>Send</p>
        </div>
        </div>
        <div className="comment_container">
        {isComment && (
        <div  className="feed_container comment_section">
        <div className='comment_box'>
        <Avatar className="feed_avatar"/>
        <div className='feed_input'>
         <form>
          <input value={commentInputText} onChange={handleComment}  placeholder="Start a post" type="text"></input>
          <button onClick={handleComments} type='submit'>send</button>
         </form>
        </div>
        </div>
   {comments.map((comment)=>{
   return  <div className='all_comments'>
          <p>{comment}</p>
        </div>
        })}
      
    
        </div>
        )}
        </div>
     </div>
)
    
}

export default CustomPost;
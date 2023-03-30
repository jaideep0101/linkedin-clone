import React, { useState} from 'react';
import "./feed.css";
import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NewspaperIcon from '@mui/icons-material/Newspaper';
 import Posts from '../posts/posts';
import CustomPost from './customPost';

const options =[{
  id:2,
  photo:  SmartDisplayIcon,
  title: "Video",
  color:"#5f9b41",
},
{
  id:3,
  photo:  EventNoteIcon,
  title: "Event",
  color:"#c37d16",
},
{
  id:4,
  photo:  NewspaperIcon,
  title: "Write article",
  color:"#e16745",
},

]
function Feed() {

  const [posts,setPosts]=useState([]);
  const [post,setPost] = useState({
    name:"Jaideep Singh thakur",
    description:"Web developer",
    message:"",
    photoUrl:"https://media.licdn.com/dms/image/C5603AQFNdvG7yaThfA/profile-displayphoto-shrink_400_400/0/1618297126920?e=1685577600&v=beta&t=Gc6e1IYK6dkCzkhS60BG1wvCqn2kGb64WIuSutyhre8",
    image:"https://img.freepik.com/free-photo/people-taking-selfie-together-registration-day_23-2149096795.jpg",
    likes:0,
    comments:[]
  })

  function handleChange(e){
    const {name,value}=e.target;
    setPost({...post,[name]:value})
  }

  

function handleClick(e){
e.preventDefault();
setPosts(prevValue=>{
  return ([...prevValue,post]);
})

setPost({message:""})
}

  return (
    <div className='feed'>
    <div className='feed_option'>
     <div className="feed_container">
    <Avatar className="feed_avatar" src="https://media.licdn.com/dms/image/C5603AQFNdvG7yaThfA/profile-displayphoto-shrink_400_400/0/1618297126920?e=1685577600&v=beta&t=Gc6e1IYK6dkCzkhS60BG1wvCqn2kGb64WIuSutyhre8"/>
    <div className='feed_input'>
     <form>
      <input value={post.message} name="message" onChange={handleChange}  placeholder="Start a post" type="text"></input>
      <button onClick={handleClick} type='submit'>send</button>
     </form>
    </div>
    </div>
    <div className='feed_options'>
     <label htmlFor="image-upload">
     <div className='feed_gallery'>
           <ImageIcon style={{color:"#0a66c2"}}/>
           <p>Photo</p>
           {/* <input name="image" value={post.image}  id="image-upload" type="file" accept="image/*" onChange={handleImage}/> */}
        </div>
        </label>
        {options.map((option)=>{
            return (
            <div key={option.id} className='feed_gallery'>
           <option.photo style={{color:option.color}}/>
            <p>{option.title}</p>
        </div>
            )
        })}    
    </div>
    </div>
    {posts.map((post,index)=>{
      console.log(post)
      return <CustomPost key={index}
      id={index}
       name={post.name}
        description={post.description}
        message={post.message}
        photoUrl={post.photoUrl}
        image={post.image}
        likes={post.likes}
        comments={post.comments}
       />
    })}
   
    <Posts/>
    </div>
    

  )
}

export default Feed
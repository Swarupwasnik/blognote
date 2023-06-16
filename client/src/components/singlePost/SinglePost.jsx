import { Link, useLocation } from "react-router-dom";
import "../singlePost/SinglePost.css";
import { useEffect,useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {Context} from "../../context/Context";

export default function SinglePost() {
  const location=useLocation();
  const path =location.pathname.split("/")[2];
 const [post,setPost]=useState({});

    const[desc,setDesc]=useState("");
    const[updateMode,setUpdateMode]=useState(false);
    const[title,setTitle]=useState("");
  const {user}=useContext(Context);



    const PF="http://localhost:5000/images/"

 useEffect(()=>{
  const getPost=async()=>{
    const res= await axios.get("/posts/" + path);
    console.log(res.data);
     setPost(res.data)
     setTitle(res.data.title);
     setDesc(res.data.desc);
  };
  getPost()
 },[path]);

const handleDelete=async()=>{
try{
  await axios.delete(`/posts/${post._id}` ,{data:{username:user.usernam}});
  window.location.replace("/");
} catch(err){}
};
 const handleUpdate =async()=>{
try{
  await axios.delete(`/post/${post._id}`,{
    date:{username:user.username,title,desc},
  });
  // window.location.reload();
setUpdateMode(false);
}catch(err){}
 }

console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
     
  {
    post.photo &&  (

  <img
    className="postImg" 
    src={PF + post.photo}
    alt=""
  />)}{
    updateMode ? <input type="text" value={title} className="singlePostTitleInput"  onChange={(e)=>setTitle(e.target.value)}/>:(
      <h1 className="singlePostTitle">
          
       
      {post.title}
      {post.username===user?.username &&(
      
      
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
              <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
               )}
          </h1>
    )
  }
       
      
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} className="link">
            </Link>
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
               {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (<textarea value={desc} className="singlePostDescInput" onChange={(e)=>setDesc(e.target.value)}/>):(
    <p className="singlePostDesc">
    {post.desc}
            </p>
        )}

        {updateMode && (
    <button className="singlePostButton" onClick={handleUpdate}>
      Update
    </button>)}
      </div>
    </div>
  );
}
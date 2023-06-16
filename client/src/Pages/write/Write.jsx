import React, { useContext } from "react";
import "../write/Write.css";
import { useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";


export default function Write({post}) {
 const PF="http://localhost:5000/images/"

  const[title,setTitle]=useState("");
  const[desc,setdesc]=useState("");
  const[file,setFile]=useState(null);

  const {user}= useContext(Context);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.uername,
      title:
      desc,
      file
    };
    if(file){
      const data=FormData();
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo=filename;

      try{
        await axios.post("/upload",data)

      }catch(err){

      }
    }
   const res= await axios.post("/posts",newPost);
   window.location.replace("/post/"+res.data._id);
  }


  return (
    <div className="write">
{
  file && (
    <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
  )
}

      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }}  onChange={e=>setFile(e.target.files[0])}/>
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=>desc(e.target.value)}

          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
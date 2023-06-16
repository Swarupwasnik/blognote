import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";
import Sidebar from "../../components/Siderbar/Sidebar";
import { useEffect,useState } from "react";
import axios from "axios";
// import setupProxy from "../../setupProxy";

export default function Homepage() {
  const [posts, setPost] = useState([]);
  const {search}=useLocation();

 
  function fetchData() {
    return fetch("/posts"+search)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data)=>setPost(data))
  }
useEffect(()=>{
  fetchData()
},[search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}

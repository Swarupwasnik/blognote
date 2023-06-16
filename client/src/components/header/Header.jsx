import React from "react";
import "../header/Header.css";
import {useState,useEffect} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import bird from "../../images/bird.jpg";
import water from "../../images/water.jpg";
import "react-lazy-load-image-component/"
export default function Header() {





  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Read & Write Your</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
     <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" className="headerImg" alt="image"/>
  
    </div>
  );
}

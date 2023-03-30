import React from 'react';
import './App.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/feed';
import Widgets from "../widgets/widgets";

function Main() {

  return (
    <div className="App"> 
    <Header/>
    <div className='App_body'>
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </div>
   </div>
  )
}

export default Main;
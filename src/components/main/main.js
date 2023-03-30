import React, { useContext, useEffect } from 'react';
import './App.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/feed';
import Widgets from "../widgets/widgets";
import authContext from '../../authContext';
import { useNavigate } from 'react-router-dom';

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
import React from 'react';
import "./topbar.css"
import Person from "@mui/icons-material/Person";
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/Notifications';
import Chat from '@mui/icons-material/Chat';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span><div className="logo">Campus connect</div></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input 
          placeholder="search for friends,post or video" 
          className="searchInput" 
          />
          </div>
          </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span><div className="topbarIconBadge">1</div></span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span><div className="topbarIconBadge">5</div></span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span><div className="topbarIconBadge">1</div></span>
          </div>
        </div>
        <img src="/assets/person/img1.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  )
}

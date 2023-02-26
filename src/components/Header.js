import React from "react";
import "../styles/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

import { Link } from "react-router-dom";
function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      {/* icon + logo */}
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="Youtube logo"
          />
        </Link>
      </div>
      {/* search bar */}
      <div className="header__center">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <Link to={`/search/${inputSearch}`} className="header__InputButton">
          <SearchIcon className="header__InputButton" />
        </Link>
      </div>
      {/* icons */}
      <div className="header__right">
        <VideoCallIcon className="header__right__icons" />
        <AppsIcon className="header__right__icons" />
        <NotificationsIcon className="header__right__icons" />
        <Avatar
          className="header__right__icons"
          src="https://scontent.flhe24-1.fna.fbcdn.net/v/t39.30808-6/299918859_108846528609442_9055812762408296362_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE1EQ2z-5vHPwkAInvXIp05awKmdhpimkxrAqZ2GmKaTPabdcpDCyAtsTo_OUsQHj2bdlbxYgOlcwBTJBZRYVYM&_nc_ohc=GLs0k4tWaO0AX--VJUK&_nc_oc=AQnQpi5SRYZdG5wdMHFhEkoJdulTB0pujIpwvroZayV4dYqoSiSkPP458Kstfndvzug&_nc_ht=scontent.flhe24-1.fna&oh=00_AfDXeNsgODPuz1bOGQ6yU3B6hC624_g6oqCkcGlNd2oRMA&oe=64006D4C"
        />
      </div>
    </div>
  );
}

export default Header;

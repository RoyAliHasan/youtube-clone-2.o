import React from "react";
import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
    </div>
  );
}

export default SearchPage;

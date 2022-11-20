import React from "react";
import "./SearchItem.css";
import search from "../../../assets/icons/search.png";

const SearchItem = ({placeholder}) => {
  return (
      <div className="search-by">
        <img src={search} alt="search by name" />
        <input className="name-input" placeholder={placeholder} />
      </div>
  );
};

export default SearchItem;

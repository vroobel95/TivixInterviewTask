import "./SearchBar.scss";

import React from "react";
import Button from "./Button";
import searchIcon from "@iconify/icons-fe/search";

interface SearchBarProps {
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const handleButtonClick = async () => {
    props.onClick();
  };

  return (
    <div className="search-bar">
      <div className="search-items">
        <input className="search-input" />
        <Button
          className="search"
          onClick={handleButtonClick}
          text="Szukaj"
          icon={searchIcon}
          variant="search"
        />
      </div>
    </div>
  );
};

export default SearchBar;

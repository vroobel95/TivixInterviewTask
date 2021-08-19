import "./SearchBar.scss";

import React from "react";
import Button from "./Button";
import searchIcon from "@iconify/icons-fe/search";
import { useState } from "react";

interface SearchBarProps {
  onClick: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [value, setValue] = useState<string>('');
  const handleButtonClick = async () => {
    props.onClick(value);
  };

  return (
    <div className="search-bar">
      <div className="search-items">
        <input className="search-input" value={value} onChange={(x) => setValue(x.target.value)}/>
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

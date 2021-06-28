import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function SearchBlock() {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      return;
    }
    setSearchInput("");
    history.push(`/?search=${searchInput}`);
  };

  const handleEnter = (e) => {
    if (searchInput.trim() === "") {
      return;
    }
    if (e.keyCode === 13) {
      setSearchInput("");
      history.push(`/coctails/?search=${searchInput}`);
    }
  };
  return (
    <div className="search-box">
      <input
        className="search-input"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
        onKeyDown={handleEnter}
      />
      <div className="search-btn" onClick={handleSearch}>
        <BsSearch />
      </div>
    </div>
  );
}

export default SearchBlock;

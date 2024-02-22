import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import "./SearchBox.css"
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    
    console.log('Searching for:', searchTerm);
  };

  return (

  
    <div className="search-box">
       
      <input
        type="text"
        class="search-bar" 
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button  className="search-btn"onClick={handleSearch}>
      <IoSearch size={20} />
      </button>
    </div>
    
  );
}

export default SearchBox;
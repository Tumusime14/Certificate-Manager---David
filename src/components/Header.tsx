import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="headers">
        <label htmlFor="language-select">Language: </label>
        <select id="language-select">
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
      </div>
  );
};

export default Header;
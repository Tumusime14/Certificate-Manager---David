import React from 'react';
import { useLanguage } from './context/LanguageContext';
import '../styles/Header.css';

const Header: React.FC = () => {
  const { translations, setLanguage } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="headers">
      <label htmlFor="language-select">{translations['language_label']} </label>
      <select id="language-select" onChange={handleLanguageChange}>
        <option value="en">{translations['english_option']}</option>
        <option value="de">{translations['german_option']}</option>
      </select>
    </div>
  );
};

export default Header;

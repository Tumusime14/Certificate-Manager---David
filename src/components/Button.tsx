import React from 'react';
import "../styles/Table.css";
import { useLanguage } from './context/LanguageContext';

interface TableProps {
  onNewCertificate?: () => void;
  data?: any[];
}

const Button: React.FC<TableProps> = ({ onNewCertificate }) => {
  const { translations } = useLanguage();

  return (
    <div>
      <button className="new-certificate-button" onClick={onNewCertificate}>
       {translations['newCertificate']}
      </button>

    </div>
  );
};

export default Button;

import React from 'react';
import "../styles/Table.css";


interface TableProps {
  onNewCertificate?: () => void;
  data?: any[];
}

const Button: React.FC<TableProps> = ({ onNewCertificate }) => {
  return (
    <div>
      <button className="new-certificate-button" onClick={onNewCertificate}>
        New Certificate
      </button>

    </div>
  );
};

export default Button;

import React from 'react';
import "./Table.css";
import "./NewCertificate.css";
import GearIcon from './icons/gear';

interface TableProps {
  onNewCertificate: () => void;
  data: any[];
  onEdit: (certificate: any) => void;
}

const Table: React.FC<TableProps> = ({ onNewCertificate, data, onEdit }) => {
  return (
    <div>
      <button className="new-certificate-button" onClick={onNewCertificate}>
        New Certificate
      </button>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Supplier</td>
            <td>Certificate type</td>
            <td>Valid from</td>
            <td>Valid to</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="dropdown">
                  <GearIcon />
                  <div className="dropdown-content">
                    <span onClick={() => onEdit(row)}>Edit</span>
                    <span>Delete</span>
                  </div>
                </div>
              </td>
              <td>{row.supplier}</td>
              <td>{row.certificateType}</td>
              <td>{row.validFrom}</td>
              <td>{row.validTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

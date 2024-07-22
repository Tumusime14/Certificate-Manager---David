import React from 'react';
import "./Table.css";
import GearIcon from "./icons/gear"; 
import TrashIcon from "./icons/trash";

interface TableProps {
  onNewCertificate: () => void;
  onEdit: (certificate: any) => void;
  onDelete: (id: number) => void;
  data: any[];
}

const Table: React.FC<TableProps> = ({ onNewCertificate, onEdit, onDelete, data }) => {
  return (
    <div>
      <button className="new-certificate-button" onClick={onNewCertificate}>
        New Certificate
      </button>
      <table>
        <thead>
          <tr>
            <td>Supplier</td>
            <td>Certificate type</td>
            <td>Valid from</td>
            <td>Valid to</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.supplier}</td>
              <td>{row.certificateType}</td>
              <td>{row.validFrom}</td>
              <td>{row.validTo}</td>
              <td>
                <button onClick={() => onEdit(row)}><GearIcon /></button>
                <button onClick={() => onDelete(index)}><TrashIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

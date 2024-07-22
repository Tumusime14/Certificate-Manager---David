import React from 'react';
import "../styles/Table.css";


interface TableProps {
  onNewCertificate?: () => void;
  data?: any[];
}

const Table: React.FC<TableProps> = ({ onNewCertificate }) => {
  return (
    <div>
      <button className="new-certificate-button" onClick={onNewCertificate}>
        New Certificate
      </button>
      {/* <table>
        <thead>
          <tr>
            <td>SupplierLKJHGF</td>
            <td>Certificate type</td>
            <td>Valid from</td>
            <td>Valid to</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>{row.supplier}</td>
              <td>{row.certificateType}</td>
              <td>{row.validFrom}</td>
              <td>{row.validTo}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Table;
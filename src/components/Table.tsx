import React, { FC, useState } from 'react';
import '../styles/Table.css';

interface TableProps {
  headers: string[];
  data: { [key: string]: any }[];
  onRowClick?: (rowData: { [key: string]: any }) => void;
  renderRowActions?: (rowData: { [key: string]: any }) => React.ReactNode;
  selectableRows?: boolean;
}

const Table: FC<TableProps> = ({
  headers,
  data,
  onRowClick,
  renderRowActions,
  selectableRows = true,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleRowClick = (index: number, row: { [key: string]: any }) => {
    setSelectedIndex(index);
    if (onRowClick) {
      onRowClick(row);
    }
  };

  return (
    <table className="supplier-table">
      <thead>
        <tr>
          <th></th>
          {selectableRows && renderRowActions && <th></th>}
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          {renderRowActions && <span className="hidden-column"></span>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick(index, row)}
          >
            {renderRowActions && <td>{renderRowActions(row)}</td>}
            {selectableRows && (
              <td>
                <input
                  type="radio"
                  name="supplier"
                  checked={selectedIndex === index}
                  onChange={() => handleRowClick(index, row)}
                />
              </td>
            )}
            {Object.entries(row).map(([key, value], i) => {
  if (key === 'id') return null;
  return <td key={i}>{isNaN(value) ? value : null}</td>;
})}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

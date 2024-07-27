import React, { useState } from 'react';
import '../styles/SupplierLookupModal.css';

interface SupplierLookupModalProps {
  onClose: () => void;
  onSelect: (supplier: string) => void;
}

const SupplierLookupModal: React.FC<SupplierLookupModalProps> = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suppliers] = useState([
    { name: 'ANDEMIS 108', index: '2', city: 'Munich' },
    { name: 'Strutgut', index: '1', city: 'Berlin' },
    { name: 'Munich', index: '3', city: 'Munich' }
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.index.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="topbar">
            <h4>Search for suppliers</h4>
          <span className="close-button" onClick={onClose}>&times;</span>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="SupplierName" className="label">Supplier name:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="SupplierIndex" className="label">Supplier index:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="City" className="label">City:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>
        <button>Search</button>
        <button>Reset</button>
        <table className="supplier-table">
          <thead>
            <tr>
              <th>Supplier Name</th>
              <th>Supplier Index</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier, index) => (
              <tr key={index} onClick={() => onSelect(supplier.name)}>
                <td>{supplier.name}</td>
                <td>{supplier.index}</td>
                <td>{supplier.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='selectBtn'>Select</button>
        <button className='cancelBtn'>Cancel</button>
      </div>
    </div>
  );
};

export default SupplierLookupModal;

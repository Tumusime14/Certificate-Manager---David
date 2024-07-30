import React, { FC, useState } from 'react';
import '../styles/SupplierLookupModal.css';
import SupplierTable from './Table';

interface Props {
  onClose: () => void;
  onSelect: (name: string) => void;
}

const SupplierLookupModal: FC<Props> = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [indexSearchTerm, setIndexSearchTerm] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState<string | null>(null);

  const suppliers = [
    { name: 'ANDEMIS GmbH', index: '1', city: 'Stuttgart' },
    { name: 'Strutgut', index: '2', city: 'Berlin' },
    { name: 'Munich', index: '3', city: 'Munich' },
  ];

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleIndexSearchChange = (e: any) => {
    setIndexSearchTerm(e.target.value);
  };

  const handleCitySearchChange = (e: any) => {
    setCitySearchTerm(e.target.value);
  };

  const filteredSuppliers = suppliers.filter(supplier => {
    return (
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      supplier.index.toLowerCase().includes(indexSearchTerm.toLowerCase()) &&
      supplier.city.toLowerCase().includes(citySearchTerm.toLowerCase())
    );
  });

  const handleSelect = () => {
    if (selectedSupplier) {
      onSelect(selectedSupplier);
      onClose();
    } else {
      alert('Please select a supplier.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="topbar">
          <h3>Search for suppliers</h3>
          <span className="close-button" onClick={onClose}>&times;</span>
        </div>
        <div className="search-criteria">
          <h4>Search criteria</h4>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="searchTerm">Supplier name</label>
              <input
                type="text"
                id="searchTerm"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
                placeholder="Enter supplier name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="searchIndex">Index</label>
              <input
                type="text"
                id="searchIndex"
                value={indexSearchTerm}
                onChange={handleIndexSearchChange}
                className="search-input"
                placeholder="Enter index"
              />
            </div>
            <div className="input-group">
              <label htmlFor="searchCity">City</label>
              <input
                type="text"
                id="searchCity"
                value={citySearchTerm}
                onChange={handleCitySearchChange}
                className="search-input"
                placeholder="Enter city"
              />
            </div>
          </div>
          <div className="button-row">
            <button className="search-btn">Search</button>
            <button className="reset-btn" onClick={() => { setSearchTerm(''); setIndexSearchTerm(''); setCitySearchTerm(''); }}>Reset</button>
          </div>
        </div>
        <div className="supplier-list">
          <h4>Supplier list</h4>
          <SupplierTable
            headers={['Supplier name', 'Supplier index', 'City']}
            data={filteredSuppliers}
            onRowClick={(row) => setSelectedSupplier(row.name)}
          />
          <div className="button-row">
            <button className="select-btn" onClick={handleSelect}>Select</button>
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierLookupModal;

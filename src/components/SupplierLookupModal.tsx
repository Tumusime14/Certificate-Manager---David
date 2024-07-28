import React, { FC, useState } from 'react';
import '../styles/SupplierLookupModal.css';

interface Props{
  onClose:()=>void;
  onSelect:(name:string)=>void;
}
const SupplierLookupModal:FC<Props> = ({ onClose, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [indexSearchTerm, setIndexSearchTerm] = useState('');
  const [citySearchTerm, setCitySearchTerm] = useState('');

  const suppliers = [
    { name: 'ANDEMIS GmbH', index: '1', city: 'Stuttgart' },
    { name: 'Strutgut', index: '2', city: 'Berlin' },
    { name: 'Munich', index: '3', city: 'Munich' },
  ];

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleIndexSearchChange = (e:any) => {
    setIndexSearchTerm(e.target.value);
  };

  const handleCitySearchChange = (e:any) => {
    setCitySearchTerm(e.target.value);
  };

  const filteredSuppliers = suppliers.filter(supplier => {
    return (
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      supplier.index.toLowerCase().includes(indexSearchTerm.toLowerCase()) &&
      supplier.city.toLowerCase().includes(citySearchTerm.toLowerCase())
    );
  });

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
            <button className="reset-btn" onClick={() => {setSearchTerm(''); setIndexSearchTerm(''); setCitySearchTerm('');}}>Reset</button>
          </div>
        </div>
        <div className="supplier-list">
          <h4>Supplier list</h4>
          <table className="supplier-table">
            <thead>
              <tr>
                <th></th>
                <th>Supplier name</th>
                <th>Supplier index</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {filteredSuppliers.map((supplier, index) => (
                <tr key={index} onClick={() => onSelect(supplier.name)}>
                  <td><input type="radio" name="supplier" /></td>
                  <td>{supplier.name}</td>
                  <td>{supplier.index}</td>
                  <td>{supplier.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-row">
            <button className="select-btn" onClick={onClose}>Select</button>
            <button className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierLookupModal;

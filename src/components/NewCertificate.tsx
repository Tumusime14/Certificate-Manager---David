import React, { useState } from 'react';
import { addCertificate } from "../DB/indexedDB"
import "./NewCertificate.css";
import { useNavigate } from 'react-router';
const NewCertificate: React.FC = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    supplier: '',
    certificateType: '',
    validFrom: '',
    validTo: '',
    pdfFile: null as Blob | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        pdfFile: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.pdfFile) {
      await addCertificate({
        supplier: formData.supplier,
        certificateType: formData.certificateType,
        validFrom: formData.validFrom,
        validTo: formData.validTo,
        pdfFile: formData.pdfFile,
      });
      navigate('/certificate-list')
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      supplier: '',
      certificateType: '',
      validFrom: '',
      validTo: '',
      pdfFile: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Supplier</label>
        <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Certificate Type</label>
        <input type="text" name="certificateType" value={formData.certificateType} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Valid From</label>
        <input type="date" name="validFrom" value={formData.validFrom} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Valid To</label>
        <input type="date" name="validTo" value={formData.validTo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>PDF Document</label>
        <input type="file" name="pdfFile" onChange={handleFileChange} required />
      </div>
      <div className="form-group">
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
};

export default NewCertificate;

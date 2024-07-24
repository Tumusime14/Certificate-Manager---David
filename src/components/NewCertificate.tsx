import React, { useState, useRef } from 'react';
import { addCertificate } from "../DB/indexedDB";
import { useNavigate } from 'react-router';
import "../styles/NewCertificate.css";
import Search from '../icons/search';
import X from '../icons/x';

const NewCertificate: React.FC = () => {
  const navigate = useNavigate();
  const validFromRef = useRef<HTMLInputElement>(null);
  const validToRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    supplier: '',
    certificateType: '',
    validFrom: '',
    validTo: '',
    pdfFile: null as Blob | null,
    pdfPreview: '' as string | null,
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      
      if (fileExtension !== 'pdf') {
        setError('Please upload a valid PDF document.');
        return;
      }

      setFormData({
        ...formData,
        pdfFile: file,
        pdfPreview: URL.createObjectURL(file),
      });
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pdfFile) {
      setError('Please upload a PDF document before submitting.'); 
      return;
    }

    setError(null);

    try {
      await addCertificate({
        supplier: formData.supplier,
        certificateType: formData.certificateType,
        validFrom: formData.validFrom,
        validTo: formData.validTo,
        pdfFile: formData.pdfFile,
      });
      navigate('/example1');
      handleReset();
    } catch (error) {
      setError('An error occurred while saving the certificate.'); 
    }
  };

  const handleReset = () => {
    setFormData({
      supplier: '',
      certificateType: '',
      validFrom: '',
      validTo: '',
      pdfFile: null,
      pdfPreview: null,
    });
    setError(null); 
  };

  return (
    <form onSubmit={handleSubmit} className="new-certificate-form">
      <div className="form-left">
        <div className="form-group">
          <label>Supplier</label>
          <div className="input-container">
            <input 
              type="text" 
              name="supplier" 
              value={formData.supplier} 
              onChange={handleChange} 
              required 
              className="input-field" 
            />
            <Search className="icon" />
            <X className="icon" onClick={() => setFormData({ ...formData, supplier: '' })} />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="certificateType">Certificate Type</label>
          <select name="certificateType" value={formData.certificateType} onChange={handleChanges} required>
            <option value="">Select your option</option>
            <option value="Permission of printing">Permission of printing</option>
            <option value="OHSAS 18001">OHSAS 18001</option>
            <option value="Attendance">Attendance</option>
            <option value="Completion">Completion</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Valid from</label>
          <input
            type="text" required
            placeholder="Click to select date"
            ref={validFromRef}
            name="validFrom"
            value={formData.validFrom}
            onChange={handleChange}
            onFocus={() => { validFromRef.current!.type = "date"; }}
          />
        </div>
        
        <div className="form-group">
          <label>Valid to</label>
          <input
            type="text"
            placeholder="Click to select date"
            ref={validToRef}
            name="validTo"
            value={formData.validTo}
            onChange={handleChange}
            onFocus={() => { validToRef.current!.type = "date"; }}
            required
          />
        </div>
        
        {error && <p style={{ color: 'red' }}>{error}</p>} 
      </div>
      
      <div className="form-right">
        <div className="form-group">
          <input type="file" name="pdfFile" accept="application/pdf" onChange={handleFileChange} required style={{ display: 'none' }} />
          <button type="button" className="upload-button" onClick={() => {
            const fileInput = document.querySelector('input[name="pdfFile"]') as HTMLInputElement;
            fileInput?.click();
          }}>Upload</button>
        </div>
        <div className="pdf-preview-container">
          {formData.pdfPreview ? (
            <iframe src={formData.pdfPreview} title="PDF Preview" className="pdf-preview" />
          ) : (
            <div className="pdf-placeholder"></div>
          )}
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </form>
  );
};

export default NewCertificate;

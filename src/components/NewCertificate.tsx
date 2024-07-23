import React, { useState, useEffect } from 'react';
import './NewCertificate.css';
import Search from "./icons/search";
import X from "./icons/x";

interface NewCertificateProps {
  onSave: (data: any) => void;
  existingData?: any;
}

const NewCertificate: React.FC<NewCertificateProps> = ({ onSave, existingData }) => {
  const [pdfPreview, setPdfPreview] = useState<string | ArrayBuffer | null>(null);
  const [formData, setFormData] = useState({
    supplier: '',
    certificateType: '',
    validFrom: '',
    validTo: '',
    pdfFile: null as File | null,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrorMessage('Please select a valid PDF file.');
        return;
      }
      setErrorMessage(null);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData(prev => ({ ...prev, pdfFile: file }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.supplier || !formData.certificateType || !formData.validFrom || !formData.validTo || !formData.pdfFile) {
      setErrorMessage('Please fill out all required fields and upload a PDF.');
      return;
    }
    setErrorMessage(null);
    onSave(formData);
  };

  const handleReset = () => {
    setFormData({
      supplier: '',
      certificateType: '',
      validFrom: '',
      validTo: '',
      pdfFile: null,
    });
    setPdfPreview(null);
    setErrorMessage(null);
  };

  return (
    <div className="new-certificate">
      <div className="form-container">
        <div className="left-side">
          <div className="form-group">
            <label htmlFor="supplier">Supplier</label>
            <div className="input-with-icons">
              <input
                type="text"
                id="supplier"
                name="supplier"
                value={formData.supplier}
                onChange={handleInputChange}
              />
              <div className="icon">
                <Search />
                <X />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="certificateType">Certificate Type</label>
            <select
              id="certificateType"
              name="certificateType"
              value={formData.certificateType}
              onChange={handleInputChange}
            >
              <option value="">Select your option</option>
              <option value="Completion">Completion</option>
              <option value="Participation">Participation</option>
              <option value="Attendance">Attendance</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="validFrom">Valid From</label>
            <input
              type="date"
              id="validFrom"
              name="validFrom"
              value={formData.validFrom}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="validTo">Valid To</label>
            <input
              type="date"
              id="validTo"
              name="validTo"
              value={formData.validTo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="right-side">
          <div className="pdf-upload">
            <label htmlFor="pdfFile" className="upload-button">Upload</label>
            <input
              type="file"
              id="pdfFile"
              name="pdfFile"
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            {pdfPreview && (
              <iframe src={pdfPreview as string} title="PDF Preview" className="pdf-preview"></iframe>
            )}
          </div>
        </div>
      </div>
      <div className="form-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default NewCertificate;

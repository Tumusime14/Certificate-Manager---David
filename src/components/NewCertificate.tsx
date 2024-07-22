import React, { useState } from "react";
import './NewCertificate.css';
const NewCertificate: React.FC = () => {
    const [supplier, setSupplier] = useState<string>('');
    const [certificateType, setCertificateType] = useState<string>('');
    const [validFrom, setValidFrom] = useState<striing>('');
    const [validTo, setValidTo] = useState<string>('');
    const [pdf, setPdf] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]){
            setPdf(e.target.files[0]);
        }
    };

    const handleFileChange = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ supplier, certificateType, validFrom, validTo, pdf});

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ supplier, certificateType, validFrom, validTo, pdf});
    };

    const handleReset = () => {
        setSupplier('');
        setCertificateType('');
        setValidFrom('');
        setValidTo('');
        setPdf(null);
    };

    return (
        <div>
            <h2>New Certificate</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Supplier: </label>
                    <input 
                    type="text" 
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}/>
                </div>
                <div>
                    <label>Certificate Type:</label>
                    <select value={certificateType}
                        onChange={(e) => setCertificateType(e.target.value)}>
                        <option value="">Select type</option>
                        <option value="Permission of Printing">Permission of Printing</option>
                        <option value="OHSAS 18001">OHSAS 18001</option>                
                    </select>                
                </div>
                <div>
                <label>Valid To:</label>
                <input
                    type="date"
                    value={validTo}
                    onChange={(e) => setValidTo(e.target.value)} />
        </div>
        <div>
            <label>PDF Document:</label>
            <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}/>
            {pdf && <div>Preview: {pdf.name}</div>}
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleReset}>Reset</button>
           </form>
        </div>
    );

};

export default NewCertificate;
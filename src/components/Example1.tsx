import React, { useEffect, useState } from 'react';
import { getCertificates } from "../DB/indexedDB";
import Table from './Table';

import "../styles/Table.css";
import { useNavigate } from 'react-router';

const CertificateList: React.FC = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCertificates();
      setCertificates(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Table data={[]} onNewCertificate={() => navigate('/new-certificate')} />
      <table>
        <thead>
          <tr>
            <td>Supplier</td>
            <td>Certificate Type</td>
            <td>Valid From</td>
            <td>Valid To</td>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td>{certificate.supplier}</td>
              <td>{certificate.certificateType}</td>
              <td>{certificate.validFrom}</td>
              <td>{certificate.validTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateList;
import React, { useEffect, useState } from 'react';
import { getCertificates } from "../DB/indexedDB";
import Table from './Table';
import GearIcon from '../icons/gear';

import "../styles/Table.css";
import { useNavigate } from 'react-router';

const Example1: React.FC = () => {
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState<any[]>([]);


  useEffect(() => {
    async function fetchData() {
      const data = await getCertificates();
      setCertificates(data);
    }

    fetchData();
  }, []);

  const handleEditNavigate =(id:string) => {
    navigate(`/edit-certificate/${id}`)
  }
console.log(certificates)
  return (
    <div>
      <Table data={[]} onNewCertificate={() => navigate('/new-certificate')} />
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Supplier</td>
            <td>Certificate Type</td>
            <td>Valid From</td>
            <td>Valid To</td>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td><GearIcon onEdit={()=>handleEditNavigate(certificate.id)} onDelete={function (): void {
                throw new Error('Function not implemented.');
              } }/></td>
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

export default Example1;
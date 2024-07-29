import React, { useEffect, useState } from 'react';
import { getCertificates, deleteCertificate } from '../DB/indexedDB';
import Table from './Table';
import GearIcon from '../icons/gear';
import '../styles/Table.css';
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

  const handleEditNavigate = (id: string) => {
    navigate(`/edit-certificate/${id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteCertificate(id);
        setCertificates((prevCertificates) =>
          prevCertificates.filter((certificate) => certificate.id !== id)
        );
      } catch (error) {
        console.error('Failed to delete certificate', error);
      }
    }
  };

  return (
    <div>
      <Table data={[]} onNewCertificate={() => navigate('/new-certificate')} />
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Supplier </td>
            <td>Name</td>
            <td>City</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td>
                <GearIcon
                  onEdit={() => handleEditNavigate(certificate.id)}
                  onDelete={() => handleDelete(certificate.id)}
                />
              </td>
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

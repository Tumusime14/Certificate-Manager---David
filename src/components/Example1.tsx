import React, { useEffect, useState } from 'react';
import { getCertificates, deleteCertificate } from '../DB/indexedDB';
import Button from './Button';
import GearIcon from '../icons/gear';
import Table from './Table';
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
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      try {
        await deleteCertificate(id);
        setCertificates((prevCertificates) =>
          prevCertificates.filter((certificate) => certificate.id !== id)
        );
      } catch (error) {
        console.error('Failed to delete certificate', error);
      }
    }
    navigate('/example1');
  };

  const handleRowClick = (rowData: { [key: string]: any }) => {
    handleEditNavigate(rowData.id);
  };

  const renderRowActions = (row: { [key: string]: any }) => {
    return(
    <GearIcon
      onEdit={() => handleEditNavigate(row.id)}
      onDelete={() => handleDelete(row.id)}
    />
  )};

  const headers = ['Supplier', 'Certificate Type', 'Valid From', 'Valid To'];

  const tableData = certificates.map((certificate) => ({
    supplier: certificate.supplier,
    certificateType: certificate.certificateType,
    validFrom: certificate.validFrom,
    validTo: certificate.validTo,
    id: certificate.id,
  }));

  return (
    <div>
      <Button data={[]} onNewCertificate={() => navigate('/new-certificate')} />
      <Table
        headers={headers}
        data={tableData}
        onRowClick={handleRowClick}
        renderRowActions={renderRowActions}
        selectableRows={false}
      />
    </div>
  );
};

export default Example1;

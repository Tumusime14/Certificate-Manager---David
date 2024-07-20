import React from 'react';

const Table = () => {
  const data = [
    {
      supplier: 'DAIMLER AG, 1, Berlin',
      certificateType: 'Permission of Printing',
      validFrom: '21.08.2017',
      validTo: '26.08.2017'
    },
    {
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'OHSAS 18001',
      validFrom: '18.08.2017',
      validTo: '24.08.2017'
    },
    {
      supplier: 'ANDEMIS GmbH, 1, Stuttgart',
      certificateType: 'Permission of Printing',
      validFrom: '04.10.2017',
      validTo: '10.10.2017'
    }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Supplier</th>
            <th>Certificate type</th>
            <th>Valid from</th>
            <th>Valid to</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.supplier}</td>
              <td>{row.certificateType}</td>
              <td>{row.validFrom}</td>
              <td>{row.validTo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
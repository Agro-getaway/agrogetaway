// src/PoultryPage.js
import React from 'react';

const poultryFarmsData = [
  {
    id: 1,
    name: 'Uganda Poultry Farm 1',
    location: 'Kampala, Uganda',
    imageUrl: 'https://placekitten.com/200/150', // Replace with actual farm image URL
  },
  {
    id: 2,
    name: 'Uganda Poultry Farm 2',
    location: 'Jinja, Uganda',
    imageUrl: 'https://placekitten.com/201/150', // Replace with actual farm image URL
  },
  // Add more poultry farm data as needed
];

const PoultryPage = () => {
  return (
    <div>
      <h1>Poultry Farms in Uganda</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {poultryFarmsData.map((farm) => (
          <div key={farm.id} style={{ margin: '10px', textAlign: 'center' }}>
            <img
              src={farm.imageUrl}
              alt={farm.name}
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
            />
            <h3>{farm.name}</h3>
            <p>{farm.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoultryPage;

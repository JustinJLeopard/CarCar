import React, { useState, useEffect } from 'react';

const ModelList = () => {
  const [vehicleModels, setVehicleModels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8100/api/models/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVehicleModels(data.models);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Models</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {vehicleModels.map(model => (
          <div key={model.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            <h3>{model.name}</h3>
            <p>{model.manufacturer.name}</p>
            <img src={model.picture_url} alt={model.name} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelList;

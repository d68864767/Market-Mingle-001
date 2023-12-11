import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/analytics');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return (
    <div>
      <h2>Analytics</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;

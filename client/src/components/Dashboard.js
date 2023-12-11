import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('/api/campaigns');
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            <h3>{campaign.name}</h3>
            <p>{campaign.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

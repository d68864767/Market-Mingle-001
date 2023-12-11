const express = require('express');
const app = express();
const campaignController = require('./controllers/CampaignController');
const emailService = require('./controllers/EmailService');

app.use(express.json());

// API routes
app.post('/api/campaigns', campaignController.createCampaign);

// Example code snippet for sending a targeted email campaign
const campaign = {
    subject: 'Special Offer Just for You!',
    body: 'Dear customer, ...',
    recipients: ['customer1@example.com', 'customer2@example.com'],
};

emailService.sendCampaign(campaign);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

import React, { useState } from 'react';
import axios from 'axios';

function Campaign() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleRecipientsChange = (event) => {
    setRecipients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const campaign = {
      subject,
      body,
      recipients: recipients.split(',').map((recipient) => recipient.trim()),
    };

    try {
      await axios.post('/api/campaigns', campaign);
      alert('Campaign sent successfully!');
      setSubject('');
      setBody('');
      setRecipients('');
    } catch (error) {
      console.error('Error sending campaign:', error);
      alert('Failed to send campaign. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          />
        </div>
        <div>
          <label htmlFor="recipients">Recipients:</label>
          <input
            type="text"
            id="recipients"
            value={recipients}
            onChange={handleRecipientsChange}
            required
          />
          <p>Separate multiple recipients with commas.</p>
        </div>
        <button type="submit">Send Campaign</button>
      </form>
    </div>
  );
}

export default Campaign;

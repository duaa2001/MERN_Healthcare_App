// Confirmation.js
import React from 'react';

const Confirmation = ({ formData }) => {
  return (
    <div>
      <h2>Congratulations!</h2>
      <p>You have joined the group successfully.</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Confirmation;

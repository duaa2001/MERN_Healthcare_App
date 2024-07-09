//This component works with server.js (backend)

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Resources = () => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
     axios.get('http://localhost:5001/api/glossary') 
    // This is just to test with backend but external API could directly be used here.
      .then(response => {
        setTerms(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching glossary terms:', error);
      });
  }, []);


  return (
    <div className="resources">
      <h2>Healthcare Glossary</h2>
      <ul>
        {terms.map(term => (
          <li key={term.title}>
            <h3>{term.title}</h3>
            <p>{term.content}</p>
            {term.url && <a href={term.url}>Click to read more</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;




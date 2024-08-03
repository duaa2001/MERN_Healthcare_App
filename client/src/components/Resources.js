//This component works with server.js (backend)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getBaseUrl } from "../environments/baseurl";

const Resources = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Get the glossary 
  useEffect(() => {
    axios.get(`${getBaseUrl()}/api/glossary`) //from backend
      .then(response => {
        setTerms(response.data.glossary); // Access the glossary array directly
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching glossary terms:', error);
        setError(error);
        setLoading(false);
      });
  }, []); // empty array arg ensures data is fetched only once 

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching glossary terms: {error.message}</p>;
  }
 
  // Print the glossary
  return (
    <div className="resources">
      <h2>Healthcare Glossary</h2>
      <ul>
        {terms.map(term => (
          <li key={term.title}>
            <h3>{term.title}</h3>
            <p>{term.content}</p>
            {term.url && <a href={`https://www.healthcare.gov${term.url}`} >Click to read more</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;







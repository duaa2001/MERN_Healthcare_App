// Time crunch 

// Either add some local community groups (search online), maybe use API (add to services folder)
// or create groups on site, like new mom, diabetes, menopause etc etc.
// or in addition, create a way for users to join groups
// Groups.js
// Groups.js
// src/components/Groups.js
import React from 'react';
// import './Groups.css'; // Import the Groups specific styling

const Groups = ({ groups }) => {
  return (
    <div className="groups-container">
      <h2>Community Groups</h2>
      <p>Welcome to the community groups. Join a group that interests you and start engaging with others!</p>
      
      <div className="groups-list">
        {groups.map(group => (
          <div key={group.section} className="group-card">
            <div className="group-info">
              <h4>{group.name}</h4>
              <p>{group.description}</p>
              <a href={group.link} target="_blank" rel="noopener noreferrer">
                <button>View Group</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;

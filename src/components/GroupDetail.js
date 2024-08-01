import React from 'react';
import { useParams } from 'react-router-dom';

const GroupDetail = ({ groups }) => {
  const { section } = useParams();
  const group = groups.find(g => g.section === parseInt(section));

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div>
      <h2>{group.name}</h2>
      <p>{group.description}</p>
      <a href={group.link} target="_blank" rel="noopener noreferrer">
        <button>Join Group</button>
      </a>
    </div>
  );
};

export default GroupDetail;

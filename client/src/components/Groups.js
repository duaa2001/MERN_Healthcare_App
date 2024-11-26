import React from 'react';

const Groups = () => {
  const groupData = [
    { section: 1, name: 'Breast Cancer Support', description: 'A group for sharing and supporting each other through breast cancer.', link: 'https://www.nationalbreastcancer.org/nbcf-programs/breast-cancer-support-group/' },
    { section: 2, name: 'New Moms', description: 'A group for new moms to share their experiences and get support.', link: 'https://themotherhoodcenter.com/support-groups/' },
    { section: 3, name: 'Mental Health Awareness', description: 'A group to discuss mental health topics and support each other.', link: 'https://www.inspire.com/groups/mental-health-america/' },
    { section: 4, name: 'Fitness and Wellness', description: 'A group for sharing fitness tips and wellness practices.', link: 'https://princetonfitnessandwellness.com/wellness-programs/' },
    { section: 5, name: 'Nutrition and Diet', description: 'A group to share nutrition tips and healthy diet plans.', link: 'https://www.gonaturalbalance.com/nutrition-support-groups/' },
    { section: 6, name: 'Diabetes Support', description: 'A group for those managing diabetes to share tips and support each other.', link: 'https://diabetessisters.org/event-category/meetup/' },
    { section: 7, name: 'Menopause Support', description: 'A group for sharing experiences and supporting each other through menopause.', link: 'https://nationalmenopausefoundation.org/community/' },
  ];

  return (

    // possibly add a search component here (for scalability)
    <div className="groups-container">
      <h2>Community Groups</h2>
      <p>Welcome to the community groups. Join a group that interests you and start engaging with others!</p>
      
      <div className="groups-list">
        {groupData.map(group => (
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


import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="relative group overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-center">
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-sm mt-2">{member.role}</p>
        </div>
      </div>
    </div>
  );
};

TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(TeamMemberCard);

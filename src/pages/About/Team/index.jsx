import React, { useRef, useEffect } from 'react';
import teamMembers from './teamMembers';
import ResponsiveMainContainer from '../../../components/ResponsiveMainContainer';
import teamMembersAnimations from './animations';
import TeamMemberCard from './TeamMemberCard';

function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      teamMembersAnimations(containerRef);
    }
  }, []);

  return (
    <section className="my-16 px-8">
      <ResponsiveMainContainer>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map(member => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </ResponsiveMainContainer>
    </section>
  );
}

export default Team;

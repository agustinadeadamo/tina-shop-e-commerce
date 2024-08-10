import React from 'react';
import NavMenuItems from '../NavMenuItems';

function DesktopNav() {
  return (
    <nav className="hidden md:flex space-x-4" aria-label="Desktop navigation">
      <NavMenuItems />
    </nav>
  );
}

export default DesktopNav;

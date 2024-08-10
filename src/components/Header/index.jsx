import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import CartButton from './CartButton';
import AuthButton from './AuthButton';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Header() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <header className="bg-white relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={onClickLogo}
          className="flex items-center"
          aria-label="Go to home"
        >
          <img src={Logo} alt="Logo" className="h-12 md:h-14 mr-2" />
        </button>
        <DesktopNav />
        <MobileNav />
        <div className="hidden md:flex items-center">
          <CartButton />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}

export default Header;

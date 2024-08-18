import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PrimaryButton } from '../../../components/Buttons';

const RedirectToShop = () => {
  const navigate = useNavigate();

  const onClickGoToShop = () => {
    navigate('/store');
  };

  return (
    <>
      <motion.p
        className="font-montserrat mt-10 text-sm"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        You can take a look at our shop while we prepare this section perfectly
        for you
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        className="pt-5"
      >
        <PrimaryButton onClick={onClickGoToShop}>Go to shop</PrimaryButton>
      </motion.div>
    </>
  );
};

export default RedirectToShop;

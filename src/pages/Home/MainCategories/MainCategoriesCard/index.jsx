import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import titleVariants from './animationVariants';

const DiscountProductCard = ({
  title,
  image,
  alt,
  className,
  buttonCopy,
  url,
}) => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(url);
  };

  return (
    <div
      className={`relative overflow-hidden ${className} promotions-container`}
    >
      <motion.img
        src={image}
        alt={alt}
        initial={{ scale: 1.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full h-full object-cover"
        viewport={{ once: true, amount: 0.5 }}
      />
      <div className="absolute bottom-10 inset-x-0 flex justify-center text-center text-white px-5">
        <div>
          {title && (
            <motion.h3
              className="font-archivo uppercase text-3xl mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={titleVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {title}
            </motion.h3>
          )}
          <div className="mt-4">
            <motion.button
              onClick={onClickButton}
              className="min-w-[200px] font-montserrat px-3 py-3 bg-black/10 backdrop-blur-lg border border-white/50 text-white uppercase font-bold hover:bg-black/60 transition duration-300 text-[11px]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.1 }}
            >
              {buttonCopy}
            </motion.button>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

DiscountProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  buttonCopy: PropTypes.string.isRequired,
};

export default React.memo(DiscountProductCard);

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const InfoItem = ({ title, content }) => (
  <div className="flex items-center">
    <span className="text-xl font-bold mr-2">+</span>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-500">{content}</p>
    </div>
  </div>
);

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const FashionTextContent = () => (
  <motion.div
    className="lg:w-1/2"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    variants={textVariants}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="max-w-[540px] mb-10">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        WE THINK <br />
        YOU&apos;LL <span className="text-sm font-light">LIKE THESE</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Fashion is a form of self-expression and autonomy at a particular period
        and place and in a specific context, of clothing, footwear, lifestyle,
        accessories. The latest fashion news, beauty coverage, celebrity style.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <InfoItem title="Care instructions" content="Machine wash at 30°C" />
        <InfoItem title="Fabric material" content="84% cotton, 16% polyester" />
      </div>
    </div>
  </motion.div>
);

export default FashionTextContent;

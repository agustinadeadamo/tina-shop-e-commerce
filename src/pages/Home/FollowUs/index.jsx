import React from 'react';
import { motion } from 'framer-motion';
import { variants, imageVariants, imgHover } from './animation';
import images from './imagesData';

const FollowUs = () => {
  return (
    <div className="bg-white pt-10 w-full">
      <motion.div
        className="text-center mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={variants}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold uppercase">Follow us on</h2>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        variants={variants}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="bg-gray-100 p-3 rounded-full cursor-pointer">
          <span className="text-lg">@tina.shop</span>
        </div>
      </motion.div>

      <div className="flex w-full h-80 md:h-96">
        {images.map(({ id, src }) => (
          <motion.div
            key={id} // Use unique id for the key
            className="relative overflow-hidden flex-1"
            initial="initial"
            whileHover="hover"
            variants={imageVariants}
          >
            <motion.img
              src={src}
              alt={`Profile ${id}`}
              className="w-full h-full object-cover"
              whileHover={imgHover}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;

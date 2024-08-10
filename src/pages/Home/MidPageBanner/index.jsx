import React, { useRef, useEffect } from 'react';
import WomanImage from '../../../images/banner-promotion.png';
import { PrimaryButton } from '../../../components/Buttons';
import bannerAnimation from './animations';

function MidPageBanner() {
  const bannerRef = useRef(null);
  const womanRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current && womanRef.current && textRef.current) {
      bannerAnimation(bannerRef, womanRef, textRef);
    }
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative h-[550px] w-full overflow-hidden bg-gray-200 flex justify-center items-center"
    >
      <div className="mt-20 md:mt-0 max-w-[1000px] md:px-10 w-full flex flex-col md:flex-row items-center justify-center md:justify-between py-8">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <div ref={textRef}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              New Arrivals
            </h2>
            <p className="text-xl md:text-2xl">
              Save up to 40% Off on your First Order
            </p>
            <div className="w-[150px] mt-4 mx-auto md:mx-0">
              <PrimaryButton onClick={() => {}}>Shop Now</PrimaryButton>
            </div>
          </div>
        </div>
        <img
          ref={womanRef}
          src={WomanImage}
          className="w-[400px] md:w-[600px] object-contain opacity-0 transform translate-x-full relative z-50"
          alt="Chica mirando a la derecha"
          style={{ visibility: 'hidden', opacity: 0 }}
        />
      </div>
    </div>
  );
}

export default MidPageBanner;

import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WomanImage from '../../../images/happy-woman.png';
import { PrimaryButton } from '../../../components/Buttons';
import ResponsiveContainer from '../../../components/ResponsiveMainContainer';
import heroBannerAnimations from './animations';

const HeroBanner = () => {
  const navigate = useNavigate();
  const bannerRef = useRef(null);
  const womanRef = useRef(null);
  const initialTextRefs = useRef([]);

  useEffect(() => {
    if (
      bannerRef.current &&
      womanRef.current &&
      initialTextRefs.current.length > 0
    ) {
      heroBannerAnimations(bannerRef, womanRef, initialTextRefs);
    }
  }, [bannerRef, womanRef, initialTextRefs]);

  const addToRefs = (el) => {
    if (el && !initialTextRefs.current.includes(el)) {
      initialTextRefs.current.push(el);
    }
  };

  const onClickExplore = () => {
    navigate('/store');
  };

  return (
    <div className="overflow-hidden">
      <div
        ref={bannerRef}
        className="paralax bg-customGrey h-[500px] md:h-[500vpx] lg:h-[700px] flex items-start"
      >
        <ResponsiveContainer>
          <div className="relative w-full">
            <div className="flex flex-col items-center md:items-start justify-between w-full md:w-auto text-left -mt-[150px] md:mt-0">
              <div
                ref={addToRefs}
                className="absolute top-[190px] mb-[30px] left-[10px] 
                md:top-[150px] md:left-0 
                w-[225px] md:w-auto absolute bottom-0 text-gray-800"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-8xl relative z-50">
                  Where fashion
                </h2>
                <h2 className="text-5xl sm:text-6xl second-title lg:text-8xl mb-3 relative z-50">
                  meets innovation
                </h2>
                <p className="relative z-50 text-2xl mb- hidden md:block">
                  Stay ahead of the curve with our new collection.
                </p>
                <div className="w-[180px] relative z-50 mx-auto mt-6 md:mx-0 hidden md:block">
                  <PrimaryButton onClick={onClickExplore}>
                    Explore the news
                  </PrimaryButton>
                </div>
              </div>
            </div>
            <img
              ref={womanRef}
              src={WomanImage}
              className="absolute right-0 top-5 transform scale-x-[-1] md:top-[-50px] bottom-0 w-[200px] md:w-[200px] lg:w-[350px] mt-[200px] md:mt-[100px] lg:mt-[50px]"
              alt="Chica mirando a la derecha"
            />
          </div>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HeroBanner;

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../../../components/Buttons";
import { animateOnIntersection } from "../../../../utils/animations";

function DiscountProductCard({
  title,
  subtitle,
  buttonCopy,
  image,
  alt,
  className,
  animation,
  position,
  url,
}) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cardRef.current) {
      animateOnIntersection(cardRef.current, animation);
    }
  }, [animation]);

  const onClickButton = () => {
    navigate(url);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className} promotions-container`}
      style={{ visibility: "hidden" }}
    >
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      <div className={`absolute ${position} p-10 md:p-10 text-gray-900`}>
        {title && <h2 className="text-7xl md:text-6xl">{title}</h2>}
        {subtitle && (
          <p className="text-sm font-bold mb-1 text-gray-800 mb-4">
            {subtitle}
          </p>
        )}
        <div className="w-[150px]">
          <PrimaryButton onClick={onClickButton}>{buttonCopy}</PrimaryButton>
        </div>
      </div>
    </div>
  );
}

DiscountProductCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonCopy: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  animation: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default React.memo(DiscountProductCard);

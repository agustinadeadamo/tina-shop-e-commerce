import React from "react";
import PropTypes from "prop-types";
import infoCardData from "./infoCardData";
import ResponsiveContainer from "../../../components/ResponsiveMainContainer";

function InfoCard({ title, icon, copy }) {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-md p-4 md:p-8 w-full">
      <div className="flex items-center justify-center w-10 h-10 mb-4 md:mb-0 md:mr-4">
        {icon}
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-base font-bold mb-">{title}</h3>
        <p className="text-sm">{copy}</p>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  copy: PropTypes.string.isRequired,
};

function InfoCards() {
  return (
    <div className="relative py-4 px-3 bg-tertiary lg:w-[1000px]">
      <ResponsiveContainer>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          {infoCardData.map((info) => (
            <InfoCard
              key={info.id}
              title={info.title}
              icon={info.icon}
              copy={info.copy}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default InfoCards;

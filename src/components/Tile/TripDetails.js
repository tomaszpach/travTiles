import React from "react";
import { number } from "prop-types";

const TripDetails = ({ countryCount, days }) => {
  const getCountryDetail = () => {
    const countryText =
      countryCount === 1
        ? `${countryCount} Country`
        : `${countryCount} Countries`;
    const daysText = days === 1 ? `${days} Day` : `${days} Days`;
    return <span>{`${countryText}, ${daysText}`}</span>;
  };
  return <div className="trip-details">{getCountryDetail()}</div>;
};

TripDetails.propTypes = {
  countryCount: number.isRequired,
  days: number.isRequired,
};

export default TripDetails;

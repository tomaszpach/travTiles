import React from "react";
import { number, string } from "prop-types";
import { Image } from "react-image-and-background-image-fade";

const TileImage = ({ id, imageURL, tripName }) => {
  return (
    <Image
      wrapperClassName="image-wrapper"
      alt={tripName}
      src={`${imageURL}?random=${id}`}
      isResponsive
      lazyLoad
    />
  );
};

TileImage.propTypes = {
  id: number.isRequired,
  imageURL: string.isRequired,
  tripName: string.isRequired,
};

export default TileImage;

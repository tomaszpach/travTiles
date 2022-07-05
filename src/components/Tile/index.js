import React from "react";
import TileImage from "./TileImage";
import TripDetails from "./TripDetails";
import Title from "./Title";
import Stars from "./Stars";
import Price from "./Price";

import "./tile.scss";
import { number, string } from "prop-types";

const Tile = ({
  id,
  tripName,
  imageURL,
  days,
  countryCount,
  stars,
  price,
  discount,
  currency,
}) => {
  return (
    <div className="tile">
      <TileImage tripName={tripName} imageURL={imageURL} id={id} />
      <div className="content">
        <TripDetails days={days} countryCount={countryCount} />
        <Title title={tripName} />
        <Stars rating={stars} />
        <Price price={price} discount={discount} currency={currency} />
      </div>
    </div>
  );
};

Tile.propTypes = {
  id: number.isRequired,
  tripName: string.isRequired,
  imageURL: string.isRequired,
  days: number.isRequired,
  countryCount: number.isRequired,
  stars: number.isRequired,
  price: number.isRequired,
  discount: number.isRequired,
  currency: string.isRequired,
};

export default Tile;

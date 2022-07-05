import React from "react";
import {number, string} from "prop-types";

const Price = ({ price, discount, currency }) => {
    const calculateNewPrice = () => (price * (discount / 100)).toFixed(2);

    return <div className="price">
        <span className="new">From {currency}{calculateNewPrice()}</span>
        <span className="dot"/>
        <span className="old">{`${currency}${price}`}</span>
    </div>

}

Price.propTypes = {
    price: number.isRequired,
    discount: number.isRequired,
    currency: string.isRequired,
};

export default Price;
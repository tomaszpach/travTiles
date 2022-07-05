import React from "react";
import {string} from "prop-types";

const Title = ({ title }) => {
    return <div>
        <h2>{title}</h2>
    </div>

}

Title.propTypes = {
    title: string.isRequired,
};

export default Title;
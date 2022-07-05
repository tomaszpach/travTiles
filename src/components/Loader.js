import React from "react";
import { bool } from "prop-types";

import "../styles/loader.scss";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className={`loader-wrapper ${isLoading ? "loading" : "loaded"}`}>
        <div className="loader" />
      </div>
    )
  );
};

Loader.propTypes = {
  isLoading: bool,
};

Loader.defalutProps = {
  isLoading: false,
};

export default Loader;

import React from "react";
import { string } from "prop-types";

import "./header.scss";

const Header = ({ title }) => <h2 className="header">{title}</h2>;

Header.propTypes = {
  title: string.isRequired,
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import "./Square.css";

const Square = ({ value, squareAction }) => (
  <button className="square" onClick={squareAction}>
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string.isRequired,
  squareAction: PropTypes.func.isRequired,
};

export default Square;

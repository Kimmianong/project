import { React, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../css/Background.css";

function Background({ cls }) {
  return <div className={`background ${cls}`} />;
}

Background.propTypes = {
  cls: PropTypes.string.isRequired,
};

export default Background;

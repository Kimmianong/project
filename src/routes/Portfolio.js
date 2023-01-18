/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../css/component/Profile.css";
import MenuBar from "../component/MenuBar";
import Template from "../component/Template";

function Portfolio() {
  return (
    <div className="profile">
      <div className="profile_header">
        <p>PORTFOLIO</p>
      </div>
      <div className="profile_body">
        <p>포트폴리오 페이지입니당</p>
      </div>
    </div>
  );
}

export default Portfolio;

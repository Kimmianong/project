import { React, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "../css/component/Template.css";
import "../css/animation.css";
import MenuBar from "./MenuBar";

function Template({ template }) {
  return (
    <article>
      <div className={`template ${template}`}>
        <p>hello world!</p>
      </div>
    </article>
  );
}

Template.propTypes = {
  template: PropTypes.string.isRequired,
};

export default Template;

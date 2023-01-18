/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/component/MenuBar.css";
import "../css/animation.css";
import PropTypes from "prop-types";

function List({ title, menu, Mclick }) {
  const lis = [];
  for (let i = 0; i < title.length; i += 1) {
    const t = title[i];
    if (title[i] === "LOGO") {
      lis.push(
        <li key={i}>
          <p
            onClick={() => {
              Mclick("");
            }}
          >
            <img src="../imgs/logo.jpg" alt="LOGO" />
          </p>
        </li>
      );
    } else {
      lis.push(
        <li key={i}>
          <p
            onClick={() => {
              Mclick(t);
            }}
          >
            {t}
          </p>
        </li>
      );
    }
  }

  return <ul className={`MenuBar ${menu} `}>{lis}</ul>;
  //   return (
  //     <ul className="MenuBar">
  //       {title.map((t, idx) => {
  //         if (t === "LOGO") {
  //           return (
  //             <li key={idx}>
  //               <p
  //                 onClick={() => {
  //                   Mclick(t);
  //                 }}
  //               >
  //                 <img src="../imgs/logo.jpg" alt="LOGO" />
  //               </p>
  //             </li>
  //           );
  //         }
  //         return (
  //           <li key={idx}>
  //             <p
  //               onClick={() => {
  //                 Mclick(t);
  //               }}
  //             >
  //               {t}
  //             </p>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
}

function MenuBar({ menu, Mclick }) {
  const dept = ["PROFILE", "NOTICE", "LOGO", "PORTFOLIO", "DOWNLOAD"];

  return (
    <div className="MenuDiv">
      <List title={dept} menu={menu} Mclick={Mclick} />
    </div>
  );
}

MenuBar.propTypes = {
  menu: PropTypes.string.isRequired,
  Mclick: PropTypes.func.isRequired,
};

List.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  menu: PropTypes.string.isRequired,
  Mclick: PropTypes.func.isRequired,
};

export default MenuBar;

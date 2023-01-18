import { React, useEffect, useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import MenuBar from "../component/MenuBar";
import Template from "../component/Template";

function Main() {
  const navigate = useNavigate();
  const [menu, setmenu] = useState("");
  const [template, settemplate] = useState("");

  const Mclick = (v) => {
    setmenu("MenuBar-up");
    settemplate("template-up");
    setTimeout(() => {
      setmenu("MenuBar-down");
      settemplate("template-down");
      navigate(`/${v}`);
    }, 2000);
  };

  return (
    <>
      <MenuBar menu={menu} Mclick={Mclick} />
      <article>
        <div className={`template ${template}`}>
          <Outlet />
        </div>
      </article>
    </>
  );
}

export default Main;

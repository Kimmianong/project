import { useRouteError } from "react-router-dom";
import React from "react";
import "./css/error.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404 Not Found</h1>
      <br />
      <p>죄송합니다. 현재 페이지는 존재하지 않습니다.</p>
    </div>
  );
}

export default ErrorPage;

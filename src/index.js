import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Notice from "./routes/Notice";
import Portfolio from "./routes/Portfolio";
import Download from "./routes/Download";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/project",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Notice",
        element: <Notice />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Download",
        element: <Download />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

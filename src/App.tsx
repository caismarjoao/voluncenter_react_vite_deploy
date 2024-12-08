import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "~/App.css";
import Login from "~/pages/login/Login";
import Home from '~/pages/home/Home';

const router = createBrowserRouter([
  {
    path: "/voluncenter_react_vite_deploy",
    element: <Home />,
  },
  {
    path: "/voluncenter_react_vite_deploy/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

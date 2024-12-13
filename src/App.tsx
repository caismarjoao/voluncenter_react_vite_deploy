import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "~/App.css";
import Page_2 from "~/pages/page_2/Page_2";
import Home from "~/pages/home/Home";
import Login from "~/pages/login/Login";
import Pag4 from "~/pages/pag4/Pag4";
import Pag7 from "~/pages/pag7/Pag7";
import Pag6 from "~/pages/page6/Page6";

const router = createBrowserRouter([
  {
    path: "/voluncenter_react_vite_deploy/voluncenter",
    element: <Page_2/>,
  },
  {
    path: "/voluncenter_react_vite_deploy",
    element: <Home />,
  },
  {
    path: "/voluncenter_react_vite_deploy/login",
    element: <Login />,
  },
  {
    path: "/voluncenter_react_vite_deploy/campanhas",
    element: <Pag4 />,
  },
  {
    path: "/voluncenter_react_vite_deploy/perfil",
    element: <Pag7 />,
  },
  {
    path: "/voluncenter_react_vite_deploy/inscrever",
    element: <Pag6 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

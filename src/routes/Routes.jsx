import { createBrowserRouter } from "react-router-dom";
// import Sample from "../pages/non-shared/Login/Login";
import Another from "../pages/non-shared/Another/Another";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "./ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { path: "/sample", element: <Sample /> },
      { path: "/", element: <Another /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

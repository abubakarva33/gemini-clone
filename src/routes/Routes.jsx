import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Homepage from "../pages/Homepage/Homepage";
import MainLayout from "../layouts/MainLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { path: "/sample", element: <Sample /> },
      { path: "/", element: <Homepage /> },
      { path: "/:id", element: <Homepage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

import { RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";

function App() {
  // const { isLoading } = useGetUserProfileQuery(); fetch something like this //

  // useless---remove this part//
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //useless---remove this part //

  return <div>{isLoading ? <Spinner /> : <RouterProvider router={routes}></RouterProvider>}</div>;
}

export default App;

import Home from "./Pages/Home"
import NotFound from "./components/NotFound"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CountryDetail from "./Pages/CountryDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/country/:name",
      element: <CountryDetail />,
    },
    {
      path: "*", // This matches all unknown routes (404 page)
      element: <NotFound />,
    },
  ]);

  return (
    // Render the router using RouterProvider
    <RouterProvider router={router} />
  );
}
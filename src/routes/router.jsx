import { createBrowserRouter } from "react-router-dom";
import { App, ErrorPage } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

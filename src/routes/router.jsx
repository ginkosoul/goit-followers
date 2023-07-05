import { createBrowserRouter } from "react-router-dom";
import { App, ErrorPage } from "../components";
import { navigation } from "../defaults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: navigation.map(({ to, Element }) => ({
      path: to,
      element: <Element />,
      errorElement: <ErrorPage />,
    })),
  },
]);

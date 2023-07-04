import { createBrowserRouter } from "react-router-dom";
import { App, ErrorPage, UserList } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users",
        element: <UserList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
    ],
  },
]);

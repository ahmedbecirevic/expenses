import { Navigate, useRoutes } from "react-router-dom";
import Expenses from "./components/Expenses/Expenses";
import Login from "./components/Login";

import PrivateLayout from "./layouts/PrivateLayout";
import PublicLayout from "./layouts/PublicLayout";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        { path: "expenses", element: <Expenses /> },
        { path: "profile", element: <div>Profile Page</div> },
      ],
    },
    {
      path: "/sign-in",
      element: <PublicLayout />,
      children: [
        { path: "", element: <Login /> },
      ],
    },
    { path: "*", element: <Navigate to="/expenses" replace /> },
  ]);
}

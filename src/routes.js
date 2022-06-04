import { Navigate, useRoutes } from "react-router-dom";

import PrivateLayout from "./layouts/PrivateLayout";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        { path: "expenses", element: <div>Expenses</div> },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
}

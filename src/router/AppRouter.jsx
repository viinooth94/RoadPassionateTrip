import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import RoadTrips from "../pages/RoadTrips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/roadtrips",
    element: <RoadTrips />,
  },
], {
  future: {
    v7_relativeSplatPath: true
  }
});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}

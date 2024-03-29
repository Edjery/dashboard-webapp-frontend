import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AuthLayout from "./pages/auth/AuthLayout";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";
import Authenticate from "./pages/auth/Authenticate";

const router = createBrowserRouter([
  { path: "", element: <Dashboard /> },
  {
    path: "/",
    element: <AuthOutlet fallbackPath="/login" />,
    children: [{ path: "settings", element: <Settings /> }],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "auth", element: <Authenticate /> },
    ],
  },
]);

export default router;

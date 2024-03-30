import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AuthError from "./pages/auth/AuthError";
import AuthLayout from "./pages/auth/AuthLayout";
import Authenticate from "./pages/auth/Authenticate";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
      { path: "auth/error", element: <AuthError /> },
    ],
  },
]);

export default router;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import NotFound from "../pages/error";
import Signup from "../pages/sign-up";
import Login from "../pages/login";
import VerifyOtp from "../pages/verify-otp";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";

import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard";
import PrivateRoutes from "../components/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/signup", element: <Signup /> },
            { path: "/login", element: <Login /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
            { path: "/reset-password", element: <ResetPassword /> },
            { path: "/verify-otp", element: <VerifyOtp /> },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardLayout />,
                children: [
                    { path: "", element: <Dashboard /> },
                ],
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}

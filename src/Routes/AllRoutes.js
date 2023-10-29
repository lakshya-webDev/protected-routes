import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import AppLayout from "../Layouts/AppLayout";
import AuthLayout from "../Layouts/AuthLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import { AppRoutes } from "./AppRoutes";

export const AllRoutes = () => {
  const routes = [
    { path: "*", layout: AppLayout, component: NotFound },
    { path: AppRoutes.DEFAULT, layout: AuthLayout, component: Login },
    { path: AppRoutes.LOGIN, layout: AuthLayout, component: Login },
    { path: AppRoutes.REGISTER, layout: AuthLayout, component: Register },
    { path: AppRoutes.HOME, layout: AppLayout, component: Home },
    {
      path: AppRoutes.DASHBOARD,
      layout: DashboardLayout,
      component: Dashboard,
      protected: true
    },
    {
      path: AppRoutes.PROFILE,
      layout: DashboardLayout,
      component: Profile,
      protected: true
    }
  ];

  return (
    <Routes>
      {routes.map((route, index) => {
        console.log(route, "ROUTES");
        return (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
                <ProtectedRoutes isLoggedIn={false}>
                  <route.layout>
                    <route.component />
                  </route.layout>
                </ProtectedRoutes>
              ) : (
                <route.layout>
                  <route.component />
                </route.layout>
              )
            }
          />
        );
      })}
    </Routes>
  );
};

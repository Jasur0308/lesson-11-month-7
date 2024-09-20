import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import Suspense from "../utils";
import Dashboard from "./dashboard/Dashboard";

const Home = lazy(() => import('../routes/home/Home'));
const Profile = lazy(() => import('../routes/dashboard/profile/Profile'));
const Auth = lazy(() => import('../routes/auth/Auth'));
const Login = lazy(() => import('../routes/auth/login/Login'));
const SignUp = lazy(() => import('../routes/auth/sign-up/SignUp'));
const NotFound = lazy(() => import('../routes/not-found/NotFound'));
const Private = lazy(() => import('../routes/private/Private'));
const SinglePage = lazy(() => import('../routes/sigle-page/SinglePage'));
const Users = lazy(() => import('../routes/dashboard/users/Users'));

const RouteController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Suspense><Home/></Suspense>
    },
    {
        path: "/dashboard",
        element: <Suspense><Private/></Suspense>,
        children: [
            {
                path: "/dashboard",
                element: <Suspense><Dashboard/></Suspense>,
                children: [
                    {
                        path: "/dashboard/profile/",
                        element: <Suspense><Profile/></Suspense>
                    },
                    {
                        path: "/dashboard/users",
                        element: <Suspense><Users/></Suspense>
                    }
                ]
            }
        ]
    },
    {
        path: "/auth",
        element: <Suspense><Auth/></Suspense>,
        children: [
            {
                path: "/auth/login",
                element: <Suspense><Login/></Suspense>
            },
            {
                path: "/auth/signup",
                element: <Suspense><SignUp/></Suspense>
            }
        ]
    },

    {
        path:"/singlePage/:id",
        element: <Suspense><SinglePage/></Suspense>
    },
    {
        path: "*",
        element: <Suspense><NotFound/></Suspense>
    }
  ])
}

export default RouteController
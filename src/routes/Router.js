import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

// const Starter = lazy(() => import("../views/Starter.js"));
// const About = lazy(() => import("../views/About.js"));
const Login = lazy(() => import("../views/ui/Login"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Juego1 = lazy(()  => import("../views/juego1.js"));
const Juego2 = lazy(() => import("../views/juego2.js"));
const Juego3 = lazy(() => import("../views/juego3.js"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
    //   { path: "/", element: <Navigate to="/starter" /> },
    //   { path: "/starter", exact: true, element: <Starter /> },
    //   { path: "/about", exact: true, element: <About /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/game", exact: true, element: <Juego1 /> },
      { path: "/game1", exact: true, element: <Juego2 /> },
      { path: "/game2", exact: true, element: <Juego3 /> },
    ],
  },
];

export default ThemeRoutes;

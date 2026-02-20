import { createHashRouter, Navigate } from "react-router";
import Root from "./Root";
import Overview from "./pages/Overview";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Spacing from "./pages/Spacing";
import Components from "./pages/Components";
import Layout from "./pages/Layout";
import Motion from "./pages/Motion";
import Accessibility from "./pages/Accessibility";
import Tokens from "./pages/Tokens";
import PortfolioRoot from "./pages/portfolio/PortfolioRoot";
import PortfolioHome from "./pages/portfolio/Home";
import PortfolioAbout from "./pages/portfolio/About";
import PortfolioPrograms from "./pages/portfolio/Programs";
import PortfolioAdmissions from "./pages/portfolio/Admissions";
import PortfolioContact from "./pages/portfolio/Contact";
import NotFound from "./pages/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Overview },
      { path: "colors", Component: Colors },
      { path: "typography", Component: Typography },
      { path: "spacing", Component: Spacing },
      { path: "components", Component: Components },
      { path: "layout", Component: Layout },
      { path: "motion", Component: Motion },
      { path: "accessibility", Component: Accessibility },
      { path: "tokens", Component: Tokens },
      { path: "*", Component: NotFound },
    ],
  },
  { path: "/portofolio", element: <Navigate to="/portfolio" replace /> },
  { path: "/portofolio/*", element: <Navigate to="/portfolio" replace /> },
  {
    path: "/portfolio",
    Component: PortfolioRoot,
    children: [
      { index: true, Component: PortfolioHome },
      { path: "about", Component: PortfolioAbout },
      { path: "programs", Component: PortfolioPrograms },
      { path: "admissions", Component: PortfolioAdmissions },
      { path: "contact", Component: PortfolioContact },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
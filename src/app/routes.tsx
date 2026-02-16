import { createBrowserRouter } from "react-router";
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
import HomePage from "./pages/website/HomePage";
import AboutPage from "./pages/website/AboutPage";
import ProgramsPage from "./pages/website/ProgramsPage";
import AdmissionsPage from "./pages/website/AdmissionsPage";
import ContactPage from "./pages/website/ContactPage";

export const router = createBrowserRouter([
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
      { path: "website", Component: HomePage },
      { path: "website/about", Component: AboutPage },
      { path: "website/programs", Component: ProgramsPage },
      { path: "website/admissions", Component: AdmissionsPage },
      { path: "website/contact", Component: ContactPage },
    ],
  },
]);

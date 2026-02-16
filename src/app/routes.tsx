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
    ],
  },
]);

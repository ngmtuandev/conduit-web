import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
  </ThemeProvider>
);

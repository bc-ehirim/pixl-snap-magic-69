import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "./router";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The app root element is missing from index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

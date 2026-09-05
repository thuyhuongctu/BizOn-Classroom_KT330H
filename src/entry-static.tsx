// Client-only entry for the static-SPA export (GitHub Pages, no server).
// Bypasses @tanstack/react-start's SSR document rendering entirely — see
// src/routes/__root.tsx's VITE_STATIC_SPA branch and vite.config.ts's
// "static-export" mode.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "@/router";
import "./styles.css";

const router = getRouter();

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root element");

createRoot(rootEl).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

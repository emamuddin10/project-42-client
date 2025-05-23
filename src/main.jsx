import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import { router } from "./Routes/router.jsx";
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "./index.css";
import "./App.css";

import {RouterProvider} from "react-router";
import {Route} from "./Componens/Routes/Route";
import {AuthProvider} from "./Componens/ContexFile/Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);

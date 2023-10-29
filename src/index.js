import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Routes/AllRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Suspense>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);

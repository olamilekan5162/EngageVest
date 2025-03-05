import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage.jsx"
import Dashboard from "./routes/Dashboard/Dashboard.jsx";
import CampaignPage from "./routes/CampaignPage/CampaignPage.jsx"
import Referrals from "./routes/Referrals/Referrals.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "campaigns", element: <CampaignPage /> },
      { path: "referrals", element: <Referrals /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

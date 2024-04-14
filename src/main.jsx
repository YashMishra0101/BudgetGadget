import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Login from "./pages/registration/Login.jsx";
import SignUp from "./pages/registration/Signpup.jsx";
import Help from "./pages/Help.jsx";
import About from "./pages/About.jsx";
import PriceComparison from "./pages/PriceComparison.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { ProtectedRoute } from "./protectRoute/ProtectedRoute.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Reviews from "./pages/Reviews.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route
        path="home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="signup" element={<SignUp />} />
      <Route
        path="help"
        element={
          <ProtectedRoute>
            <Help />
          </ProtectedRoute>
        }
      />
      <Route
        path="about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="add-reviews"
        element={
          <ProtectedRoute>
            <Reviews />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <SingleProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="pricecomparison"
        element={
          <ProtectedRoute>
            <PriceComparison />
          </ProtectedRoute>
        }
      />
      <Route path="forgotpassword" element={<ForgotPassword />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);

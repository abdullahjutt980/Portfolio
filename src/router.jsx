import React from "react";
import { Routes, Route } from "react-router-dom";
import TasleemPortfolio from "./pages/website/landingPage/TasleemPortfolio";

const AppRouter = () => {
  return (
    <Routes>
      {/* Root route - Home Page */}
      <Route path="/" element={<TasleemPortfolio />} />
      <Route path="/portfolio" element={<TasleemPortfolio />} />

      {/* Catch all route for 404 - Redirect to Portfolio or a simple 404 */}
      <Route
        path="*"
        element={<TasleemPortfolio />}
      />
    </Routes>
  );
};

export default AppRouter;

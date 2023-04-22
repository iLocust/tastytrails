import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import LayoutDashboard from "../widgets/LayoutDashboard";
import Dashboard from "../pages/dashboard/Dashboard";
import Discover from "../pages/discover/Discover";
import Layout from "../widgets/Layout";


const RouteComponents = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={
            <LayoutDashboard>
              <Dashboard />
            </LayoutDashboard>
          }
        />

        <Route
          path="/discover"
          element={
            <Layout>
              <Discover/>
            </Layout>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponents;

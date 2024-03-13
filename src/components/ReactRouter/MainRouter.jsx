import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../MainLayout/Mainloyaout";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/React-Contact-project" element={<Home />} />
      </Routes>
    </>
  );
};

export default MainRouter;

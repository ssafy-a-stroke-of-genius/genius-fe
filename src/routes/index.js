import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Graph from "../components/Graph.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Graph/>
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

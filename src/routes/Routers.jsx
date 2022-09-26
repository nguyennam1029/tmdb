import { Routes, Route, Navigate } from "react-router-dom";

import React from "react";

import { HomePage } from "../page/Home";
import { HeroDetail } from "../page/HeroDetail";
import { Search } from "../page/Search";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Home/:id" element={<HeroDetail />} />
      <Route path="/seachr" element={<Search />} />
    </Routes>
  );
};
export default Routers;

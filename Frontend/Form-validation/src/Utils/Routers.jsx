import React from "react";
import Allusers from "../components/Allusers";
import Form from "../components/Form";
import { Routes, Route } from "react-router-dom";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/allusers" element={<Allusers />} />
    </Routes>
  );
}

export default Routers;

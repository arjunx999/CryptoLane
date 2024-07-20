import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import "remixicon/fonts/remixicon.css";
import CardDetails from "./Components/CardDetails";

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-gradient-custom ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coins/:id" element={<CardDetails />}></Route>
      </Routes>
      <hr className="w-[95%] mx-auto border-t-[1.4px] border-zinc-600 mt-10 " />
      <h3 className="text-center my-4">
        Copyright @ 2024, CryptoLane - All Right Reserved.
      </h3>
    </div>
  );
};

export default App;

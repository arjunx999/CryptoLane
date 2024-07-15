import React, { useContext } from "react";
import logo from "./Screenshot_2024-07-10_203026-removebg-preview.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";

const Navbar = () => {

  const { setcurrency } = useContext(CoinContext)
  const currencyHandler = ( event ) => {
    switch (event.target.value) {
      case "usd" :{
        setcurrency({name: "usd", symbol: "$"})
        break;
      } 
      case "eur" :{
        setcurrency({name: "eur", symbol: "€ "})
        break;
      } 
      case "inr" :{
        setcurrency({name: "inr", symbol: "₹"})
        break;
      } 
      default : {
        setcurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }


  return (
    <div className="h-[10vh] w-full border-b-2 flex border-zinc-500 items-center justify-between px-20 ">
      <img className="w-[11vw]" src={logo} alt="" />

      <div className="flex gap-x-12 font-archivoBlack font-medium text-sm">
        <h1>Home</h1>
        <h1>Features</h1>
        <h1>Pricing</h1>
        <h1>About</h1>
      </div>

      <div className="flex gap-x-3 ">
        <select onChange={currencyHandler} className="block  mx-auto bg-zinc-300 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-none sm:text-sm border-zinc-400 " >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-[6.5vh] inline-flex items-center justify-center px-3 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

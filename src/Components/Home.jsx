// import React, { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import Cards from "./Cards";
// import { CoinContext } from "../Context/CoinContext";

const Home = () => {

  // const { coin, currency } = useContext(CoinContext);
  // const [ displayCoin, setDisplayCoin ] = useState([]);

  // useEffect(() => {
  //   setDisplayCoin(coin)
  // },[coin])

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div className="w-[80%] h-[90vh]   mx-auto">
        <div className="flex w-[80%] h-[90%] items-center justify-center flex-col pt-[18%] font-lato mx-auto ">
          <h1 className="text-4xl font-semibold  mb-3"> Welcome to CryptoLane</h1>
          <h3 className="text-lg text-center mb-5">  
            Explore the world of cryptocurrencies with our comprehensive
            dashboard. Stay updated with the latest prices, market trends, and
            detailed insights on your favorite digital assets. Navigate through
            the top cryptocurrencies and click on any card to see more details
            about each one.
          </h3>

          <SearchBox />

          <div className="flex flex-col text-zinc-600 items-center justify-center pt-28">
            <p className="font-lato  text-base">
              Scroll Down to view latest market updates.
            </p>
            <i className="ri-arrow-down-wide-fill text-3xl"></i>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import { useContext } from "react";
import Navbar from "./Navbar";
import LineChart from "./LineChart";
import Loader from "./Loader";

const CardDetails = () => {
  const { id } = useParams();
  const [coinData, setcoinData] = useState();
  const [historicalData, sethistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-Ls3drqDHXDdNYdFpUE1gtXCY",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then((response) => response.json())
      .then((response) => setcoinData(response))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-Ls3drqDHXDdNYdFpUE1gtXCY",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency.name}&days=7&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => sethistoricalData(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="w-screen h-auto">
        <Navbar />
        <div className="w-[60%] h-[100%] mt-[10vh] items-center flex flex-col mx-auto">
          <img src={coinData.image.large} className="w-[10vw] mt-5" alt="" />
          <h1 className="mt-2 text-4xl  font-bold capitalize">{coinData.id}</h1>

          <div className="w-[80%] h-[50vh] rounded-3xl mt-4 shadow-2xl shadow-slate-600 font-semibold">
            <LineChart HistoricalData={historicalData} />
          </div>

          <div className="flex flex-col items-center mt-10 text-xl w-[80%] mx-auto  text-black p-8 rounded-3xl shadow-2xl shadow-slate-600 bg-transparent">
            <div className="flex justify-between w-full border-b border-zinc-600 py-2">
              <h1>Crypto Market Rank</h1>
              <span>{coinData.market_cap_rank}</span>
            </div>
            <div className="flex justify-between w-full border-b border-zinc-600 py-2">
              <h1>Current Price</h1>
              <span>
                {currency.symbol}
                {coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-full border-b border-zinc-600 py-2">
              <h1>Market Cap</h1>
              <span>
                {currency.symbol}
                {coinData.market_data.market_cap[
                  currency.name
                ].toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-full border-b border-zinc-600 py-2">
              <h1>24 Hour High</h1>
              <span>
                {currency.symbol}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between w-full py-2">
              <h1>24 Hour Low</h1>
              <span>
                {currency.symbol}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Loader />
    );
  }
};

export default CardDetails;

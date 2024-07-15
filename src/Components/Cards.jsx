import React from "react";
import { CoinContext } from "../Context/CoinContext";
import { useContext, useState, useEffect } from "react";


const Cards = () => {
    const { Coin, currency } = useContext(CoinContext);
    const [ displayCoin, setDisplayCoin ] = useState([]);
  
    useEffect(() => {
      setDisplayCoin(Coin)  
    },[Coin])

    console.log(displayCoin)

  return (
    <div className="mt-20 w-[85vw] h-[80vh] bg-red-300 flex ">
        {/* {displayCoin.slice(0,10).map((item, index) => (
            <h1>{item.id}</h1>
        ))} */}
      
    </div>
  );
};

export default Cards;

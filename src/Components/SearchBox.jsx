import React, { useContext, useState } from "react";
import { CoinContext } from "../Context/CoinContext";

const SearchBox = () => {
  const [Input, setInput] = useState("");
  const { Coin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  const InputHandler = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const SearchHandler = async (event) => {
    event.preventDefault();
    const coins = Coin.filter((item) =>
      item.name.toLowerCase().includes(Input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  return (
    <form
      className="flex w-[38vw] items-center justify-center relative gap-x-2"
      onSubmit={SearchHandler}
    >
      <input
        type="text"
        value={Input}
        placeholder="Search Trending CryptoCurrencies"
        className="w-[100%] h-[7vh] border-2 px-3 border-zinc-800 focus:border-blue-800 font-lato font-medium rounded-xl bg-transparent text-zinc-700"
        onChange={InputHandler}
        required
      />
      <button className="btn">
        Search
      </button>
    </form>
  );
};

export default SearchBox;

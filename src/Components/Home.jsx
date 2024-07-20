import Navbar from "./Navbar";
import Cards from "./Cards";
import { CoinContext } from "../Context/CoinContext";
import { useContext, useState, useEffect } from "react";

const Home = () => {
  const { Coin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value);

    if (event.target.value === "") {
      setDisplayCoin(Coin);
      setSuggestions([]);
    } else {
      const filteredCoins = Coin.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setSuggestions(filteredCoins);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault(); // Prevents the reloading of page upon form submission
    const newCoins = Coin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(newCoins);
    setSuggestions([]); // Clear suggestions after search

    // Scroll down smoothly
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  const suggestionClickHandler = (coin) => {
    setInput(coin.name);
    setDisplayCoin([coin]);
    setSuggestions([]); // Clear suggestions after selection
  };

  useEffect(() => {
    setDisplayCoin(Coin);
  }, [Coin]);

  console.log(displayCoin);

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <div className="w-[80%] h-[90vh]   mx-auto">
        <div className="flex w-[80%] h-[90%] items-center justify-center mt-16 flex-col pt-[18%] font-lato mx-auto ">
          <h1 className="text-4xl font-semibold  mb-3">
            {" "}
            Welcome to CryptoLane
          </h1>
          <h3 className="text-lg text-center mb-5">
            Explore the world of cryptocurrencies with our comprehensive
            dashboard. Stay updated with the latest prices, market trends, and
            detailed insights on your favorite digital assets. Navigate through
            the top cryptocurrencies and click on any card to see more details
            about each one.
          </h3>

          {/* SearchBox Start */}
          <form
            onSubmit={searchHandler}
            className="flex w-[38vw] items-center justify-center relative gap-x-2"
          >
            <input
              onChange={inputHandler}
              value={input}
              type="text"
              placeholder="Search Trending CryptoCurrencies"
              className="w-[100%] h-[7vh] border-2 px-3 border-zinc-800 focus:border-blue-800 font-lato font-medium rounded-xl bg-transparent text-zinc-700"
              required
            />
            <button className="btn">Search</button>
            {/* Dropdown for Suggestions */}
            {suggestions.length > 0 && (
              <ul className="absolute top-11 w-full bg-gradient-custom2 border border-gray-300 rounded-lg max-h-60 overflow-y-auto z-10">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => suggestionClickHandler(item)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </form>
          {/* SearchBox End */}

          <div className="flex flex-col text-zinc-600 items-center justify-center pt-28">
            <p className="font-lato  text-base">
              Scroll Down to view Search Results
            </p>
            <i className="ri-arrow-down-wide-fill text-3xl"></i>
          </div>
        </div>
      </div>

      <div className="my-12 w-[85.7vw]  bg-zinc-30 mt-24 flex  gap-x-6 flex-wrap gap-y-6 ">
        {displayCoin.slice(0, 24).map((item, index) => (
          <Cards coindetail={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useContext } from "react";
import React from "react";
import { CoinContext } from "../Context/CoinContext";
import { Link } from "react-router-dom";

const Cards = ({ coindetail }) => {
  const { currency } = useContext(CoinContext);
  // const [displayCoin, setDisplayCoin] = useState([]);

  // useEffect(() => {
  //   setDisplayCoin(Coin);
  // }, [Coin]);

  // console.log(displayCoin.slice(0, 10));

  return (
    <Link to={`/coins/${coindetail.id}`} className="w-[20vw] h-[53vh] pb-3 flex flex-col items-center rounded-3xl bg-gray-300 bg-opacity-40 backdrop-filter backdrop-blur-2xl text-black shadow-slate-600 shadow-lg pt-2 px-3 hover:scale-95 transition hover:shadow-xl hover:shadow-slate-950 duration-300 select-none ">
      {/*hover:shadow-2xl transition duration-200*/}
      <img src={coindetail.image} alt="" className="h-[14vh]" />
      <h1 className="mt-2 mb-1 font-archivoBlack font-semibold text-2xl">
        {coindetail.name}
      </h1>

      <hr className="w-full border-t-[1.4px] border-zinc-600 " />

      <div className="flex flex-col py-2  font-lato font-medium">
        <h2>
          Current Price : {currency.symbol}
          {coindetail.current_price.toLocaleString()}
        </h2>
        <h2>
          Market Cap : {currency.symbol}
          {coindetail.market_cap.toLocaleString()}
        </h2>
      </div>

      <hr className="w-full border-t-[1.4px] border-zinc-600 " />

      <h1 className="my-1 font-medium text-lg">24H Change</h1>
      <div className="flex px-3 font-lato font-medium gap-x-16 ">
        <h2>
          Market Cap : <br />
          <span
            className={
              coindetail.market_cap_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {Math.floor(coindetail.market_cap_change_percentage_24h * 100) /
              100}
            %
          </span>
        </h2>
        <h2>
          Price : <br />
          <span
            className={
              coindetail.price_change_percentage_24h > 0
                ? "text-green-600"
                : "text-red-600"
            }
          >
            {Math.floor(coindetail.price_change_percentage_24h * 100)}%
          </span>
        </h2>
      </div>
    </Link>
  );
};

export default Cards;
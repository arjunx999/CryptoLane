import React from "react";
import { Link } from "react-router-dom";

const SearchBox = () => {
  return (
    <div className=" flex w-[38vw] items-center justify-center relative gap-x-2">
      <input
        type="text"
        placeholder="Search Trending CryptoCurrencies"
        className="w-[100%] h-[7vh] border-2 px-3  border-zinc-800 focus:border-blue-800 font-lato font-medium rounded-xl bg-transparent  text-zinc-700"
        onChange={(e) => {
          // setquery(e.target.value)
          // console.log(e.target.value)
        }}
        // value={query}
      />
      {/* <Link className="ri-search-eye-line text-3xl text-blue-600 absolute right-3"></Link> */}
      <Link className=" absolute right-1 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-[5.6vh] inline-flex items-center justify-center px-3 border-0 rounded-lg text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search </Link>
    </div>
  );
};

export default SearchBox;
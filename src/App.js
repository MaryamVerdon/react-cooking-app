import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setReceipts(res.data.meals));
  }, []);

  return (
    <div className="bg-white">
      <h2 className="my-10 text-4xl text-center text-red-400 font-bold">
        React Cook
      </h2>
      <div class="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Type the name of a food"
          className="form-control relative flex-auto w-80 min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-400 focus:outline-none"
        />
      </div>

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {receipts.map((receipt, index) => (
            <Card key={index} receipt={receipt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

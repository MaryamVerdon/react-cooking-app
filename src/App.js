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
      <h2 className="m-10">Recettes</h2>
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

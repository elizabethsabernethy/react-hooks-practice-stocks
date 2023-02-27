import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBought, boughtStocks}) {
  return (
    <div id='stockContainer'>
      <h2>Stocks</h2>
      {stocks.map((stock)=>{
        return <Stock key={stock.id} stock={stock} handleBought={handleBought} boughtStocks={boughtStocks}/>
      })}
    </div>
  );
}

export default StockContainer;

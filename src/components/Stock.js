import React, { useState } from "react";

function Stock({stock, handleBought, boughtStocks}) {

  function handleClick(){
    const isThere = boughtStocks.find(boughtStock => boughtStock.id === stock.id);
    if(!isThere){
      handleBought(stock)
    }
  }

  return (
    <div id={stock.id} >
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

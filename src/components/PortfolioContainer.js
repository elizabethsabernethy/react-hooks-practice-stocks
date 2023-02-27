import React from "react";

function PortfolioContainer({boughtStocks, removeStock}) {

  function handleClick(stock){
    removeStock(stock)
  }

  return (
    <div id="portfolioContainer">
      <h2>My Portfolio</h2>
      {
        boughtStocks.map((stock)=> {
          return <div onClick={()=>handleClick(stock)} key={stock.id} id={stock.id} >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{stock.name}</h5>
              <p className="card-text">{stock.ticker}: {stock.price}</p>
            </div>
          </div>
        </div>
        })
      }
    </div>
  );
}

export default PortfolioContainer;

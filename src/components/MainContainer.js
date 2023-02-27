import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

const[stocks, setStocks] = useState([])
const[boughtStocks, setBoughtStocks] = useState([])
const[sortBy, setSortBy] = useState('Sort By')
const[filterCategory, setFilterCategory] = useState('Filter')

useEffect(()=>{
  fetch('http://localhost:3001/stocks')
  .then((resp)=> resp.json())
  .then((stocks)=> setStocks(stocks))
},[])

function handleBought(stock){
    setBoughtStocks([...boughtStocks, stock])
}

function removeStock(stock){
  setBoughtStocks((current) => current.filter((currentStock) => currentStock.id !== stock.id));
}

function handleSetFilter(category){
  setFilterCategory(category)
}

const stocksToDisplay = stocks.filter((stock) => {
  if (filterCategory === "Filter") return true;

  return stock.type === filterCategory;
});

function handleSetSort(input){
setSortBy(input)
}

const sortedStocks = stocksToDisplay.sort((a,b)=> { 
  if(sortBy === 'Alphabetically'){
    return a.name.localeCompare(b.name)
  }
  else if(sortBy === 'Price'){
    return a.price - b.price
  }
  return stocks;
});

  return (
    <div>
      <SearchBar handleSetSort={handleSetSort} handleSetFilter={handleSetFilter} category={filterCategory}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} handleBought={handleBought} boughtStocks={boughtStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} boughtStocks={boughtStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

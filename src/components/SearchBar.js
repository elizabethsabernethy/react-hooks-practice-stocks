import React from "react";

function SearchBar({handleSetSort, handleSetFilter, category}) {

  function handleSortChange(event){
     handleSetSort(event.target.value)
  }

  function handleFilterChange(event){
    handleSetFilter(event.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select 
        onChange={handleFilterChange}
        value={category}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

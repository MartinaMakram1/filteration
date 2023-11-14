/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const FilterBar = ({ products }) => {
  const [priceRange, setPriceRange] = useState('');
  const [rating, setRating] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    generateBrandOptions();
  }, [products]);

  const generateBrandOptions = () => {
    // Extract unique brand values from products
    const uniqueBrands = Array.from(
      new Set(products.map((product) => product.brand))
    );
    setBrands(uniqueBrands);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleBrandChange = (event) => {
    // Handle brand selection logic
  };

  return (
    <div className="filter-bar">
      <h3>Filters</h3>
      <div className="filter-section">
        <h4>Price Range</h4>
        <select value={priceRange} onChange={handlePriceRangeChange}>
          {/* Price range options */}
        </select>
      </div>
      <div className="filter-section">
        <h4>Rating</h4>
        <select value={rating} onChange={handleRatingChange}>
          {/* Rating options */}
        </select>
      </div>
      <div className="filter-section">
        <h4>Brands</h4>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              value={brand}
              onChange={handleBrandChange}
            />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
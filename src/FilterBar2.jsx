import React, { useState, useEffect } from 'react';

const FilterBar = ({ products, fetchProducts }) => {
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    generateBrandOptions();
  }, [products]);

  const generateBrandOptions = () => {
    const uniqueBrands = Array.from(new Set(products.map((product) => product.brand)));
    setBrands(uniqueBrands);
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);
  };
  
  const handleRatingChange = (event) => {
    const selectedRating = event.target.value;
    setRating(selectedRating);
  };
  
  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    if (brands.includes(selectedBrand)) {
      setBrands(brands.filter((brand) => brand !== selectedBrand));
    } else {
      setBrands([...brands, selectedBrand]);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [price, rating, brands]);

  const applyFilters = () => {
    const params = {};
    if (price) {
      params.price = price;
    }
    if (rating) {
      params.rating = rating;
    }
    if (brands.length > 0) {
      params.brand = brands;
    }
    // Add additional filter parameters as needed

    fetchProducts(params);
  };
 

  return (
    <div className="filter-bar">
      <h3>Filters</h3>
      <div className="filter-section">
        <h4>Price</h4>
        <label>
          <input
            type="checkbox"
            value="25$ and up"
            onChange={handlePriceChange}
            checked={price === "25$ and up"}
          />
          25$ and up
        </label>
        <label>
          <input
            type="checkbox"
            value="50$ and up"
            onChange={handlePriceChange}
            checked={price === "50$ and up"}
          />
          50$ and up
        </label>
        {/* Add more price options as needed */}
      </div>
      <div className="filter-section">
        <h4>Rating</h4>
        <label>
          <input
            type="checkbox"
            value="less than 4 stars"
            onChange={handleRatingChange}
            checked={rating === "less than 4 stars"}
          />
          Less than 4 stars
        </label>
        <label>
          <input
            type="checkbox"
            value="less than 3 stars"
            onChange={handleRatingChange}
            checked={rating === "less than 3 stars"}
          />
          Less than 3 stars
        </label>
        {/* Add more rating options as needed */}
      </div>
      <div >
        <h4>Brands</h4>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              value={brand}
              onChange={handleBrandChange}
              checked={brands.includes(brand)}
            />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
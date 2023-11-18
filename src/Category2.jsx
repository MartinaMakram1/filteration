/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Category2() {
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [brand, setBrand] = useState([]);
  // const [filters, setFilters] = useState({
  //   price: '',
  //   rating: '',
  //   brand: [],
  // });
  const [products, setProducts] = useState([]);
  const [brandCollection, setBrandCollection] = useState([]);

  useEffect(() => {
   
    fetchProducts();
    // generateBrands();
    // }, [price, rating, brand]);
  }, []);
  // useEffect(() => {
  //   fetchProducts();
  // }, [filters]);
  let categoryId = "65516c0857e2f1668173eecf";
  let fetchProducts = async (params) => {
    try {
      const res = await axios.get(
        `http://localhost:3333/products/categoryPrd/${categoryId}`,
        {
          params: {
            ...params,
          },
        }
      );
      
      setProducts(res.data.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    
    generateBrands();
  }, [products]);
  // }, []);
  // }, [categoryId]);
// }, [fetchProducts]);

  const generateBrands = () => {
    const uniqueBrands = Array.from(
      new Set(products.map((product) => product.brand))
    );
    setBrandCollection(uniqueBrands);
    //   if(products){
    //     setBrandCollection(uniqueBrands)
    //   }
    //  else if(params.price){
    //     setBrandCollection(uniqueBrands)
    //   }
    //   else if (params.rating){
    //     setBrandCollection(uniqueBrands)
    //   }
    //   else if (params.brand){
    //     setBrandCollection([...brandCollection,uniqueBrands])
    //   }
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    // let value =event.target.value
    //   if(event.target.checked===true){
    //     setPrice(value)
    //   }
    //   else if(event.target.checked===false){

    //     setPrice('')
    //   }
  };

  // const handlePriceChange = (event) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     price: event.target.value,
  //   }));
  // };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  // const handleRatingChange = (event) => {
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     rating: event.target.value,
  //   }));
  // };

  const handleBrandChange = (event) => {
    // setBrand(event.target.value);
    let value = event.target.value;
    if (value === "") {
      setBrand([]);
    } else if (event.target.checked === true) {
      setBrand([...brand, value]);
    } else if (event.target.checked === false) {
      const newArr = brand.filter((e) => e !== value);
      setBrand(newArr);
    }
  };

  // const handleBrandChange = (event) => {
  //   const selectedBrands = Array.from(event.target.selectedOptions, (option) => option.value);
  //   setBrand(selectedBrands);
  // };

  // const handleBrandChange = (event) => {
  //   const selectedBrands = Array.from(
  //     event.target.querySelectorAll("input[type='checkbox']:checked"),
  //     (checkbox) => checkbox.value
  //   );
  //   setBrand(selectedBrands);
  // };

  // const handleBrandChange = (event) => {
  //   const selectedBrand = event.target.value;
  //   setFilters((prevFilters) => {
  //     const updatedBrands = prevFilters.brand.includes(selectedBrand)
  //       ? prevFilters.brand.filter((brand) => brand !== selectedBrand)
  //       : [...prevFilters.brand, selectedBrand];
  //     return {
  //       ...prevFilters,
  //       brand: updatedBrands,
  //     };
  //   });
  // };

  //   const handleBrandChange = (event) => {
  //   const selectedBrand = event.target.value;
  //   setBrand((prevFilters) => {
  //     const updatedBrands = [...prevFilters.brand];
  //     const brandIndex = updatedBrands.indexOf(selectedBrand);
  //     if (brandIndex > -1) {
  //       updatedBrands.splice(brandIndex, 1); // Remove brand if already selected
  //     } else {
  //       updatedBrands.push(selectedBrand); // Add brand if not selected
  //     }
  //     return {
  //       ...prevFilters,
  //       brand: updatedBrands,
  //     };
  //   });
  // };

  useEffect(() => {
    applyFilters();
  }, [price, rating, brand]);

  let params = [];
  const applyFilters = () => {
    // let params = [];
    if (price) {
      params.price = price;
    }
    if (rating) {
      params.rating = rating;
    }
    if (brand) {
      params.brand = brand;
    }

    fetchProducts(params);
  };

  return (
    <>
      <div className="row mt-2 mb-2">
        <div className="col-lg-2  mt-4 me-0">
        
          {/* <label>
          <input
            type="checkbox"
            value="4"
            onChange={handleRatingChange}
           
          />
          Less than 4 stars
        </label>
        <label>
          <input
            type="checkbox"
            value="3"
            onChange={handleRatingChange}
            
          />
          Less than 3 stars
          </label> */}
          <h4>Rating</h4>
          <label>
            <input
              type="radio"
              name="rating"
              value=""
              onChange={handleRatingChange}
            />
            All Ratings
          </label><br />
          <label>
            <input
              type="radio"
              name="rating"
              value="5"
              onChange={handleRatingChange}
            />
            Equal to 5 stars
          </label><br />
          <label>
            <input
              type="radio"
              name="rating"
              value="4"
              onChange={handleRatingChange}
            />
            Equal to 4 stars
          </label><br />
          <label>
            <input
              type="radio"
              name="rating"
              value="3"
              onChange={handleRatingChange}
            />
            Equal to 3 stars
          </label><br />
          <label>
            <input
              type="radio"
              name="rating"
              value="2"
              onChange={handleRatingChange}
            />
            Equal to 2 stars
          </label><br />
          <label>
            <input
              type="radio"
              name="rating"
              value="1"
              onChange={handleRatingChange}
            />
            Equal to 1 star
          </label><br />

          {/* <label>
          <input
            type="checkbox"
            value="25"
            onChange={handlePriceChange}
            
          />
          Less than 25$ 
          </label>

          
          <label>
          <input
            type="checkbox"
            value="50"
            onChange={handlePriceChange}
            
          />
          Less than 50$ 
          </label> */}
          <div className="mt-3">
            <h4>Price</h4>
            <label>
              <input
                type="radio"
                name="price"
                value=""
                onChange={handlePriceChange}
              />
              Any price
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="25"
                onChange={handlePriceChange}
              />
              Equal to $25
            </label><br />

            <label>
              <input
                type="radio"
                name="price"
                value="50"
                onChange={handlePriceChange}
              />
              Equal to $50
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="100"
                onChange={handlePriceChange}
              />
              Equal to $100
            </label><br />

            <label>
              <input
                type="radio"
                name="price"
                value="200"
                onChange={handlePriceChange}
              />
              Equal to $200
            </label><br />
            <label>
              <input
                type="radio"
                name="price"
                value="300"
                onChange={handlePriceChange}
              />
              Equal to $300
            </label><br />

            <h4>Brands</h4>
            {brandCollection.map((bd) => (
              <label key={bd} className="d-block">
                <input
                  type="checkbox"
                  value={bd}
                  onChange={handleBrandChange}
                  // checked={brand.includes(bd)}
                />
                {bd} 
              </label>
            ))}
          </div>
        </div>

        <div className="col-lg-10">
          {/* <h3>{categoryName}</h3> */}
          <div className="row mt-5">
            <div className="col-12">
              <p>
                5-5 of over {products.length} results for &nbsp;
                <span className="text-danger">{/* {categoryName} */}</span>
              </p>
            </div>
          </div>
          <div className="row">
            {/* {products.map((product, index) => (
                            // return (
                            <ProductCard
                                key={index}
                                productID={product._id}
                                productTitle={product.title}
                                productRating={product.rating}
                                productDiscount={product.discountPercentage}
                                productThumbnail={product.thumbnail}
                                productPrice={product.price}
                                productDescription={product.description}
                            />
                        ))} */}
            {products.map((prd) => (
              <Col key={prd.id}>
                <Card className="mx-1 shadow p-1 pb-2">
                  <Card.Img variant="top" src={prd.thumbnail} />
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {prd.title}
                    </Card.Title>
                    <Card.Text className="text-truncate ">
                      {prd.description}
                    </Card.Text>
                    <Card.Text className="text-truncate">
                      Price : {prd.price}
                    </Card.Text>
                    <Card.Text className="text-truncate">
                      brand :{prd.brand}
                    </Card.Text>
                    <Card.Text className="text-truncate">
                      Rating : {prd.rating}
                    </Card.Text>
                  </Card.Body>
                  {/* <Button variant="success" onClick={()=>{
                                 navigate (`/details/${mov.id}`) */}
                  {/* }}>Details</Button> */}
                  {/* <Button variant="success" onClick={()=>{handleAdding(mov)}} className="mt-2">add to favourites</Button> */}
                </Card>
              </Col>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

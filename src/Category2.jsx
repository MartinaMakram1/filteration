/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Category2(){
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [brand, setBrand] = useState('');
    // const [filters, setFilters] = useState({
    //   price: '',
    //   rating: '',
    //   brand: [],
    // });
    const [products, setProducts] = useState([]);
    const [brandCollection, setBrandCollection] = useState([]);
    
    useEffect(() => {
        fetchProducts();
      }, [price, rating, brand]);
    // useEffect(() => {
    //   fetchProducts();
    // }, [filters]);

      const fetchProducts = async (params) => {
        try {
          const res = await axios.get("http://localhost:3333/products/categoryPrd/65516c0857e2f1668173eecf", {
            params: {
             ...params
            },
          });
          setProducts(res.data.data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        generateBrands();
      }, [products]);
    
      const generateBrands = () => {
        const uniqueBrands = Array.from(new Set(products.map((product) => product.brand)));
        setBrandCollection(uniqueBrands);
      };
      
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
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
    setBrand(event.target.value);
  };
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


  useEffect(() => {
    applyFilters();
  }, [price, rating, brand]);

  const applyFilters = () => {
    let params = [];
    if (price) {
      params.price = price;
    }
    if (rating) {
      params.rating = rating;
    }
    if(brand){
        params.brand=brand
    }
   
    
    fetchProducts(params);
  }

  return (
    <>
      <div className='row mt-2 mb-2'>
                <div className='col-lg-2 '>
                <h4>Rating</h4>
        <label>
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
          </label>
          <label>
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
          </label>
          <div >
        <h4>Brands</h4>
        {brandCollection.map((bd) => (
          <label key={bd}>
            <input
              type="checkbox"
              value={bd}
              onChange={handleBrandChange}
             
            />
            {bd}
          </label>
        ))}
      </div>
                </div>


                <div className='col-lg-10'>
                    {/* <h3>{categoryName}</h3> */}
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <p>
                                5-5 of over 5 results for &nbsp;
                                <span className='text-danger'>
                                    {/* {categoryName} */}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='row'>
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
                        {products.map((prd)=>(
                             <Col key={prd.id}>
                             <Card  className="m-2 shadow p-1 pb-2">
                               <Card.Img variant="top" src={prd.thumbnail}/>
                               <Card.Body>
                                 <Card.Title className="text-truncate">{prd.title}</Card.Title>
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
  )

}
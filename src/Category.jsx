import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FilterBar2 from './FilterBar2';
// import ProductCard from "./productCard"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


export default function Category(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async (params) => {
      try {
        const res = await axios.get("http://localhost:3333/products/categoryPrd/65516c0857e2f1668173eecf", {
          params:{
            ...params,
          }
        }
       );
        console.log(res.data.data);
        setProducts(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };


    return(
        <>
         <section className='container-fluid'>
            <div className='row mt-2 mb-2'>
                <div className='col-lg-2 filter'>
                <FilterBar2 products={products}  fetchProducts={fetchProducts} />

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
                                 <Card.Text className="text-truncate">
                                   {prd.description}
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
        </section>
        </>
    )
}
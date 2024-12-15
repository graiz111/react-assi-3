import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Productlisting.css"


const ProductListing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      
      setProducts(response.data);
    });
  }, []);

  return (
    <>
     <div>
        
        <div className='container'>
          {products.map((product) => (
            <div className='products' >
              <img className='image'src={product.image} alt={product.title}/>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        </div>
      
    </>
  );
};

export default ProductListing;
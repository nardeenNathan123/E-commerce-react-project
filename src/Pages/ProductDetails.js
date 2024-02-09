import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';



function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isInCart, setIsInCart] = useState(false);
  
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);

        const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const isProductInCart = existingCartItems.some(item => item.id === res.data.id);
        setIsInCart(isProductInCart);
        

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const toggleCartStatus = () => {
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (isInCart == true) {

      const updatedCartItems = existingCartItems.filter(item => item.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setIsInCart(false);
    } else {
     const updatedCartItems = [...existingCartItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setIsInCart(true);
    }
  };
  
  

  return (
    <>
      <div className="container my-5 py-3">
  <div className="row text">
    <div className="col-md-6 col-lg-6 d-flex justify-content-center mx-auto product mt-5">
    <img
  className="w-100"
  style={{ height: '400px', maxWidth: '100%', borderRadius: '5px' }}
  src={`https://cdn.dummyjson.com/product-images/${productId}/${productId == 6 ? '4' : '1'}.jpg`}
  alt={product.title}
/>

    </div>
    <div className="col-md-6 col-lg-6 d-flex flex-column justify-content-center">
      <h1 className="display-5 fw-bold">{product.title}</h1>
      <hr />
      <h3 className="my-4">Price: {product.price} $</h3>
      <h3 className="my-4">Category: {product.category}</h3>
      <p className="lead">{product.description}</p>
      <div className="d-flex">
        <button className="btn btn-outline-primary w-100" onClick={toggleCartStatus}>
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default ProductDetails;

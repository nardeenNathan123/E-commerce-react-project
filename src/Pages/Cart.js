import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Cart() {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };
  
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  
    setTotalPrice(calculateTotalPrice(storedCartItems));
  }, []);
  
  const removeFromCart = (productId) => {

    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
  
    setTotalPrice(calculateTotalPrice(updatedCartItems));
  
    setCartItems(updatedCartItems);
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
  
  return (
    <div className="container my-5 py-3">
      <h1 className="text-center mb-5">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
              <div className="container py-4">
                <button onClick={() => removeFromCart(item.id)} className="btn-close float-end" aria-label="Close"></button>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src={item.images[0]} 
                      alt={item.title}
                    />
                  </div>
                  <div className="col-md-4">
                    <h3>{item.title}</h3>
                    <p className="lead fw-bold">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <strong className="text-right">
            Total Price: {totalPrice.toFixed(2)} $
          </strong>
          <div className="row">
                    <Link to="/Login" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</Link>
                </div> 
        </div>
        
      )}
    </div>
    
  );
}

export default Cart;

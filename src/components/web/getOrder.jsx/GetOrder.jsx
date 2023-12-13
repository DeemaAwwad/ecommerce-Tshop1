import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../usercart/UserCart.css'

export default function GetOrder() {
    const [getorder, setgetorder] = useState([]);

    const getUserOrder = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`, {
                headers: { Authorization: `Tariq__${token}` }
            });

            console.log(response.data);
            setgetorder(response.data.orders);
        } catch (error) {
            console.error("Error fetching user orders:", error);
        }
    };

    useEffect(() => {
        getUserOrder();
    }, []); 
    return (
        <div>

<div className="row">
          <div className="cart-items">
            <div className="products" id="products">

              <div className="item">
                <div className="product-info">
                  <h2>Product</h2>
                </div>
                <div className="quantity">
                  <h2>Quantity</h2>
                </div>
                <div className="price">
                  <h2>Price</h2>
                </div>
                <div className="subtotal">
                  <h2>Subtotal</h2>
                </div>
              </div>

              {getorder.length > 0 ? (
                getorder.map((order) => (
                    <div className="item" key={order._id} >
                    <div className="product-info">
                      <div className="product-details">
                        <h2>{order.userId}</h2>
                        
                      </div>
                    </div>

                    {getorder.length>0?(order.products.map((product) => (
                        <div  key={product._id} >
                            <div >
                               <span>{product.quantity }</span>
                            </div>

                            <div className="price">${product.unitPrice}</div> 

                            <div className="subtotal" >${product.finalPrice}</div>
                        </div>   
                         
                    ))):"no items"}
                    <div className="subtotal">${order.finalPrice}</div>
                   
                  </div>
                ))
            ) : (
                "No orders"
            )}

            </div>
          </div>
      </div>





        </div>
    );
}


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../usercart/UserCart.css'

export default function GetOrder() {
    const [getorder, setgetorder] = useState([]);

    const getUserOrder = async () => {
        try {
            const token = localStorage.getItem("userToken");
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/order`, {
                headers: { Authorization: `Tariq__${token} `}
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
        <div  >
              {getorder.length > 0 ? (
                getorder.map((order) => (
                    <div className="item" key={order._id} >
                        <h1>Order</h1>
                        {getorder.length>0?(order.products.map((product) => (
                        <div  key={product._id} >
                            <h2>Item</h2>
                            <div >
                               <span>Product Quantity: {product.quantity }</span>
                            </div>

                            <div className="price">Unit Price: ${product.unitPrice}</div> 

                            <div className="subtotal" >Final Price: ${product.finalPrice}</div>
                        </div>   
                         
                    ))):"no items"}
                    <div className="subtotal">
                        <h3>Order Final Price: </h3>
                         ${order.finalPrice}
                    </div>
                   
                  </div>
                ))
            ) : (
                "No orders"
            )}
        </div>
    );
}
// src/components/Cart.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import './styles/global.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(AppContext);

    return (
        <div className="container">
            <div className="card">
                <h2>Your Cart</h2>
                <ul>
                    {cart.map((cake, index) => (
                        <li key={index} className="flex items-center gap-4 mb-4">
                            <span>{cake.name}</span>
                            <button className="bg-red-500 text-white rounded" onClick={() => removeFromCart(cake.name)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <Link to="/payment" className="link mt-3 text-center block">
                    <button className="bg-blue-500 text-white rounded mt-5">Checkout</button>
                </Link>
                <Link to="/cakes" className="link mt-3 text-center block">Back to Cakes</Link>
            </div>
        </div>
    );
};

export default Cart;

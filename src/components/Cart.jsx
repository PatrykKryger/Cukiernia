// src/components/Cart.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import './styles/global.css';

const Cart = () => {
    const { cart, removeFromCart, t } = useContext(AppContext); // Dodano t

    return (
        <div className="container">
            <div className="card">
                <h2>{t("yourCart")}</h2>
                <ul>
                    {cart.map((cake, index) => (
                        <li key={index} className="flex items-center gap-4 mb-4">
                            <span>{cake.name}</span>
                            <button className="bg-red-500 text-white rounded" onClick={() => removeFromCart(cake.name)}>{t("remove")}</button>
                        </li>
                    ))}
                </ul>
                <Link to={cart.length > 0 ? "/payment" : "#"} className={`link mt-3 text-center block ${cart.length === 0 ? "pointer-events-none opacity-50" : ""}`}>
                    <button className="bg-blue-500 text-white rounded mt-5" disabled={cart.length === 0}>
                        {t("checkout")}
                    </button>
                </Link>
                <Link to="/cakes" className="link mt-3 text-center block">{t("backToCakes")}</Link>
            </div>
        </div>
    );
};

export default Cart;

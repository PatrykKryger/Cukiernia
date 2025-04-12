// src/components/Cakes.jsx
import React, { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import './styles/global.css';
import ChocolateCake from "./images/ChocolateCake.png";
import VanillaCake from "./images/VanillaCake.png";
import StrawberryCake from "./images/StrawberryCake.png";

const cakeData = [
    { name: "Chocolate Cake", image: ChocolateCake },
    { name: "Vanilla Cake", image: VanillaCake },
    { name: "Strawberry Cake", image: StrawberryCake }
];

const Cakes = () => {
    const { addToCart } = useContext(AppContext);

    return (
        <div className="container">
            <div className="card">
                <h2>Cakes</h2>
                <ul>
                    {cakeData.map((cake, index) => (
                        <li key={index} className="cake-item flex items-center gap-4 mb-4">
                            <img src={cake.image} alt={cake.name} className="cake-image" />
                            <div>
                                <span className="block font-bold text-lg">{cake.name}</span>
                                <button className="btn" onClick={() => addToCart(cake)}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
                <Link to="/cart" className="link mt-5 block text-center">Go to Cart</Link>
            </div>
        </div>
    );
};

export default Cakes;
import React from "react";
import { Link } from "react-router-dom";

const Cakes = () => (
    <Card className="max-w-3xl mx-auto mt-10 p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Cakes</h2>
        <ul className="space-y-3">
            {["Chocolate Cake", "Vanilla Cake", "Red Velvet Cake"].map((cake, index) => (
                <li
                    key={index}
                    className="border rounded p-3 flex justify-between items-center"
                >
                    <span>{cake}</span>
                    <Button>Add to Cart</Button>
                </li>
            ))}
        </ul>
        <Link to="/cart" className="text-blue-500 block mt-5 text-center">Go to Cart</Link>
    </Card>
);
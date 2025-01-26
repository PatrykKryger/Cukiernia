import React from "react";
import { Link } from "react-router-dom";

const Cart = () => (
    <Card className="max-w-3xl mx-auto mt-10 p-4">
        <h2 className="text-xl font-bold mb-4 text-center">Cart</h2>
        <ul className="space-y-3">
            {["Chocolate Cake", "Vanilla Cake"].map((cake, index) => (
                <li
                    key={index}
                    className="border rounded p-3 flex justify-between items-center"
                >
                    <span>{cake}</span>
                    <Button>Remove</Button>
                </li>
            ))}
        </ul>
        <Button className="w-full mt-5">Checkout</Button>
        <Link to="/cakes" className="text-blue-500 block mt-3 text-center">Back to Cakes</Link>
    </Card>
);
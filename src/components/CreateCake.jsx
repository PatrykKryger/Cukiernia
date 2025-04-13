import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../App";

const CreateCake = () => {
    const { addToCart } = useContext(AppContext);
    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cakeName.trim() && ingredients.trim()) {
            addToCart({ name: cakeName, ingredients });
            setCakeName("");
            setIngredients("");
            alert("Cake added to cart!");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Create Cake</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="cakeName" className="block text-left text-gray-700 font-semibold mb-2">
                            Cake Name
                        </label>
                        <div className="przerwa"></div>
                        <input
                            type="text"
                            id="cakeName"
                            value={cakeName}
                            onChange={(e) => setCakeName(e.target.value)}
                            placeholder="Enter cake name"
                            className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="przerwa2"></div>
                    <div className="mb-4">
                        <label htmlFor="ingredients" className="block text-left text-gray-700 font-semibold mb-2">
                            Ingredients
                        </label>
                        <div className="przerwa"></div>
                        <textarea
                            id="ingredients"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="List the ingredients"
                            className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="przerwa2"></div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
                <div className="przerwa2"></div>
                <div>
                    <Link to="/cakes" className="text-blue-500 block mt-4 text-center hover:text-blue-700 transition">
                        View Cakes
                    </Link>
                </div>
                <div className="przerwa2"></div>
                <div>
                    <Link to="/cart" className="link mt-5 block text-center">Go to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default CreateCake;


import { Link } from "react-router-dom";

const CreateCake = () => (
    <div className="container">
            <div className="card">
                    <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Create Cake</h2>

                    <form>
                            <div className="mb-4">
                                    <label htmlFor="cakeName" className="block text-left text-gray-700 font-semibold mb-2">
                                            Cake Name
                                    </label>
                                    <input
                                        type="text"
                                        id="cakeName"
                                        placeholder="Enter cake name"
                                        className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                            </div>

                            <div className="mb-4">
                                    <label htmlFor="ingredients" className="block text-left text-gray-700 font-semibold mb-2">
                                            Ingredients
                                    </label>
                                    <textarea
                                        id="ingredients"
                                        placeholder="List the ingredients"
                                        className="border rounded w-full p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        rows="4"
                                    ></textarea>
                            </div>

                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Submit
                            </button>
                    </form>

                    <div><Link to="/cakes" className="text-blue-500 block mt-4 text-center hover:text-blue-700 transition">View Cakes</Link></div>
                    <div><Link to="/cart" className="link mt-5 block text-center">Go to Cart</Link></div>
            </div>

    </div>
);

export default CreateCake;

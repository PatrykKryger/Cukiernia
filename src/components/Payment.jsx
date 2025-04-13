import { Link } from "react-router-dom";
import './styles/global.css';

const Payment = () => (
    <div className="container">
        <div className="card">
            <h2>Payment Information</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                        type="text"
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                    />
                </div>

                <div className="input-group">
                    <div className="form-group">
                        <label htmlFor="expiry">Expiry Date</label>
                        <input
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <br/>
                        <input
                            type="text"
                            id="cvv"
                            placeholder="123"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="billing-address">Billing Address</label>
                    <input
                        type="text"
                        id="billing-address"
                        placeholder="123 Main St, City, Country"
                    />
                </div>
                <button className="bg-blue-500 text-white rounded mt-5">Pay</button>
            </form>

            <Link to="/cart" className="link mt-3 text-center block">Back to Cart</Link>
        </div>
    </div>
);

export default Payment;
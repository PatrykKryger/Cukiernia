import { Link } from "react-router-dom";
import './styles/global.css';

const Register = () => (
    <div className="container">
            <div className="card text-center">
                    <h2>Register</h2>
                    <input type="text" placeholder="Username" className="border mb-3" />
                    <input type="email" placeholder="Email" className="border mb-3" />
                    <input type="password" placeholder="Password" className="border mb-3" />
                    <Link to="/cakes" className="link mt-3 block"><button className="bg-blue-500 text-white rounded mt-3">Register</button></Link>
                    <Link to="/login" className="link mt-3 block">Already have an account? Login</Link>
            </div>
    </div>
);

export default Register;

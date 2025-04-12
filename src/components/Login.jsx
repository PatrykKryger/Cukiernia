import { Link } from "react-router-dom";
import './styles/global.css';

const Login = () => (
    <div className="container">
        <div className="card text-center">
            <h2>Login</h2>
            <input type="text" placeholder="Username" className="border mb-3" />
            <input type="password" placeholder="Password" className="border mb-3" />
            <Link to="/cakes" className="link mt-3 block"><button className="bg-blue-500 text-white rounded mt-3" >Login</button></Link>
            <Link to="/register" className="link mt-3 block">Register</Link>
        </div>
    </div>
);

export default Login;

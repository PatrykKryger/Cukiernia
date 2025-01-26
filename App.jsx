import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCake from "./components/CreateCake";
import Cakes from "./components/Cakes";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/register" className="nav-link">Register</Link>
                    <Link to="/create-cake" className="nav-link">Create Cake</Link>
                    <Link to="/cakes" className="nav-link">Cakes</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create-cake" element={<CreateCake />} />
                    <Route path="/cakes" element={<Cakes />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

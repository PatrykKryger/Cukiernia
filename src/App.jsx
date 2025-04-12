import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateCake from "./components/CreateCake";
import Cakes from "./components/Cakes";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Settings from "./components/Settings";
import Main from "./components/Main.jsx";
import Logo from "./components/images/logocukiernia.png";
import './App.css';

export const AppContext = createContext();

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
    };

    const removeFromCart = (cakeName) => {
        setCart((prevCart) => prevCart.filter((cake) => cake.name !== cakeName));
    };

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart }}>
            <Router>
                <div className="container">
                    <nav className="navbar">
                        <Link to="/main"><img src={Logo} alt="logo" className="logo" /></Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/create-cake" className="nav-link">Create Cake</Link>
                        <Link to="/cakes" className="nav-link">Cakes</Link>
                        <Link to="/cart" className="nav-link">Cart</Link>
                        <Link to="/Ustawienia" className="nav-link">Settings</Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" replace />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create-cake" element={<CreateCake />} />
                        <Route path="/cakes" element={<Cakes />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/ustawienia" element={<Settings />} />
                    </Routes>
                </div>
            </Router>
        </AppContext.Provider>
    );
};

export default App;

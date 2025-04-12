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
import translations from "./components/translation"; // Poprawiona ścieżka
import './App.css';

export const AppContext = createContext();

const App = () => {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("pl");

    const addToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
    };

    const removeFromCart = (cakeName) => {
        setCart((prevCart) => prevCart.filter((cake) => cake.name !== cakeName));
    };

    const t = (key) => translations[language][key] || key; // Funkcja tłumaczenia

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart, theme, setTheme, language, setLanguage, t }}>
            <div className={`app ${theme}`}>
                <Router>
                    <div className="container">
                        <nav className="navbar">
                            <Link to="/main"><img src={Logo} alt="logo" className="logo" /></Link>
                            <Link to="/login" className="nav-link">{t("login")}</Link>
                            <Link to="/create-cake" className="nav-link">{t("createCake")}</Link>
                            <Link to="/cakes" className="nav-link">{t("cakes")}</Link>
                            <Link to="/cart" className="nav-link">{t("cart")}</Link>
                            <Link to="/ustawienia" className="nav-link">{t("settings")}</Link>
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
            </div>
        </AppContext.Provider>
    );
};

export default App;


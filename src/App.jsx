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
import Gallery from "./components/Gallery";
import translations from "./components/translation";
import './App.css';

export const AppContext = createContext();

const App = () => {
    const [cart, setCart] = useState([]);
    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("pl");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginPopupVisible, setLoginPopupVisible] = useState(false);

    const addToCart = (cake) => {
        setCart((prevCart) => [...prevCart, cake]);
    };

    const removeFromCart = (cakeName) => {
        setCart((prevCart) => prevCart.filter((cake) => cake.name !== cakeName));
    };

    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);

    const showLoginPopup = () => {
        setLoginPopupVisible(true);
        setTimeout(() => setLoginPopupVisible(false), 3000); // Ukryj popup po 3 sekundach
    };

    const t = (key) => translations[language][key] || key; // Funkcja tłumaczenia

    return (
        <AppContext.Provider value={{ cart, addToCart, removeFromCart, theme, setTheme, language, setLanguage, t, isLoggedIn, login, logout, showLoginPopup }}>
            <Router>
                <div className={`app ${theme}`}>
                    {loginPopupVisible && <div className="popup">{t("loginRequired")}</div>}
                    <div className="container">
                        <nav className="navbar">
                            <Link to="/main"><img src={Logo} alt="logo" className="logo" /></Link>

                            {!isLoggedIn && (
                                <>
                                    <Link to="/login" className="nav-link">{t("login")}</Link>
                                    <Link to="/gallery" className="nav-link">Galeria</Link>
                                </>
                            )}

                            {isLoggedIn && (
                                <>
                                    <Link to="/create-cake" className="nav-link">{t("createCake")}</Link>
                                    <Link to="/cakes" className="nav-link">{t("cakes")}</Link>
                                    <Link to="/cart" className="nav-link">{t("cart")}</Link>
                                    <Link to="/ustawienia" className="nav-link">{t("settings")}</Link>
                                    <Link onClick={logout} className="nav-link">Wyloguj</Link>
                                </>
                            )}
                        </nav>

                        <Routes>
                            <Route path="/" element={<Navigate to="/main" replace />} />
                            <Route path="/main" element={<Main />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create-cake" element={isLoggedIn ? <CreateCake /> : <Navigate to="/login" replace />} />
                            <Route path="/cakes" element={isLoggedIn ? <Cakes /> : <Navigate to="/login" replace />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/payment" element={<Payment />} />
                            <Route path="/ustawienia" element={<Settings />} />
                            <Route path="/gallery" element={!isLoggedIn ? <Gallery /> : <Navigate to="/main" replace />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </AppContext.Provider>
    );
};

export default App;

import { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, t } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.username === username && user.password === password);

        if (userExists) {
            login(); // Zaloguj użytkownika
            navigate("/cakes"); // Przekierowanie na stronę z ciastami
        } else {
            setError(t("Błędne dane!!!")); // Wyświetl błąd
        }
    };

    return (
        <div className="container">
            <div className="card text-center">
                <h2>{t("login")}</h2>
                <input type="text" placeholder={t("username")} className="border mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder={t("password")} className="border mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && <p className="text-red-500">{error}</p>}
                <button className="bg-blue-500 text-white rounded mt-3" onClick={handleLogin}>{t("login")}</button>
                <button className="bg-green-500 text-white rounded mt-3" onClick={() => navigate("/register")}>{t("register")}</button>
            </div>
        </div>
    );
};

export default Login;


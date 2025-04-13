import { Link } from "react-router-dom";
import { useState } from "react";
import './styles/global.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem("users")) || []; // Pobierz istniejących użytkowników z localStorage
        const newUser = { username, password }; // Utwórz nowego użytkownika
        users.push(newUser); // Dodaj nowego użytkownika do listy
        localStorage.setItem("users", JSON.stringify(users)); // Zapisz listę użytkowników w localStorage
        setSuccess(true); // Ustaw komunikat o sukcesie
    };

    return (
        <div className="container">
            <div className="card text-center">
                <h2>Register</h2>
                <input type="text" placeholder="Username" className="border mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" className="border mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="border mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                {success && <p className="text-green-500">Registration successful!</p>}
                <button className="bg-blue-500 text-white rounded mt-3" onClick={handleRegister}>Register</button>
                <Link to="/login" className="link mt-3 block">Already have an account? Login</Link>
            </div>
        </div>
    );
};

export default Register;


import React from "react";
import { Link } from "react-router-dom";

const Register = () => (
    <Card className="max-w-md mx-auto mt-10 p-4 text-center">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
            type="text"
            placeholder="Username"
            className="border rounded w-full mb-3 p-2"
        />
        <input
            type="email"
            placeholder="Email"
            className="border rounded w-full mb-3 p-2"
        />
        <input
            type="password"
            placeholder="Password"
            className="border rounded w-full mb-3 p-2"
        />
        <Button className="w-full mb-3">Register</Button>
        <Link to="/login" className="text-blue-500">Already have an account? Login</Link>
    </Card>
);
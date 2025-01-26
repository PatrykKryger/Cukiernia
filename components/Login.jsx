import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Login = () => (
    <Card className="max-w-md mx-auto mt-10 p-4 text-center">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="text" placeholder="Username" className="border rounded w-full mb-3 p-2" />
        <input type="password" placeholder="Password" className="border rounded w-full mb-3 p-2" />
        <Button className="w-full mb-3">Login</Button>
        <Link to="/register" className="text-blue-500">Don't have an account? Register</Link>
    </Card>
);

export default Login;

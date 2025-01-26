import React from "react";
import { Link } from "react-router-dom";

const CreateCake = () => (
  <Card className="max-w-md mx-auto mt-10 p-4 text-center">
    <h2 className="text-xl font-bold mb-4">Create Cake</h2>
    <input
      type="text"
      placeholder="Cake Name"
      className="border rounded w-full mb-3 p-2"
    />
    <textarea
      placeholder="Ingredients"
      className="border rounded w-full mb-3 p-2"
      rows={4}
    ></textarea>
    <Button className="w-full">Submit</Button>
    <Link to="/cakes" className="text-blue-500 block mt-3">View Cakes</Link>
  </Card>
);
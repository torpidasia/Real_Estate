import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import React, { useState } from "react";
const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, SetFormData] = useState({});
  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-3 text-gray-400" />
              <input
                type="text"
                id="username"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-400" />
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out font-semibold"
          >
            {loading? "Loading...":"Sign Up"}
          </button>
        </form>
        <Link to="/sign-in">
          <p className="mt-6 text-center text-gray-600">
            Already have an account? <a  className="text-blue-600 hover:underline">Sign In</a>
          </p>
        </Link>
      </div>
        {error&& <p className="text-red-500 m">{error}</p>}
    </div>
  );
}

export default SignUp;

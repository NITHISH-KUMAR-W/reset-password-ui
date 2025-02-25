import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://password-reset-server-fu4u.onrender.com/api/register", formData);
            setMessage(response.data.message);
            setTimeout(() => navigate("/forgot-password"), 2000); // Redirect to login after success
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Enter below details and Register</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <button className="btn btn-link mt-3" onClick={() => navigate("/forgot-password")}>Forgot Password?</button>
            </form>
        </div>
    );
};

export default Register;

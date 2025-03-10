import React, { useState } from "react";
import axios from "axios";
import './App.css'

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://password-reset-server-fu4u.onrender.com/api/forgot-password", { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error sending reset email. Please Register if not registered");
        }
    };

    return (
        <div className="container-width">
            <h2 className="mb-4">Forgot Password</h2>
            <p>Enter your email to receive a password reset link</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}

export default ForgotPassword;

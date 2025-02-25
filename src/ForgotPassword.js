import React, { useState } from "react";
import axios from "axios";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://password-reset-server-fu4u.onrender.com/api/forgot-password", { email });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error sending reset email");
        }
    };

    return (
        <div className="container">
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
}

export default ForgotPassword;

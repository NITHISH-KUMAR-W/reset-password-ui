import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './App.css'

function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://password-reset-server-fu4u.onrender.com/api/reset-password/${token}`, { password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage("Error resetting password");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Reset Password</button>
            </form>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}

export default ResetPassword;

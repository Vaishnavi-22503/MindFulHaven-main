import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';  // Import the CSS file

const HomePage = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    
    const handleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`)
    }, [navigate, value]);
    
    return (
        <div className="container">
            <div className="label">
                <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    type="text"
                    placeholder="Enter Room Code"
                    className="input"
                />
                <span className="icon">🔍</span>
            </div>
            <button onClick={handleJoinRoom}>Join</button>
        </div>
    );
};

export default HomePage;

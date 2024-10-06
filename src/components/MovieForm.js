import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = ({ setRecommendations }) => {
    const [preferences, setPreferences] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/recommend', { preferences });
            setRecommendations(response.data.recommendations);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your movie preferences:
                <input type="text" value={preferences} onChange={(e) => setPreferences(e.target.value)} />
            </label>
            <button type="submit">Get Recommendations</button>
        </form>
    );
};

export default MovieForm;

import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {
    const [recommendations, setRecommendations] = useState([]);

    return (
        <div className="App">
            <h1>Movie Recommendation System</h1>
            <MovieForm setRecommendations={setRecommendations} />
            <MovieList recommendations={recommendations} />
        </div>
    );
}

export default App;

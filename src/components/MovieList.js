import React from 'react';

const MovieList = ({ recommendations }) => {
    return (
        <div>
            <h2>Recommended Movies</h2>
            <ul>
                {recommendations.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

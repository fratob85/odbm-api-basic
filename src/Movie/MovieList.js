import React from 'react';
import MovieItem from "./MovieItem";

export default function MovieList({movies, errorMessage, albumSelected}) {
    const MovieItems = () => {
        if (errorMessage !== '') {
            return <h3>Nessun Risultato</h3>;
        }

        return movies.map(movie => <MovieItem movie={movie} key={movie.imdbID+albumSelected} />);
    };

    return (
        <div className="main-content">
            <MovieItems />
        </div>
    );
}

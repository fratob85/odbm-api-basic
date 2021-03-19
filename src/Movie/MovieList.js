import React from 'react';
import MovieItem from "./MovieItem";

export default function MovieList({movies, curPage, errorMessage}) {
    const MovieItems = () => {
        if (errorMessage !== '') {
            return <h3 className="text-2xl my-36">Nessun Risultato</h3>;
        }

        return movies.map(movie => <MovieItem movie={movie} key={movie.imdbID+curPage} />);
    };

    return (
        <div className="main-content h-full">
            <MovieItems />
        </div>
    );
}

import React from 'react';

function MovieItem({movie}) {
    return(
        <li className="w-1/5 list-none p-4" key={movie.imdbID}>
            <img src={movie.Poster} title={movie.Title} alt={movie.Title} />
            <span className="text-2xl py-3">{movie.Title}</span>
        </li>
    );
}

export default MovieItem;

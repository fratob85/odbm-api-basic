import React from 'react';

function MovieItem({movie}) {
    return(
        <li className={movie.imdbID} key={movie.imdbID}>
            <span>{movie.Title}</span>
        </li>
    );
}

export default MovieItem;

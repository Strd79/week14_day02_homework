import React from 'react';
import './MoviesList.css';
import Movie from './Movie';

const MoviesList = ({movies, loaded}) => {
    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }

    const moviesNodes = movies.map((movie, index) => {
        return(
            <Movie key={movie.id} movie={movie} index={index} ></Movie>
        )
    })

    return(
        <>
            <h1>iTunes Top 25 Movies:</h1>
            <div className="movies-list">
                {moviesNodes}
            </div>
        </>
    )
}

export default MoviesList;
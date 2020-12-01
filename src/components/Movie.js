import './Movie.css';
import React, { useState } from 'react';
import MovieDetails from './MovieDetails';

const Movie = ({movie, index}) => {

    const [show, setShow] = useState(false);

    const showDetails = () => {
        if(show === true) {
            setShow(false)
        } 
        else {
            setShow(true)
        }
    }

    return(
        <>
            <h3 onClick={showDetails}>{index + 1}: <em>{movie.name}</em></h3>
            {show ? <MovieDetails movie={movie}/> : null}
        </>
    )
}

export default Movie;
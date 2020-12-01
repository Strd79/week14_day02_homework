import './MovieDetails.css';
import React from 'react';

const MovieDetails = ({movie}) => {


    return(
        <div className="movie-details">
            <div className="image-detail">
                <img src={movie.artworkUrl100} alt="" />
            </div>
            <div className="text-details">
                <h4>Release date: {movie.releaseDate}</h4>
                <h5>Artist name: {movie.artistName}</h5>
                <h5>Genre: {movie.genres[0].name}</h5>
                <p><a href={movie.url} target="_blank" >Preview and more... >></a></p>
            </div>
        </div>
    )
}

export default MovieDetails;
import './MoviesContainer.css';
import React, { useEffect, useState } from 'react';
import MoviesList from '../components/MoviesList';

const MoviesContainer = () => {

    const [movies, setMovies] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getMovies = () => {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://rss.itunes.apple.com/api/v1/gb/movies/top-movies/all/25/explicit.json'
        fetch(proxyUrl + targetUrl)
        .then(result => result.json())
        .then(data => setMovies(data.feed.results))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getMovies();
    }, [])

    return(
        <>
            <MoviesList 
                movies={movies}
                loaded={loaded}            
            />
        </>
    )
}

export default MoviesContainer;
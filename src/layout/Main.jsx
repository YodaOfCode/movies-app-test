import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
import Film from "../pages/Film";
import {Route} from "react-router";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);

    const searchMovies = (str) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${str}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <main className='container'>
            <Search searchMovies={searchMovies}/>
            <Route path='/:id' component={Film}/>
            {
                !movies
                    ? <Preloader/>
                    : <Movies movies={movies}/>
            }
        </main>
    );
}

export default Main;

import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router";
import {getFilmById} from '../api';

const Film = () => {
        const [film, setFilm] = useState({})
        const {id} = useParams()
        const {goBack} = useHistory()

        useEffect(() => {
            getFilmById(id).then(data => setFilm(data))
        }, [id])

        return (
            <>
                <button className='btn left' onClick={goBack}>Go back</button>
                <section>
                    <h1>{film.title}</h1>
                    <p>{film.overview}</p>
                    <span>Release date: {film.release_date}</span>
                    <h2>Film revenue: {film.revenue}</h2>
                    <h2>Film runtime: {film.runtime}</h2>
                </section>
            </>
        );
    }
;

export default Film;

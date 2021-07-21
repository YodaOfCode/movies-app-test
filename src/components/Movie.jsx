import React from 'react';
import {Link} from "react-router-dom";
import {getFilmById} from '../api';

const Movie = ({id, title, overview, release_date}) => {
    return (
        <div id={id} className="row ">
            <div className="col s12 m6 ">
                <div className="card blue-grey darken-1 movie">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        <span className="card-title">Release date: {release_date}</span>
                        <p>{overview.substr(0, 150) + '...'}</p>
                    </div>
                    <div className="card-action">
                        <Link onClick={() => getFilmById(id)} to={`/${id}`} className='btn'>Read more</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Movie;

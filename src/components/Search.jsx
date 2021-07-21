import React, {useState} from 'react';

const Search = ({searchMovies}) => {
    const [search, setSearch] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search)
        }
    }

    return (
        <div className="row">
            <div className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            type="search"
                            id="autocomplete-input"
                            className="validate"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKey}
                            placeholder='Type name of the movie in English'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

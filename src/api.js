const API_KEY = process.env.REACT_APP_API_KEY;

export const getFilmById = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    return await response.json()
}

export default {getFilmById}

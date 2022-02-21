
import { useEffect, useState, useRef } from 'react';
import API from '../API';

import { useHomeFetch } from './useHomeFetch'

//initial state
const initialState = {
    genres: []
}

const initialGenresItemsState = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0

}

export const useGenresFetch = () => {

    const [genres, setGenres] = useState(initialState);
    const [errorGenre, setGenreError] = useState();
    const [genreSelected, setGenreSelected] = useState();
    const [genresItems, setGenresItems] = useState(initialGenresItemsState);
    const { movieOrTVShow } = useHomeFetch();

    
    const initial = useRef(true);

    useEffect(() => {
        const fetchGenresMovies = async () => {
            try {
                setGenresItems(await API.fetchMoviesTvsGenre(genreSelected, movieOrTVShow));
                console.log(`Genre movies or tvs at the hook ${genresItems}`);
            }
            catch {
                console.log("Error");
            }
        }
        const fetch_Genres = async () => {
            if(initial.current){
                initial.current=false;
                return;
            }
            try {
                setGenreError(false);
                setGenres(await API.fetchGenres());
    
            }
            catch {
                setGenreError(true);
            }
        }
        fetch_Genres();
        fetchGenresMovies();
    }, [genreSelected, genresItems, movieOrTVShow]
    )
    return { genres, errorGenre, genreSelected, setGenreSelected, genresItems };
}
import { useState, useEffect} from "react";

//API
import API from '../API';

//Helpers
import { isPersistent } from '../helpers';


//initial state for movies and tvs
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

const initialStateGenres = {
    genres: []
}




export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    //for genres
    const [genres, setGenres] = useState(initialStateGenres);
    const [errorGenre, setGenreError] = useState();
    const [genreSelected, setGenreSelected] = useState("");




    const [error, setError] = useState(false);

    //For TV Shows
    const [movieOrTVShow, setMovieOrTVShow] = useState("Movies");

    //console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            if (movieOrTVShow === "Movies") {
                const movies = await API.fetchMovies(searchTerm, page);
                //console.log(movies);
                setState(prev => ({
                    ...movies,
                    results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
                }));
            }
            else if (movieOrTVShow === 'TVShows') {
                //console.log("In this block...")
                const tvShows = await API.fetchTVShows(searchTerm, page);
                setState(prev => ({
                    ...tvShows,
                    results: page > 1 ? [...prev.results, ...tvShows.results] : [...tvShows.results]
                }));
            }

        }
        catch {
            setError(true);
        }
        setLoading(false);
    }

    const fetchGenresMovies = async (page) => {
        try {
            setLoading(true);
            console.log(`GENRE SELECTED IS ${genreSelected}`);
        
            const genre_items = await API.fetchMoviesTvsGenre(genreSelected, movieOrTVShow);
            console.log(`GENRE ITEMS IS: ${genre_items}`);
            console.log(`Genre items: ${genre_items}`);
            setState((prev => ({
                ...genre_items,
                results: page > 1 ? [...prev.results, ...genre_items.results] : [...genre_items.results]
            })));
        }
        catch {
            console.log("This Error");
        }
        setLoading(false);
    }


    const fetch_Genres = async () => {

        try {
            setGenreError(false);
            setGenres(await API.fetchGenres());
        }
        catch {
            setGenreError(true);
        }
    }

    //initial and search render
    // we use -> useEffect() for both initial and search render
    useEffect(() => {
        fetch_Genres();
        console.log(`Genre selected is this one: ${genreSelected}`);
        if (genreSelected) {
            console.log(`xxxxxx: ${genreSelected}`);
            fetchGenresMovies(1);
            return;
        }
        if (!searchTerm) {
            const sessionState = isPersistent(movieOrTVShow);
            if (sessionState) {
                console.log("Grabbing from session storage...");
                setState(sessionState)
                return;
            }
        }
        console.log("Grabbing from API...");
        setState(initialState);

        fetchMovies(1, searchTerm);
    }, [searchTerm, movieOrTVShow, genreSelected]);


    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    //write to sessionStorage
    useEffect(() => {
        if (!searchTerm && !genreSelected) sessionStorage.setItem(movieOrTVShow, JSON.stringify(state));
    }, [searchTerm, state]);
    return {
        state,
        setState,
        error,
        loading,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
        movieOrTVShow,
        setMovieOrTVShow,
        genres,
        errorGenre,
        setGenreSelected,
        genreSelected
    };

}
import { useState, useEffect } from "react";

//API
import API from '../API';

//Helpers
import { isPersistent } from '../helpers'


//initial state
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}
export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState()
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const [error, setError] = useState(false);

    console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies)

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        }
        catch {
            setError(true);
        }
        setLoading(false);
    }

    //initial and search render
    // we use -> useEffect() for both initial and search render
    useEffect(() => {

        if (!searchTerm) {
            const sessionState = isPersistent('homeState');
            if (sessionState) {
                console.log("Grabbing from session storage...");
                setState(sessionState)
                return;
            }
        }
        console.log("Grabbing from API...");
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    
    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    //write to sessionStorage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
    }, [searchTerm, state]);

    return { state, error, loading, searchTerm, setSearchTerm, setIsLoadingMore };

}
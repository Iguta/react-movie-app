import { useState, useEffect } from "react";
import API from '../API';

//Helpers
import {isPersistent} from '../helpers';


export const useMovieFetch = movieId =>{
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchMovie = async() => {
            try{
                setLoading(true)
                setError(false)
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const trailer = await API.fetchMovieVideo(movieId);
                //console.log(trailer);
                //get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                setState({
                    ...movie,
                    actors:credits.cast,
                    directors,
                    video:trailer.results[0].key
                })
                setLoading(false)
            }catch{
                setError(true);
            } 
        };
        const sessionState = isPersistent(movieId);

        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    }, [movieId]);
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    })
    return {state, loading, error}
}
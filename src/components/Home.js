
//configs
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';

//components


//Hooks -> custom hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//Image
import NoImage from '../images/no_image.jpg';

//importing components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
//switch componnet -> Movies or TVShows
import Switch from './Switch';
import GenreOptions from './GenreOptions';

//home componnet
const Home = () => {
    const { 
        state, 
        loading, 
        error, 
        searchTerm, 
        setSearchTerm, 
        setIsLoadingMore, 
        movieOrTVShow, 
        setMovieOrTVShow,
        genres,
        setGenreSelected,
        genreSelected,
        errorGenre
     } = useHomeFetch();
    //console.log(movieOrTVShow);
    //console.log(genreSelected);
    //console.log(genres);
    if (error) {
        return <div>Ooops!! Something went wrong</div>
    }
    return (
        <>
            {
                //short-circuit LOL!!
                !searchTerm && state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    text={state.results[0].overview}
                    title={state.results[0].original_title}
                />
            }
            <SearchBar setSearchTerm={setSearchTerm} movieOrTVShow={movieOrTVShow}/>
            <Switch setMovieOrTVShow={setMovieOrTVShow}/>
            {loading && genreSelected && <Spinner />}
            <GenreOptions genres={genres.genres} error={errorGenre} genreSelected={genreSelected} setGenreSelected={setGenreSelected}/>
            <Grid header={searchTerm ? `Search ${movieOrTVShow} Results` : `Popular ${movieOrTVShow}`}>
                {
                    state.results.map(movie => (
                        <Thumb
                            key={movie.id}
                            clickable={true}
                            image={movie.backdrop_path
                                ? IMAGE_BASE_URL + POSTER_SIZE + movie.backdrop_path
                                : NoImage
                            }
                            movieId={movie.id}
                            movieTitle={movieOrTVShow === 'Movies' ? movie.title : movie.name}
                            releaseDate={movieOrTVShow === 'Movies' ? movie.release_date : movie.first_air_date}
                        />
                    ))
                }
            </Grid>
            {loading && !genreSelected && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callback={() => setIsLoadingMore(true)}></Button>
            )}
        </>
    )
}



export default Home;
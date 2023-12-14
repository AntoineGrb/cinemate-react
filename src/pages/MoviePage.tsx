import { useParams } from 'react-router-dom'
import useFetchMovieDetails from '../hooks/useFetchMovieDetails'
import MovieDetails from '../components/MovieDetails'
import MovieHeader from '../components/MovieHeader'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { useEffect } from 'react'

const MoviePage = () => {

    const {id} = useParams();
    let movieId = Number(id);
    if (isNaN(movieId)) {
        movieId = 1;
    }

    const {movieDetails, fetchMovieDetails, isLoading, isError, errorMessage} = useFetchMovieDetails(movieId);

    useEffect(() => {
        if (movieId) {
            fetchMovieDetails()
            console.log('isError' , isError)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])

    return (
        <>
            {isError && <Error message={errorMessage} isFullScreen={true}/>}
            {!isError && isLoading && <Loader isFullScreen={true}/>}
            {!isError && !isLoading && movieDetails && (
                    <>
                    <MovieHeader backdropPath={movieDetails?.backdrop_path} />
                    <MovieDetails {...movieDetails}/>
                    </>
                )
            }
        </>
    )
}

export default MoviePage
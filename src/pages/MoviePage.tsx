import { useParams } from 'react-router-dom'
import useFetchMovieDetails from '../hooks/useFetchMovieDetails'
import MovieDetails from '../components/MovieDetails'
import MovieHeader from '../components/MovieHeader'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { useEffect } from 'react'

const MoviePage = () => {

    const {id} = useParams();
    let movieId = 1;
    if (typeof id === 'number') {
        movieId = Number(id)
    }
    
    console.log(movieId)

    const {movieDetails, fetchMovieDetails, isLoading, isError} = useFetchMovieDetails(movieId);

    useEffect(() => {
        if (movieId) {
            fetchMovieDetails()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])

    return (
        <>
            {isError && <Error message='Erreur lors du chargement du film' isFullScreen={true}/>}
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
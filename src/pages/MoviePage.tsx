import { useParams } from 'react-router-dom'
import useFetchMovieDetails from '../hooks/useFetchMovieDetails'
import MovieDetails from '../components/MovieDetails'
import MovieHeader from '../components/MovieHeader'
import { useEffect } from 'react'

const MoviePage = () => {

    const {id} = useParams();
    const movieId = Number(id)

    const {movieDetails, fetchMovieDetails} = useFetchMovieDetails(movieId);

    useEffect(() => {
        if (movieId) {
            fetchMovieDetails()
            console.log('dans la page : ', movieDetails)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId])

    return (
        <>
            {
                movieDetails && (
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
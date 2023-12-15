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

    const { //On récupère toutes les datas du hook
        movieDetails, 
        movieVideo, 
        movieRecommandations,
        movieActors,
        movieDirectors,
        fetchMovieDetails, 
        isLoading, 
        isError, 
        errorMessage
    } = useFetchMovieDetails(movieId); //On passe l'id au hook

    useEffect(() => {
        if (movieId) {
            console.log('movieId : ' , movieId)
            fetchMovieDetails();
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
                    <MovieDetails {...movieDetails} actors={movieActors} directors={movieDirectors} recommandations={movieRecommandations} video={movieVideo}/>
                    </>
                )
            }
        </>
    )
}

export default MoviePage
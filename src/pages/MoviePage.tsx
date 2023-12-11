import MovieDetails from '../components/MovieDetails'
import MovieHeader from '../components/MovieHeader'
import './MoviePage'

const MoviePage = () => {
    return (
        <>
            <h1> Movie page </h1>
            <MovieHeader />
            <MovieDetails />
        </>
    )
}

export default MoviePage
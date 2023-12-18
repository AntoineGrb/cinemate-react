import styled from 'styled-components'
import {mediaSizes, spacing} from '../data/styleVariables.js'
import MovieCard from "./MovieCard"

const MoviesContainer = styled.section`
    @media (min-width: ${mediaSizes.tablet}) {
        margin: 0 150px;
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
        gap:calc(${spacing} * 3);
    }
`

interface MoviesListProps {
    movies: MovieProps[]
}

interface MovieProps {
    backdrop_path: string,
    genre_ids: number[],
    id:number,
    original_language:string,
    poster_path:string,
    release_date:string,
    title:string,
    vote_average:number,
}

const MoviesList = ({movies}: MoviesListProps) => {
    return (
        <>
            <MoviesContainer>
                {movies.map(movie => (
                    <MovieCard key={movie.id} {...movie} />
                ))}
            </MoviesContainer>
        </>
    )
}

export default MoviesList
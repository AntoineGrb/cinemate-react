import styled from 'styled-components'
import {mediaSizes, spacing} from '../utils/styleVariables.js'
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

const MoviesList = () => {
    return (
        <>
            <MoviesContainer>
                <MovieCard />
                <MovieCard />
            </MoviesContainer>
        </>
    )
}

export default MoviesList
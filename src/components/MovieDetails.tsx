import styled from 'styled-components'
import {mediaSizes} from '../utils/styleVariables.js'
// import MoviePoster from './MoviePoster.js'
import MovieHeadInfos from './MovieHeadInfos.js'
import MovieInfos from './MovieInfos.js'
import MovieRecommandations from './MovieRecommandations.js'

const MovieContainer = styled.main`
    width: 90%;
    margin: auto;
    position: relative;
    top:-50px;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 90%;
        max-width: 1300px;
        position: relative;
        display: flex;
        gap: 50px;
        align-items: flex-start;
        top:-185px;
    }
`

const MoviePoster = styled.img`
    display: none;  
    @media (min-width: ${mediaSizes.smallscreen}) {
        display: flex;
        width: 300px;
    }
`

const MovieContent = styled.section`
    padding: 0;
`

const MovieDetails = () => {
    return (
        <>
            <MovieContainer>
                <MoviePoster src='/tests/inception-affiche.jpg' />
                <MovieContent>
                    <MovieHeadInfos />
                    <MovieInfos />
                    <MovieRecommandations />
                </MovieContent>
            </MovieContainer>
        </>
    )
}

export default MovieDetails
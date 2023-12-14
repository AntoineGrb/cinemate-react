import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'
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

interface MovieDetailsProps {
    title:string,
    original_language:string
}

const MovieDetails = ({title, original_language}: MovieDetailsProps) => {
    return (
        <>
            <MovieContainer>
                <MoviePoster src='/tests/inception-affiche.jpg' />
                <MovieContent>
                    <MovieHeadInfos title={title}/>
                    <MovieInfos language={original_language} />
                    <MovieRecommandations />
                </MovieContent>
            </MovieContainer>
        </>
    )
}

export default MovieDetails
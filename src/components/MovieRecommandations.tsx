import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'
import RecommandationItem from './RecommandationItem.js'

const Title = styled.h2`
    margin: 50px 0 20px;
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin: 75px 0 30px;
    }
`

const RecommandationsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5%;
    @media (min-width: ${mediaSizes.phone}) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        grid-template-columns: repeat(4,1fr);
    }
`

const MovieRecommandations = () => {
    return (
        <>
            <Title> Films recommandés </Title>
            <RecommandationsList>
                <RecommandationItem />
                <RecommandationItem />
                <RecommandationItem />
                <RecommandationItem />
            </RecommandationsList>

        </>
    )
}

export default MovieRecommandations
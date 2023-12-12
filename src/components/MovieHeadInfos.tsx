import styled from 'styled-components'
import {mediaSizes , spacing} from '../utils/styleVariables.js'
import Rate from './Rate.js'
import Tag  from './Tag.js'

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.smallscreen}) {
        text-align: left;
        margin-top: 0;
    }

`

const Subtitle = styled.div`
    display: flex;
    justify-content: center;
    gap:15px;
    margin-bottom: calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.smallscreen}) {
        justify-content: flex-start;
        align-items: center;
    }

    p, i {
        font-size: 1.5rem;
    }
`

const Tags = styled.div`
    display: flex;
    justify-content: center;
    gap:${spacing};
    margin-bottom: calc(${spacing} * 6);
    @media (min-width: ${mediaSizes.smallscreen}) {
        justify-content: flex-start;
    }
`

const MovieHeadInfos = () => {
    return (
        <>
            <Title> Inception </Title>
            <Subtitle>
                <p> 2016 </p>
                <p> | </p>
                <Rate />
            </Subtitle>
            <Tags> 
                <Tag />
                <Tag />
            </Tags>
        </>
    )
}

export default MovieHeadInfos
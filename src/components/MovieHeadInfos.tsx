import styled from 'styled-components'
import {mediaSizes , spacing} from '../utils/styleVariables.js'
import Star from './Star.js'
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

const Rate = styled.div`
    display: flex;
    gap: 5px;
    align-items:center;
`

const Tags = styled.div`
    display: flex;
    justify-content: center;
    gap:calc(${spacing} * 1.5);
    margin-bottom: calc(${spacing} * 4);
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
                <Rate> 
                    <Star />
                    <p> 8.1 </p>
                </Rate>
            </Subtitle>
            <Tags> 
                <Tag />
            </Tags>
        </>
    )
}

export default MovieHeadInfos
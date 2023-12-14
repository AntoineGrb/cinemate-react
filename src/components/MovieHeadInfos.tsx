import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import Rate from './Rate.js'
import Tag  from './Tag.js'

const MovieHeadInfosContainer = styled.div`
    width:100%;
`
//! Problème de style pour les grands titres -> le headInfos déborde.
const Title = styled.h1`
    max-width:100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    // white-space: nowrap;    
    // overflow: hidden;    
    // text-overflow: ellipsis;
    margin-bottom: calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.smallscreen}) {
        text-align: left;
        margin-top: 0;
        font-size: 2.8rem;
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
        font-size: 1.3rem;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size: 1.5rem;
        }
    }
`

const Tags = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    gap:${spacing};
    margin-bottom: calc(${spacing} * 6);
    @media (min-width: ${mediaSizes.smallscreen}) {
        justify-content: flex-start;
    }
`

interface MovieHeadInfosProps {
    title:string,
    genres:GenresProps[],
    releaseDate:string,
    rate:number
}

interface GenresProps {
    id:number,
    name:string
}

const MovieHeadInfos = ({title, genres, releaseDate, rate}: MovieHeadInfosProps) => {
    return (
        <>  
            <MovieHeadInfosContainer>
                <Title> {title} </Title>
                <Subtitle>
                    <p> {releaseDate.substring(0,4)} </p>
                    <p> | </p>
                    <Rate rate={rate} />
                </Subtitle>
                <Tags>
                    {genres.map((genre , index) => (
                        <Tag key={index} genre={genre.id}/>
                    ))}
                </Tags>
            </MovieHeadInfosContainer>
            
        </>
    )
}

export default MovieHeadInfos
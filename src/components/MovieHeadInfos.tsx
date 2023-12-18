import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import Rate from './Rate.js'
import Tag  from './Tag.js'

const MovieHeadInfosContainer = styled.div`
    width:100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin-bottom: calc(${spacing} * 6);
    }
`
const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: calc(${spacing} * 2);
    width:100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        text-align: left;
        margin-top: 0;
        font-size: 2.4rem;
        max-width:550px; //Obligé de gérer le titre sur une ligne sinon ça casse la mise en page
        white-space: nowrap;    
        overflow: hidden;    
        text-overflow: ellipsis;
    }
    @media (min-width: ${mediaSizes.largescreen}) {
        max-width:950px;
        font-size: 2.4rem;
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
    margin-bottom: calc(${spacing} * 2);
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
                <Title title={title}> {title} </Title>
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
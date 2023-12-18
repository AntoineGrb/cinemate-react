import styled from 'styled-components'
import {mediaSizes, spacing} from '../data/styleVariables.js'
import { getFormattedLanguage } from '../utils/getFormattedLanguage.js'
import Tag from './Tag.js'
import Rate from './Rate.js'
import { Link } from 'react-router-dom'
import UserIcons from './UserIcons.js'

const Card = styled.article`
    margin-bottom: calc(${spacing} * 3);  
    @media (min-width: ${mediaSizes.smallscreen}) {
        padding-bottom: calc(${spacing} * 2);
        height: 100%;
        margin-bottom: 0;
    }
`

const Cover = styled.div`
    width: 100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 60%;
    }

    img {
        width: 100%;
        @media (min-width: ${mediaSizes.smallscreen}) {
            border-radius: 5px;
            width: 100%;
            max-height: 100%;
        }
    }
`

const Content = styled.div`
    padding: ${spacing} calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.tablet}) {
        padding: calc(${spacing} * 2) 0;
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 40%;
    }
`

const MainInfos = styled.div`
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    h2 {
        font-size:1.3rem;
        @media (min-width: ${mediaSizes.phone}) {
            font-size:1.5rem;
        }
    }
    
`

const SecondaryInfos = styled.div`
    margin-bottom: calc(${spacing});
`

const Tags = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    gap:${spacing};
    margin-bottom: calc(${spacing} * 1.5);

`

// const Icons = styled.div`

// `

interface MovieCardProps {
    backdrop_path: string,
    genre_ids: number[],
    id:number,
    original_language:string,
    poster_path:string,
    release_date:string,
    title:string,
    vote_average:number,
}

const MovieCard = ({backdrop_path, genre_ids, id, original_language, release_date, poster_path, title, vote_average}: MovieCardProps) => {

    //Gérer les backdrop_path null => mettre une image par défaut
    const handleBackdropImage = () => {
        if (backdrop_path === null) {
            return 'https://media.gqmagazine.fr/photos/603e6a8da9360b0585bcbc6a/16:9/w_1920,c_limit/108387402';
        } else {
            return `https://image.tmdb.org/t/p/w780/${backdrop_path}`
        }
    }

    return (
        <>
            <Card>
                <Cover>
                    <Link to={`movie/${id}`}>
                        <img src={handleBackdropImage()} alt="cover" />
                    </Link>
                </Cover>
                <Content>
                    <MainInfos>
                        <Link to={`movie/${id}`}>
                            <h2 style={{}}> {title} </h2> 
                        </Link>
                        <Rate rate={vote_average} />
                    </MainInfos>
                    <SecondaryInfos>
                        <p> {release_date.substring(0,4)} </p>
                        <p> {getFormattedLanguage(original_language)} </p>
                    </SecondaryInfos>
                    <Tags>
                        {genre_ids.map((genre , index) => (
                            <Tag key={index} genre={genre}/>
                        ))}
                    </Tags>
                    <UserIcons movieId={id} posterPath={poster_path} />
                </Content>
            </Card>
        </>
    )
}

export default MovieCard
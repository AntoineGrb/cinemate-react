import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import MovieHeadInfos from './MovieHeadInfos.js'
import MovieInfos from './MovieInfos.js'
import MovieRecommandations from './MovieRecommandations.js'
import ButtonReturnHomePage from './ButtonReturnHomePage.js'
import UserIcons from './UserIcons.js'

const MovieContainer = styled.main`
    width: 93%;
    margin: auto;
    position: relative;
    top:-50px;
    min-width:300px;
    max-width: 1300px;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 90%;
        position: relative;
        display: flex;
        gap: 50px;
        align-items: flex-start;
        top:-170px;
    }
`

//Contiendra le bouton retour Home (pour les écrans > 1000px) et les icones utilisateur
const MoviePosterContainer = styled.div`
`

const MoviePoster = styled.img`
    display: none;  
    @media (min-width: ${mediaSizes.smallscreen}) {
        display: flex;
        width: 300px;
    }
`

const MovieContent = styled.section`
    width:100%;
    padding: 0;
`

const UserIconsContainer = styled.div`
    margin-bottom: calc(${spacing} * 6);
    border-top:1px solid white;
    padding-top:15px;
    display:flex;
    justify-content:center;
    @media (min-width: ${mediaSizes.smallscreen}) {
        padding-top: calc(${spacing} * 2);
        border-top:none;
    }
`

interface MovieDetailsProps {
    id:number,
    title:string,
    poster_path:string,
    original_language:string,
    original_title:string,
    genres:GenresProps[],
    overview:string,
    release_date:string,
    runtime:number,
    vote_average:number,
    actors:CreditProps[],
    directors:CreditProps[],
    recommandations:RecommandationObjectProps[],
    video:VideoObjectProps | null,
    providers: Providerprops[]
}

interface GenresProps {
    id:number,
    name:string
}

interface CreditProps {
    known_for_department:string,
    name:string
}

interface RecommandationObjectProps {
    id:number,
    poster_path:string
}

interface VideoObjectProps {
    site:string,
    key:string
}

interface Providerprops {
    provider_id:number,
    provider_name:string
}

const MovieDetails = ({id, title, poster_path, original_language, original_title, genres, overview, release_date, runtime, vote_average, actors, directors, recommandations, video, providers}: MovieDetailsProps) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000)
        }
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[])

    return (
        <>
            <MovieContainer>
                <MoviePosterContainer>
                    {!isMobile && <ButtonReturnHomePage />}
                    <MoviePoster src={`https://image.tmdb.org/t/p/w780/${poster_path}`} />
                    {!isMobile && <UserIconsContainer> <UserIcons movieId={id} posterPath={poster_path} />  </UserIconsContainer>}
                </MoviePosterContainer>
                <MovieContent>
                    <MovieHeadInfos 
                        title={title} 
                        genres={genres} 
                        releaseDate={release_date} 
                        rate={vote_average}
                    />
                    {isMobile && <UserIconsContainer> 
                        <UserIcons movieId={id} posterPath={poster_path} />  
                    </UserIconsContainer>}
                    <MovieInfos 
                        originalTitle={original_title} 
                        language={original_language} 
                        releaseDate={release_date} 
                        runtime={runtime} 
                        actors={actors} 
                        directors={directors} 
                        overview={overview} 
                        video={video}
                        providers={providers}
                    />
                    <MovieRecommandations recommandations={recommandations} />
                </MovieContent>
            </MovieContainer>
        </>
    )
}

export default MovieDetails
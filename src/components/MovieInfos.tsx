import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import { getFormattedLanguage } from '../utils/getFormattedLanguage.js'
import { formatReleaseDate } from '../utils/formatReleaseDate.js'


const Info = styled.div`
    display: flex;
    gap:10px;
    align-items: baseline;
    margin-bottom: 5px;
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin-bottom: calc(${spacing} * 1.5);
    }

    i {
        color:whitesmoke;
        text-align: center;
        width: 20px;
    }

    strong {
        font-weight: 400;
        text-transform: uppercase;
    }
`

const Resume = styled.p`
    margin: calc(${spacing} * 3) 0 calc(${spacing} * 3);
    text-align: justify;
`

const Video = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin-bottom: calc(${spacing} * 5);
    }

    iframe {
        width: clamp(200px, 100%, 600px);
        aspect-ratio: 16/9;
        border: 2px solid white;
    }
`

interface MovieInfosProps {
    originalTitle:string,
    language:string,
    releaseDate:string,
    runtime:number,
    actors:CreditProps[],
    directors:CreditProps[],
    overview:string,
    video:VideoObjectProps | null
}

interface CreditProps {
    known_for_department:string,
    name:string
}

interface VideoObjectProps {
    site:string,
    key:string
}

const MovieInfos = ({originalTitle, language, releaseDate, runtime, actors, directors, overview, video}: MovieInfosProps) => {

    //Obtenir le chemin vers la vidéo Youtube
    const getYoutubeUrl = () => {
        if (video && video.site && video.site === 'YouTube') {
            const youtubeBaseUrl = 'https://www.youtube.com/embed/'
            const videoKey = video.key;
            return youtubeBaseUrl + videoKey
        }
    }

    return (
        <>
            <Info>
                <i className="fa-solid fa-globe"></i>
                <p><strong>Titre original </strong> : {originalTitle } </p>
            </Info>
            <Info>
                <i className="fa-solid fa-globe"></i>
                <p><strong> Langue </strong> : {getFormattedLanguage(language)} </p>
            </Info>
            <Info>
                <i className="fa-regular fa-calendar-days"></i>
                <p><strong> Date de sortie </strong> : {formatReleaseDate(releaseDate)} </p>
            </Info>
            <Info>
                <i className="fa-regular fa-clock"></i>
                <p><strong> Durée </strong> : {runtime} minutes </p>
            </Info>
            <Info>
                <i className="fa-solid fa-user-tie"></i>
                <p><strong> Réalisateur </strong> : {directors.length !== 0 && directors[0].name} </p>
            </Info>
            <Info>
                <i className="fa-solid fa-user-group"></i>
                <p><strong> Acteurs </strong> : {actors.length !== 0 && actors.map((actor, index) => ( <span> {actor.name}{index < 4 ? ',' : '...'} </span> ))} </p>
            </Info>
            <Resume> {overview} </Resume>
            {video && video.site && video.site === 'YouTube' && (
                <Video>
                    <iframe src={getYoutubeUrl()} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Video>
            )}
            
        </>
    )
}

export default MovieInfos
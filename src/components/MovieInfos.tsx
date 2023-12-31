import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import { getFormattedLanguage } from '../utils/getFormattedLanguage.js'
import { formatReleaseDate } from '../utils/formatReleaseDate.js'
import { providersData } from '../data/providersData.js'


const Info = styled.div`
    display: flex;
    gap:10px;
    align-items: baseline;
    margin-bottom: ${spacing};
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

const Streaming = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:10px;
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
    video:VideoObjectProps | null,
    providers: Providerprops[]
}

interface CreditProps {
    known_for_department:string,
    name:string
}

interface VideoObjectProps {
    site:string,
    key:string
}

interface Providerprops {
    provider_id:number,
    provider_name:string
}

const MovieInfos = ({originalTitle, language, releaseDate, runtime, actors, directors, overview, video, providers}: MovieInfosProps) => {

    //Obtenir le logo des providers
    const getProviderIcon = (providerId: number) => {
        const providerToDisplay = providersData.find(provider => provider.id === providerId);
        if (providerToDisplay) {
            return providerToDisplay.icon
        } else {
            return null
        }
    }
    
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
                <p><strong> Acteurs </strong> : {actors.length !== 0 && actors.map((actor, index) => ( <span key={index}> {actor.name}{index < actors.length - 1 ? ',' : '...'} </span> ))} </p>
            </Info>
            <Streaming>
                <i className="fa-solid fa-video"></i>
                <p><strong> Streaming </strong> : </p>
                <div>
                    {providers && providers.length > 0 ? providers.map(provider => {
                        const iconUrl = getProviderIcon(provider.provider_id);
                        return iconUrl && <img key={provider.provider_id} src={iconUrl} width='48px' alt="" />
                    }) : <p> Non disponible en France </p>}
                </div>
                 
            </Streaming>
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
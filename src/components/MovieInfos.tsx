import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import { getFormattedLanguage } from '../utils/getFormattedLanguage.js'


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
    overview:string
}

const MovieInfos = ({originalTitle, language, releaseDate, runtime, overview}: MovieInfosProps) => {

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
                <p><strong> Date de sortie </strong> : {releaseDate} </p>
            </Info>
            <Info>
                <i className="fa-regular fa-clock"></i>
                <p><strong> Durée </strong> : {runtime} minutes </p>
            </Info>
            <Info>
                <i className="fa-solid fa-user-tie"></i>
                <p><strong> Réalisateur </strong> : Christopher Nolan </p>
            </Info>
            <Info>
                <i className="fa-solid fa-user-group"></i>
                <p><strong> Acteurs </strong> : Leonardo Di Caprio, Joseph Gordon-Levitt, Cillian Murphy... </p>
            </Info>
            <Resume> {overview} </Resume>
            <Video>
                <iframe src="https://www.youtube.com/embed/CPTIgILtna8?si=946PSC89U4On0Fi5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </Video>
        </>
    )
}

export default MovieInfos
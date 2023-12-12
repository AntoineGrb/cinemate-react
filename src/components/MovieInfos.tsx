import styled from 'styled-components'
import {mediaSizes , spacing} from '../utils/styleVariables.js'

const InfosContainer = styled.section`
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin-top: calc(${spacing} * 2);
    }
`

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

    .strong {
        font-weight: 400;
        text-transform: uppercase;
    }

    .movie__actors {
        margin-bottom: calc(${spacing} * 1.5);
    }
`

const Resume = styled.p`
    margin-bottom: calc(${spacing} * 3);
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

const MovieInfos = () => {
    return (
        <>
            <InfosContainer>
                <Info>
                    <i className="fa-solid fa-globe"></i>
                    <p><strong className="strong">Titre original </strong> : Inception </p>
                </Info>
                <Info>
                    <i className="fa-solid fa-globe"></i>
                    <p><strong className="strong">Pays </strong> : USA </p>
                </Info>
                <Info>
                    <i className="fa-regular fa-calendar-days"></i>
                    <p><strong className="strong"> Date de sortie </strong> : 21 juillet 2010 </p>
                </Info>
                <Info>
                    <i className="fa-regular fa-clock"></i>
                    <p><strong className="strong"> Durée </strong> : 150 minutes </p>
                </Info>
                <Info>
                    <i className="fa-solid fa-user-tie"></i>
                    <p><strong className="strong"> Réalisateur </strong> : Christopher Nolan </p>
                </Info>
                <Info>
                    <i className="fa-solid fa-user-group"></i>
                    <p><strong className="strong"> Acteurs </strong> : Leonardo Di Caprio, Joseph Gordon-Levitt, Cillian Murphy... </p>
                </Info>
                <Resume>
                    Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction : spécialité qui consiste à voler les secrets les plus intimes enfouis au plus profond du subconscient durant une phase de rêve. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Une ultime mission pourrait lui permettre de retrouver sa vie passée, accomplir une « inception ».
                </Resume>
                <Video>
                    <iframe src="https://www.youtube.com/embed/CPTIgILtna8?si=946PSC89U4On0Fi5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Video>
            </InfosContainer>
        </>
    )
}

export default MovieInfos
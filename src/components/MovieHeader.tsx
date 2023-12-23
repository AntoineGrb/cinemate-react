import styled from 'styled-components'
import {mediaSizes, spacing} from '../data/styleVariables.js'
import ButtonReturnHomePage from '../components/ButtonReturnHomePage'
import ProfileIcon from './ProfileIcon.js'
import { useState, useEffect } from 'react'

const HeaderBigScreens = styled.header`
    position:relative;
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 500px;
        box-sizing: border-box;
        background-color: black;
    }
`

const HeaderMobile = styled.header<{ $backdropPath: string | null }>`
    height: 300px;
    margin: auto;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(41, 37, 37, 1)), url(${props => handleBackdropImage(props.$backdropPath)});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 1000px; 
        height: 500px;
        background-color: rgba(41, 37, 37, 1);
        background-image: 
            linear-gradient(to right,
                rgba(0, 0, 0, 1) 5%,
                rgba(0, 0, 0, 0.5) 30%,
                rgba(0, 0, 0, 0.5) 70%,
                rgba(0, 0, 0, 1) 95%),
            linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
            url(${props => handleBackdropImage(props.$backdropPath)}); 
        background-size: contain; 
        background-position: center; 
    }
`

const MovieMenu = styled.header`
    position:absolute;
    width:90%;
    max-width: 1300px;
    min-height: 50px;
    margin: calc(${spacing} * 4) auto;
    left:50%;
    transform: translateX(-50%); //Center à l'horizontal
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 95%; 
    }
`

interface MovieHeaderProps {
    backdropPath:string
}

//Gérer l'image de fond => mettre une image lambda si pas fournie par l'API
const handleBackdropImage = (backdropPath: string | null): string => {
    if (backdropPath === null) {
        return 'https://media.gqmagazine.fr/photos/603e6a8da9360b0585bcbc6a/16:9/w_1920,c_limit/108387402';
    } else {
        return `https://image.tmdb.org/t/p/w1280/${backdropPath}`;
    }
}

const MovieHeader = ({backdropPath}: MovieHeaderProps) => {

    //Ici le bouton retour à l'accueil ne sera affiché que pour le mobile. 
    //Pour les écrans PC, il sera gérer au niveau du MoviePoster pour des problématiques d'alignement.
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
            <HeaderBigScreens>
                <MovieMenu >
                    <ButtonReturnHomePage />
                    <ProfileIcon isMobile={isMobile} />
                </MovieMenu>
                <HeaderMobile $backdropPath={backdropPath}> </HeaderMobile>
            </HeaderBigScreens>
        </>
    )
}

export default MovieHeader
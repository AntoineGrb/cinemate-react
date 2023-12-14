import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'

const HeaderBigScreens = styled.header`
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 500px;
        box-sizing: border-box;
        background-color: black;
    }
`

const HeaderMobile = styled.header<{ backdropPath: string | null }>`
    height: 300px;
    margin: auto;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .1), rgba(41, 37, 37, 1)), url(${props => handleBackdropImage(props.backdropPath)});
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
            url(${props => handleBackdropImage(props.backdropPath)}); 
        background-size: contain; 
        background-position: center; 
    }
`

interface MovieHeaderProps {
    backdropPath:string
}

const handleBackdropImage = (backdropPath: string | null): string => {
    if (backdropPath === null) {
        return 'https://media.gqmagazine.fr/photos/603e6a8da9360b0585bcbc6a/16:9/w_1920,c_limit/108387402';
    } else {
        return `https://image.tmdb.org/t/p/w1280/${backdropPath}`;
    }
}

const MovieHeader = ({backdropPath}: MovieHeaderProps) => {

    return (
        <>
            <HeaderBigScreens>
                <HeaderMobile backdropPath={backdropPath}> </HeaderMobile>
            </HeaderBigScreens>
        </>
    )
}

export default MovieHeader
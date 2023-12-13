import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'

const HeaderBigScreens = styled.header`
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 500px;
        box-sizing: border-box;
        background-color: black;
    }
`

const HeaderMobile = styled.header`
    height: 300px;
    margin: auto;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(41, 37, 37, 1)), url('/tests/inception-cover.jpg');
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
        url('/tests/inception-cover.jpg'); 
        background-size: contain; 
        background-position: center; 
    }
`

const MovieHeader = () => {

    //! Gérer les deux headers

    return (
        <>
            <HeaderBigScreens>
                <HeaderMobile> </HeaderMobile>
            </HeaderBigScreens>
        </>
    )
}

export default MovieHeader
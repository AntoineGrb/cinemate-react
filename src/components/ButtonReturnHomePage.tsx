import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'
import { Link } from 'react-router-dom'

const HomeButton = styled.button`
    position:absolute;
    background-color:transparent;
    border:none;
    top:30px; //Placement par rapport à la header
    left:15px;
    display:flex;
    gap:5px;
    align-items:center;
    @media (min-width: ${mediaSizes.phone}) {
        left:30px;  //Placement par rapport à la header
        gap:8px;
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        top:-280px;  //Placement par rapport au poster pour l'aligner
        left:0px;  
        gap:8px;
    }

    p {
        cursor: pointer;
        font-size:1rem;
        @media (min-width: ${mediaSizes.phone}) {
            font-size:1.1rem; 
        }
    }
`

const HomeIcon = styled.i`
    color:white;
    font-size:1rem;
    @media (min-width: ${mediaSizes.phone}) {
        font-size:1.1rem; 
    }
`

const ButtonReturnHomePage = () => {
    return (
        <>
            <Link to='/'>
                <HomeButton> 
                    <HomeIcon className="fa-solid fa-chevron-left" /> <p>Accueil</p>
                </HomeButton>
            </Link>

        </>
    )
}

export default ButtonReturnHomePage
import styled from 'styled-components'
import {mediaSizes, spacing, colors} from '../data/styleVariables.js'
import { Link } from 'react-router-dom'

const IconContainer = styled.div`
    display: flex;
    gap:${spacing};
    align-items: center;
    cursor: pointer;

    i {
        font-size:1.2rem;
    }

    p {
        font-size:1rem;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size:1.1rem; 
        }
    }

    &:active i , &:active p {
        color:${colors.secondHover};
    }

    @media (min-width: ${mediaSizes.smallscreen}) {
        &:hover i , &:hover p {
            color:${colors.secondHover};
        }
    }
`

const ButtonReturnHomePage = () => {
    return (
        <>
            <Link to='/'>
                <IconContainer> 
                    <i className="fa-solid fa-chevron-left" /> 
                    <p>Accueil</p>
                </IconContainer>
            </Link>

        </>
    )
}

export default ButtonReturnHomePage
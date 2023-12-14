import styled from 'styled-components'
import {colors, spacing} from '../data/styleVariables.js'
import { Link } from 'react-router-dom'

const IconsContainer = styled.div`
    display: flex;
    gap: calc(${spacing} * 1.5);
    justify-content: flex-end;
`

const Icon = styled.i`
    color: whitesmoke;
    font-size: 1.5rem;
    cursor: pointer;
    min-width: 30px; //Pour éviter le déplcement des icones adjacentes lors du hover

    &:hover {
        color:${colors.second};

    }
`

const CardIcons = () => {
    return (
        <>
            <IconsContainer>
                <Icon className='fa-regular fa-heart' title="Je veux voir ce film !"/>
                <Icon className='fa-regular fa-circle-check' title="J'ai vu ce film !" />
                <Link to={`https://www.youtube.com/watch?v=YoHD9XEInc0`} target="_blank" title="Je veux voir la bande annonce !">
                    <Icon className='fa-solid fa-clapperboard' />
                </Link>
            </IconsContainer>
        </>
    )
}

export default CardIcons
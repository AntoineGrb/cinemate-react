import styled from 'styled-components'
import {mediaSizes , spacing} from '../data/styleVariables.js'
import { useEffect, useState } from 'react'
import { handleStarColor } from '../utils/handleStarColor.js'

const RateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: calc(${spacing} *0.5);
`

const RateStar = styled.i`
    font-size: 1.3rem;
    color: ${props => props.color};
    position: relative;
    top:-1px;
    left: -3px;
`

const RateValue = styled.p`
    font-size: 1.5rem;
    @media (min-width: ${mediaSizes.largescreen}) {
        font-size: 1.8rem;
    }
`

interface RateProps {
    rate:number
}

const Rate = ({rate}: RateProps) => {

    //Gérer la couleur des étoiles de notation
    const [starColor, setStarColor] = useState('#60A561')

    useEffect(() => {
        const color = handleStarColor(rate); //La fonction est importée d'un autre module
        setStarColor(color);
    },[rate])

    return (
        <>
            <RateContainer>
                <RateStar color={starColor} className='fa-solid fa-star' />
                {/* Manipulation mathématique pour arrondir à 1 chiffre après la virgule à l'inférieur */}
                <RateValue> {Math.floor(rate * 10) / 10 || 'N/A'} </RateValue> 
            </RateContainer>
        </>
    )
}

export default Rate;
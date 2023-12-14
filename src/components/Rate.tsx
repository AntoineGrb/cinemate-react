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

    const value = 7.1; //! Deviendra une prop

    const [starColor, setStarColor] = useState('#60A561')

    useEffect(() => {
        const color = handleStarColor(value);
        setStarColor(color);
    },[])

    return (
        <>
            <RateContainer>
                <RateStar color={starColor} className='fa-solid fa-star' />
                <RateValue> {rate || 'N/A'} </RateValue>
            </RateContainer>
        </>
    )
}

export default Rate;
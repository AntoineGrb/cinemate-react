import styled from 'styled-components'
import {mediaSizes , spacing} from '../utils/styleVariables.js'

const RateContainer = styled.div`
    display: flex;
    align-items: center;
    gap: calc(${spacing} *0.5);
`

const RateStar = styled.i`
    font-size: 1.3rem;
    color: lightgreen;
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

const Rate = () => {
    return (
        <>
            <RateContainer>
                <RateStar className='fa-solid fa-star' />
                <RateValue> 8.2 </RateValue>
            </RateContainer>
        </>
    )
}

export default Rate;
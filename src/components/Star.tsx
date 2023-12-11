import styled from 'styled-components'
import {mediaSizes} from '../utils/styleVariables.js'

const StarShape = styled.i`
    font-size: 1.3rem;
    color: lightgreen;
    position: relative;
    @media (min-width: ${mediaSizes.largescreen}) {
        font-size: 1.8rem;
    }
`

const Star = () => {
    return (
        <StarShape className="movie__rank-star fa-solid fa-star" />
    )
}

export default Star
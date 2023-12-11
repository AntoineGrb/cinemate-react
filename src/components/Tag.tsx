import styled from 'styled-components'
import {colors} from '../utils/styleVariables.js'

const TagPills = styled.p`
    border: none;
    border-radius: 20px;
    background-color: ${colors.elements};
    color: white;
    padding: 5px 10px;
    font-size: 0.9rem;
`

const Tag = () => {
    return (
        <>
            <TagPills> Action </TagPills>        
        </>
    )
}

export default Tag
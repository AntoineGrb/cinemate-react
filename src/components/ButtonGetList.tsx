import styled from "styled-components"
import {spacing, colors, mediaSizes} from '../data/styleVariables.js'

const Button = styled.button`
    width: clamp(50px , 70% , 400px);
    padding: calc(${spacing}*1.2);
    border:none;
    border-radius: 20px;
    background-color: ${colors.elements};
    color:white;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    &:active {
        background-color: ${colors.secondHover};
    }

    @media (min-width: ${mediaSizes.smallscreen}) {
        &:hover {
            background-color: ${colors.secondHover};
        }
    }    
`

interface ButtonProps {
    clickToFetch: () => void
}

const ButtonGetList = ({clickToFetch}: ButtonProps) => {

    return (
        <>
            <Button onClick={() => {clickToFetch()}}> Je veux ma liste de films </Button>
        </>
    )
}

export default ButtonGetList
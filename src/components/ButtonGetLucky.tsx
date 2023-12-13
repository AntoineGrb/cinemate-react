import styled from "styled-components"
import {spacing, colors} from '../data/styleVariables.js'
import {handleScrollAfterClick} from '../utils/handleScrollAfterClick'

const Button = styled.button`
    width: clamp(50px , 80% , 500px);
    padding: ${spacing};
    border:none;
    border-radius: 20px;
    background-color: ${colors.elements};
    color:white;
    cursor: pointer;
    transition: background-color 0.1s ease-out;

    &:hover {
        background-color: ${colors.secondHover};
    }
`

interface ButtonProps {
    clickToFetch: () => void
}

const ButtonGetLucky = ({clickToFetch}: ButtonProps) => {

    return (
        <>
            <Button onClick={() => {clickToFetch() , handleScrollAfterClick()}}> Je veux MON film </Button>
        </>
    )
}

export default ButtonGetLucky
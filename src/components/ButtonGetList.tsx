import styled from "styled-components"
import {spacing, colors} from '../utils/styleVariables.js'

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

const ButtonGetList = () => {
    return (
        <>
            <Button> Je veux ma liste de films </Button>
        </>
    )
}

export default ButtonGetList
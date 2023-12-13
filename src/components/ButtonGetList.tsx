import styled from "styled-components"
import {spacing, colors} from '../data/styleVariables.js'
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

    const handleScrollAfterClick = () => {

        let topDistance = 0;
        if (window.innerWidth < 681) {
            topDistance = 750;
        } 
        else if (window.innerWidth < 1000) {
            topDistance = 550;
        }
        else {
            topDistance = 620
        }

        window.scrollTo({
            top: topDistance,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <Button onClick={handleScrollAfterClick}> Je veux ma liste de films </Button>
        </>
    )
}

export default ButtonGetList
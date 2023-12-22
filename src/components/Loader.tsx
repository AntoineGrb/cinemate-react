import styled, { keyframes } from 'styled-components'
import {colors} from '../data/styleVariables.js'

const LoaderContainer = styled.div<LoaderProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:${props => props.$isFullScreen && '100vh'};
`

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.span`
    text-align:center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #FFF;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;

    &::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-left: 4px solid ${colors.secondHover};
        border-bottom: 4px solid transparent;
        animation: ${rotate} 0.5s linear infinite reverse;
    }
`

interface LoaderProps {
    $isFullScreen:boolean
}

const Loader = ({$isFullScreen}: LoaderProps) => {
    return (
        <>  
            <LoaderContainer $isFullScreen={$isFullScreen}> 
                <Spinner />
            </LoaderContainer>
        </>
    )
}

export default Loader
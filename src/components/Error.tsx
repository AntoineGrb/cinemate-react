//Composant Error chargé lors d'un appel API en erreur

import styled from 'styled-components'

const ErrorContainer = styled.div<ErrorContainerProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:${props => props.$isFullScreen && '100vh'};
`

const ErrorMessage = styled.p`

`

interface ErrorProps {
    message:string,
    $isFullScreen:boolean
}

interface ErrorContainerProps {
    $isFullScreen: boolean;
}

const Error = ({message, $isFullScreen}: ErrorProps) => {
    return (
        <>  
            <ErrorContainer $isFullScreen={$isFullScreen}> 
                <ErrorMessage> {message} </ErrorMessage>
            </ErrorContainer>
        </>
    )
}

export default Error
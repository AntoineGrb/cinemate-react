import styled from 'styled-components'
import {mediaSizes, spacing} from '../data/styleVariables.js'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: calc(${spacing} * 1.5) 0 calc(${spacing} * 1.5);
    border-top: 1px solid white;
    margin-top: 100px; 

    p {
        margin-bottom: 5px
    }
`

const Image = styled.img`
    width: 30px;    
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 50px;
        margin-right: 10px;
    }
`

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <p> Antoine Grubert - nouveau dev web reconverti et heureux ! </p>
                <div>
                    <a href="https://www.facebook.com/agrubert/" target="_blank"> <Image src="/assets/icons/fb.png" /> </a>
                    <a href="https://github.com/AntoineGrb" target="_blank"> <Image src="/assets/icons/git.png" /> </a>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer
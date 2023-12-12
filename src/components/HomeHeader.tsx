import styled from "styled-components"
import {mediaSizes, spacing} from '../utils/styleVariables.ts'
import SearchBar from "./SearchBar"

const Header = styled.header`
    margin: calc(${spacing} * 4) auto;
    @media (max-width: ${mediaSizes.smallscreen}) {
        min-width: 100%;
    }
`

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(${spacing} * 4);
    min-height: 40px;
`

const HeaderLogo = styled.div`
    //A compléter
`

const HeaderTitle = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    font-family: 'Anton', sans-serif;
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin: 75px 0 75px 0;
        font-size: 3rem;
    }
    @media (min-width: ${mediaSizes.largescreen}) {
        font-size: 3.3rem;
    }

    img {
        width: 40px;
        position: relative;
        top: 3px;
    }
`

// const HeaderProfile = styled.a`
//     display: flex;
//     gap:$spacing;
//     align-items: flex-start;
//     cursor: pointer;

//     i, p {
//         transition: color 0.1s ease-out;
//     }

//     &:hover i , &:hover p {
//         color:$color-second-hover;
//     }
// `

const HomeHeader = () => {
    return (
        <>
            <Header>
                <HeaderMenu>
                    <HeaderLogo> Cinémate </HeaderLogo>
                    <SearchBar />
                </HeaderMenu>
                <HeaderTitle> Qu'est ce qu'on se mate ce soir ? <img src="/assets/logo-popcorn.png" /> </HeaderTitle>
            </Header>
        </>
    )
}

export default HomeHeader
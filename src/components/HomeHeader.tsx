import styled from "styled-components"
import {mediaSizes, spacing} from '../data/styleVariables.ts'
import { useState , useEffect } from "react"
import SearchBar from "./SearchBar"
import ProfileIcon from "./ProfileIcon.tsx"

const Header = styled.header`
    margin: calc(${spacing} * 4) auto;
    max-width: 90%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        max-width: 100%;
    }
`

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(${spacing} * 4);
    min-height: 40px;
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

const HomeHeader = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000)
        }
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[])

    return (
        <>
            <Header>
                <HeaderMenu>
                    <ProfileIcon isMobile={isMobile}/>
                    <SearchBar isMobile={isMobile}/>
                </HeaderMenu>
                <HeaderTitle> Qu'est ce qu'on se mate ce soir ? <img src="/assets/logo-popcorn.png" /> </HeaderTitle>
            </Header>
        </>
    )
}

export default HomeHeader
import styled from "styled-components"
import {colors} from '../data/styleVariables.js'
import { useState } from "react"

const SearchContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    i {
        font-size: 1.4rem;
        color:white;
    }
`

const SearchInput = styled.input`
    padding: 10px 15px;
    border-radius: 16px;
    border:1px solid ${colors.back};
    width: clamp(200px, 70vw, 600px);
    background-color: ${colors.elements};
    color:whitesmoke;
    transition: border-color 0.1s ease-out;

    &::placeholder {
        color: whitesmoke;
    }
    &:hover, &:focus {
        border-color: ${colors.secondHover};
    }
`

interface SearchBarProps {
    isMobile: boolean
}

const SearchBar = ({isMobile}: SearchBarProps) => {

    const [isActive, setIsActive] = useState(false);

    //Logique des rendus de la search bar 
    const renderMobileSearch = () => (
        <>
            <SearchInput type="text" placeholder="Rechercher une série" />
            <i onClick={() => setIsActive(false)} className="fa-solid fa-times"></i>
        </>
    )

    const renderMobileGlassIcon = () => (
        <i onClick={() => setIsActive(true)} className="fa-solid fa-magnifying-glass"></i>
    )

    return (
        <>
            <SearchContainer> 
                {isMobile ? (isActive ? renderMobileSearch() : renderMobileGlassIcon()) : <SearchInput type="text" placeholder="Rechercher une série" />}
            </SearchContainer>
        </>
    )
}

export default SearchBar
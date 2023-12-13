import styled from "styled-components"
import {colors} from '../data/styleVariables.js'

const SearchContainer = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
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
    return (
        <>
            <SearchContainer> 
                {
                    isMobile ? (
                        <>
                        <SearchInput type="text" placeholder="Rechercher une série"  />
                        <i className="header-icon fa-solid fa-magnifying-glass"></i>
                        <i className="header-icon fa-solid fa-times"></i>
                        </>
                    )
                    : (
                        <SearchInput type="text" placeholder="Rechercher une série"  />
                    )
                }
                
            </SearchContainer>
        </>
    )
}

export default SearchBar
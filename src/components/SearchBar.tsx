import styled from "styled-components"
import {colors} from '../utils/styleVariables.js'

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

const SearchBar = () => {
    return (
        <>
            <SearchContainer> 
                <SearchInput type="text" placeholder="Rechercher une série"  />
                <i className="header-icon fa-solid fa-magnifying-glass"></i>
                <i className="header-icon fa-solid fa-times hidden"></i>
            </SearchContainer>
        </>
    )
}

export default SearchBar
import styled from "styled-components"
import {colors} from '../data/styleVariables.js'
import { useState } from "react"
import SearchResults from "./SearchResults.js"

const SearchContainer = styled.form`
    display: flex;
    gap: 5px;
    justify-content:flex-end;
    align-items: center;
    width:85%;
    position:relative;

    i {
        font-size: 1.4rem;
        color:white;
    }
`

const SearchInput = styled.input`
    padding: 10px 15px;
    border-radius: 15px;
    border:1px solid ${colors.back};
    width: clamp(200px, 100%, 900px);
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

    const [isInputActive, setIsInputActive] = useState(false);
    const [searchResults, setSearchResults] = useState([
        {id:111, title:'Batman', original_title:"Still Batman", poster_path:"/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg", release_date:"1996-07-15"},
        {id:112, title:'Batman 2', original_title:"Still Batman 2", poster_path:"/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg", release_date:"1996-07-15"},
        {id:112, title:'Batman 2', original_title:"Still Batman 2", poster_path:"/zzoPxWHnPa0eyfkMLgwbNvdEcVF.jpg", release_date:"1996-07-15"},])

    //Logique des rendus de la search bar 
    const renderMobileSearch = () => (
        <>
            <SearchInput type="text" placeholder="Rechercher un film..." />
            <i onClick={() => setIsInputActive(false)} className="fa-solid fa-times"></i>
        </>
    )

    const renderMobileGlassIcon = () => (
        <i onClick={() => setIsInputActive(true)} className="fa-solid fa-magnifying-glass"></i>
    )

    return (
        <>
            <SearchContainer> 
                {isMobile ? (isInputActive ? renderMobileSearch() : renderMobileGlassIcon()) : <SearchInput type="text" placeholder="Rechercher un film..." />}
                {searchResults.length > 0 && <SearchResults results={searchResults} />}
            </SearchContainer>
        </>
    )
}

export default SearchBar
import styled from "styled-components"
import {colors} from '../data/styleVariables.js'
import { useState } from "react"
import SearchResults from "./SearchResults.js"
import useFetchSearchedMovies from "../hooks/useFetchSearchedMovies.js"

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
    width: clamp(200px, 100%, 700px);
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
    const [query, setQuery] = useState<string>('')
    const {searchedMovies} = useFetchSearchedMovies(query);

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    //Afficher/masquer l'input en fonction de la taille de l'écran 
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
                {isMobile ? 
                    (isInputActive ? renderMobileSearch() : renderMobileGlassIcon()) : 
                    <SearchInput 
                        value={query} 
                        onChange={handleQueryChange} 
                        type="text" 
                        placeholder="Rechercher un film..." 
                    />}
                {searchedMovies.length > 0 && <SearchResults results={searchedMovies} />}
            </SearchContainer>
        </>
    )
}

export default SearchBar
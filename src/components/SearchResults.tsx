import styled from "styled-components"
import {mediaSizes, spacing} from '../data/styleVariables.js'
import { Link } from "react-router-dom"

const SearchResultsContainer = styled.div`
    background-color:rgb(104, 98, 102);
    width: clamp(200px, 100%, 700px); 
    padding: 12px 15px;
    border-radius: 20px;
    border: 2px solid white;
    position:absolute;
    top: 50px;
    z-index: 10;
`

const ResultItem = styled.article`
    width: 100%;
    
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${spacing} 5px;
    gap:${spacing};
    @media (min-width: ${mediaSizes.smallscreen}) {
        padding: 10px;
        gap:20px;
    }
`

const ResultItemPoster = styled.div`
    width: 25%;
    min-width:25%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 13%;
        min-width:13%;
    }

    img {
        width: 100%;
        border-radius: 5px;
        @media (min-width: ${mediaSizes.smallscreen}) {
            border-radius: 10px;
        }
    }

`

const ResultItemContent= styled.div`
    h2 {
        word-break: break-all;
        font-size: 1.4rem;
        font-weight: 400;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size: 2rem;
        }
    }

    span {
        word-break: normal;
        font-size: 1rem;
        font-weight: 300;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size: 1.5rem;
        } 
    }

    h3 {
        font-size: .8rem;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size: 1rem;
        } 
    }
`

interface ResultsProps {
    results: ResultObjectProps[]
}

interface ResultObjectProps {
    id:number,
    title:string,
    original_title: string,
    poster_path: string,
    release_date: string
}

const SearchResults = ({results}: ResultsProps) => {
    return (
        <>
            <SearchResultsContainer>
                {results.map(movie => (
                    <Link key={movie.id} to={`movie/${movie.id}`}>
                        <ResultItem key={movie.id}>
                            <ResultItemPoster> 
                                {movie.poster_path ? 
                                    <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt="movie" /> : 
                                    <img src={`/assets/empty-poster.png`} alt="movie" /> } 
                                
                            </ResultItemPoster>
                            <ResultItemContent> 
                                <h2> {movie.title} <span> ({movie.release_date.substring(0,4)}) </span>  </h2>
                                <h3> {movie.original_title} </h3>
                            </ResultItemContent>
                        </ResultItem>
                    </Link>
                ))}
                
            </SearchResultsContainer>
        </>
    )
}

export default SearchResults
import styled from 'styled-components'
import { useState } from 'react'
import {mediaSizes} from '../data/styleVariables.js'
import useFetchMovies from '../hooks/useFetchMovies.js'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm.js'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'
import Loader from '../components/Loader.js'

const HomePageContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    width: 100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 95%;
    }
`

interface Range {
    valueMin:number,
    valueMax:number
}

const HomePage = () => {

    //State liste des films
    // const [movies, setMovies] = useState([]);

    //States appel API
    const [genre, setGenre] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [year, setYear] = useState<Range>({valueMin:2020, valueMax:2029});
    const [duration, setDuration] = useState<Range>({valueMin:0, valueMax:90});
    const [popularity, setPopularity] = useState<Range>({valueMin:0, valueMax:100000});
    const [rating, setRating] = useState<Range>({valueMin:0, valueMax:10});

    //Call API
    const {movies, fetchMovies, isLoading} = useFetchMovies({
        genre,
        country,
        yearMin:year.valueMin,
        yearMax:year.valueMax,
        durationMin:duration.valueMin,
        durationMax:duration.valueMax,
        popularityMin:popularity.valueMin,
        popularityMax: popularity.valueMax,
        ratingMin:rating.valueMin,
        ratingMax:rating.valueMax
    })

    return (
        <>
            <HomePageContainer>
                <HomeHeader />
                <main>
                     <FiltersForm 
                        clickToFetch={fetchMovies} 
                        setGenre={setGenre} 
                        setYear={setYear} 
                        setCountry={setCountry} 
                        setDuration={setDuration}
                        setPopularity={setPopularity}
                        setRating={setRating}
                     />
                     {isLoading && <Loader isFullScreen={false}/>}
                    <MoviesList movies={movies} />
                    <Footer />
                </main>
            </HomePageContainer>
        </>
    )
}

export default HomePage
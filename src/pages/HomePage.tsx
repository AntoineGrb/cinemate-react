import styled from 'styled-components'
import {useState } from 'react'
import {mediaSizes} from '../data/styleVariables.js'
import useFetchMovies from '../hooks/useFetchMovies.js'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm.js'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'
import Loader from '../components/Loader.js'
import Error from '../components/Error.js'

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

    //States appel API
    const [genre, setGenre] = useState<string>(' ');
    const [country, setCountry] = useState<string>(' ');
    const [year, setYear] = useState<Range>({valueMin:1970, valueMax:2029});
    const [duration, setDuration] = useState<Range>({valueMin:0, valueMax:300});
    const [popularity, setPopularity] = useState<Range>({valueMin:0, valueMax:100000});
    const [rating, setRating] = useState<Range>({valueMin:0, valueMax:10});

    //On passe les paramètres au hook useFetchMovies et on récupère ses datas
    const {movies, fetchMovies, isLoading, isError} = useFetchMovies({ 
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
    });

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
                    {isError && <Error message='Erreur lors du chargement des films' $isFullScreen={false} />}
                    {isLoading && !isError && <Loader $isFullScreen={false}/>}
                    {!isLoading && !isError && <MoviesList movies={movies} />}
                </main>
            </HomePageContainer>
            <Footer />
        </>
    )
}

export default HomePage
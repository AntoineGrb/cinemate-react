import styled from 'styled-components'
import { useState , useEffect } from 'react'
import {mediaSizes} from '../data/styleVariables.js'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const HomePageContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    width: 100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 95%;
    }
`

const HomePage = () => {

    //Définir les states pour l'appel API
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [country, setCountry] = useState('');
    const [duration, setDuration] = useState('');
    const [popularity, setPopularity] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        console.log(genre, year, country, duration, popularity, rating)
    },[genre, year, country, duration, popularity, rating])

    //Call API
    const fetchMovies = async () => {
        try {
            //! Faire l'appel avec les données du state
            console.log('fetch', year)
        } catch (error) {
            console.error('Erreur lors de l\'appel')
            //! Ajouter Loader et composant Error
        }
    }

    //! Envoyer les datas dans les composants

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
                        setRating={setRating} />
                    <MoviesList />
                    <Footer />
                </main>
            </HomePageContainer>
        </>
    )
}

export default HomePage
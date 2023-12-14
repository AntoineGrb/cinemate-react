import styled from 'styled-components'
import { useState , useEffect } from 'react'
import {mediaSizes} from '../data/styleVariables.js'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm.js'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'
import axios from 'axios'

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

    //Définir les states pour l'appel API
    const [genre, setGenre] = useState<string>('28');
    const [country, setCountry] = useState<string>('DE');
    const [year, setYear] = useState<Range>({valueMin:2020, valueMax:2029});
    const [duration, setDuration] = useState<Range>({valueMin:0, valueMax:90});
    const [popularity, setPopularity] = useState<Range>({valueMin:0, valueMax:100000});
    const [rating, setRating] = useState<Range>({valueMin:0, valueMax:10});

    useEffect(() => {
        console.log(genre, country, year, duration, popularity, rating)
    },[genre, year, country, duration, popularity, rating])

    //Call API
    const fetchMovies = async () => {
        try {

            //S'authentifier sur l'URL
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmZkYWYxYzY1Yzk2MjlhNmM1NzgyYWJkOTg3ZDIwYSIsInN1YiI6IjY0NmNiYjVjNTRhMDk4MDEzODY1YmM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zW9JUZecD-3qV5GFncQIec_sSVddsnQZWRZPF4VcvCA'
                }
            };

            //Créer l'URL
            const formattedURL = `
            https://api.themoviedb.org/3/discover/movie?
            include_adult=false&
            include_video=false&
            language=fr&
            page=1&
            sort_by=popularity.desc&
            primary_release_date.gte=${year.valueMin}&
            primary_release_date.lte=${year.valueMax}&
            with_runtime.gte=${duration.valueMin}&
            with_runtime.lte=${duration.valueMax}&
            with_origin_country=${country}&
            with_genres=${genre}&
            with_people=&
            vote_average.gte=${rating.valueMin}&
            vote_average.lte=${rating.valueMax}&
            vote_count.gte=${popularity.valueMin}&
            vote_count.lte=${popularity.valueMax}
            `.replace(/\s+/g, ''); //On retire les espaces et sauts de ligne pour la fonction fetch

            const apiResponse = await axios.get(formattedURL , options);
            console.log(apiResponse.data);

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
                        setRating={setRating}
                     />
                    <MoviesList />
                    <Footer />
                </main>
            </HomePageContainer>
        </>
    )
}

export default HomePage
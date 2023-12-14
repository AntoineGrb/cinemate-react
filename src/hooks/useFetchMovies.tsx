import { useState } from "react"
import axios from "axios"

interface useFetchMoviesProps {
    country: string, 
    genre: string, 
    yearMin: number, 
    yearMax: number, 
    durationMin: number, 
    durationMax: number, 
    ratingMin: number, 
    ratingMax: number, 
    popularityMin: number, 
    popularityMax: number
}

const useFetchMovies = (params: useFetchMoviesProps) => {

    const [movies, setMovies] = useState([])
    //! Ajouter loader et error

    //Les options d'authentification de l'API
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
        }
    };

    //Construire l'url
    const formattedURL = `
        https://api.themoviedb.org/3/discover/movie?
        include_adult=false&
        include_video=false&
        language=fr&
        page=1&
        sort_by=popularity.desc&
        primary_release_date.gte=${params.yearMin}&
        primary_release_date.lte=${params.yearMax}&
        with_runtime.gte=${params.durationMin}&
        with_runtime.lte=${params.durationMax}&
        with_origin_country=${params.country}&
        with_genres=${params.genre}&
        with_people=&
        vote_average.gte=${params.ratingMin}&
        vote_average.lte=${params.ratingMax}&
        vote_count.gte=${params.popularityMin}&
        vote_count.lte=${params.popularityMax}
        `.replace(/\s+/g, ''); //On retire les espaces et sauts de ligne pour la fonction fetch

    const fetchMovies = async () => {

        try {
            const apiResponse = await axios.get(formattedURL , options);
            console.log(formattedURL);
            console.log(apiResponse.data.results)
            setMovies(apiResponse.data.results);

        } catch (error) {
            console.error(error)
        }
    }

    return {movies, fetchMovies}
}

export default useFetchMovies
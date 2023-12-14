import { useState } from "react"
import axios from "axios"

interface MovieDetailsProps {
    title:string,
    backdrop_path:string,
    poster_path:string,
    original_language:string,
    original_title:string,
    genres:number[],
    id:number,
    overview:string,
    release_date:string,
    runtime:number,
    vote_average:number
}

const useFetchMovieDetails = (id:number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(null)
    //! Ajouter loader et error

    const fetchMovieDetails = async () => {

        try {
            //Les options d'authentification de l'API
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                }
            };

            //L'URL de l'appel vers le endpoint movie
            const url = `https://api.themoviedb.org/3/movie/${id}?language=fr`
            
            // L'appel
            const apiResponse = await axios.get(url , options);
            console.log('dans le hook:' , apiResponse.data)
            setMovieDetails(apiResponse.data);

        } catch (error) {
            console.error(error)
        }
    }

    return {movieDetails, fetchMovieDetails}
}

export default useFetchMovieDetails
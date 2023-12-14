import { useState } from "react"
import axios from "axios"

interface MovieDetailsProps {
    title:string,
    backdrop_path:string,
    poster_path:string,
    original_language:string,
    original_title:string,
    genres:GenresProps[],
    id:number,
    overview:string,
    release_date:string,
    runtime:number,
    vote_average:number
}

interface GenresProps {
    id:number,
    name:string
}

const useFetchMovieDetails = (id:number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] =useState(false);

    const fetchMovieDetails = async () => {

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

        try {            
            setIsLoading(true)
            setIsError(false);
            // await new Promise(resolve => setTimeout(resolve, 2000));
            const apiResponse = await axios.get(url , options);
            console.log(apiResponse);
            setMovieDetails(apiResponse.data);

        } catch (error) {
            console.error(error);
            setIsError(true);

        } finally {
            setIsLoading(false)
        }
    }

    return {movieDetails, fetchMovieDetails, isLoading, isError}
}

export default useFetchMovieDetails
import { useEffect, useState } from "react"
import axios from "axios"

const useFetchSearchedMovies = (query: string) => {

    const [searchedMovies, setSearchedMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] =useState(false);

    const fetchSearchedMovies = async () => {

        //Les options d'authentification de l'API
        const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        };

        try {
            setSearchedMovies([]);
            setIsLoading(true);
            setIsError(false);
            
            const apiResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1` , options);
            setSearchedMovies(apiResponse.data.results.slice(0,3)); //On ne récupère que les 3 premiers résultats

        } catch (error) {
            console.error(error);
            setIsError(true);

        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (query.length > 0) {
            fetchSearchedMovies();
        } else {
            setSearchedMovies([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return {searchedMovies, setSearchedMovies, fetchSearchedMovies, isLoading, isError}
}

export default useFetchSearchedMovies
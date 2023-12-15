import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { handleScrollAfterClick } from "../utils/handleScrollAfterClick"
import { MoviesContext } from "../context/MoviesContext"

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

    const context = useContext(MoviesContext)
    if (!context) { //Si le contexte est null (ce qui signifirait qu'on est en dehors du provider), on lance une erreur
        throw new Error('')
    }
    const {movies, setMovies} = context //De cette manière movies et setMovies n'ont pas de problème de type

    const [isLoading, setIsLoading] = useState(false);
    const [triggerScroll, setTriggerScroll] = useState(false);
    const [isError, setIsError] =useState(false);

    //Pour lancer le scroll auto quand les films sont chargés
    useEffect(() => {
        if (triggerScroll && !isLoading) {
            handleScrollAfterClick();
            setTriggerScroll(false)
        }
    }, [triggerScroll, isLoading])

    const fetchMovies = async () => {

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

        try {
            setMovies([]);
            setIsLoading(true);
            setIsError(false);
            
            const apiResponse = await axios.get(formattedURL , options);
            setMovies(apiResponse.data.results);

        } catch (error) {
            console.error(error);
            setIsError(true);

        } finally {
            setIsLoading(false);
            setTriggerScroll(true); //Permettre le déclenchement du scroll
        }
    }

    return {movies, fetchMovies, isLoading, isError}
}

export default useFetchMovies
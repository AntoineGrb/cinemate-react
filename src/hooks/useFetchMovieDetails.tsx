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

interface CreditProps {
    known_for_department:string,
    name:string
}

interface GenresProps {
    id:number,
    name:string
}

const useFetchMovieDetails = (id:number) => {

    //Les states récupérés par les 4 calls API
    const [movieDetails, setMovieDetails] = useState<MovieDetailsProps | null>(null);
    const [movieVideo, setMovieVideo] = useState(null);
    const [movieActors, setMovieActors] = useState<CreditProps[]>([]);
    const [movieDirectors, setMovieDirectors] = useState<CreditProps[]>([]);
    const [movieRecommandations, setMovieRecommandations] = useState([])
    //Les states du fetch
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchMovieDetails = async () => {

        //Les options d'authentification de l'API
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
            }
        };

        //Les URL pour les 4 endpoints Details, Videos, Credits et Recommandations
        const urlDetails = `https://api.themoviedb.org/3/movie/${id}?language=fr`;
        const urlVideos = `https://api.themoviedb.org/3/movie/${id}/videos?language=fr`;
        const urlRecommandations = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=fr&page=1`;
        const urlCredits = `https://api.themoviedb.org/3/movie/${id}/credits?language=fr`

        try {            
            setIsLoading(true)
            setIsError(false);

            //Récupérer les données de l'API
            const [responseDetails, responseVideo, responseRecommandations, responseCredits] = await Promise.all([
                axios.get(urlDetails , options),
                axios.get(urlVideos, options),
                axios.get(urlRecommandations, options),
                axios.get(urlCredits, options)
            ])

            //Formater les données de l'API avant envoi vers les composants
            const formatActorsData = (data: CreditProps[]) => {
                const actors = data
                    .filter((el) => el.known_for_department === 'Acting')
                    .slice(0,5)
                return actors
            }

            const formatDirectorData = (data: CreditProps[]) => {
                const directors = data
                    .filter((el) => el.known_for_department === 'Directing')
                return directors
            }

            setMovieDetails(responseDetails.data);
            setMovieVideo(responseVideo.data.results[0]);
            setMovieRecommandations(responseRecommandations.data.results);
            setMovieActors(formatActorsData(responseCredits.data.cast));
            setMovieDirectors(formatDirectorData(responseCredits.data.crew));

        } catch (error) {
            if (axios.isAxiosError(error)) { //On check si on récupère un objet d'erreur axios
                const status = error.response?.status //Axios ne renvoit pas toujours l'objet response en fonction de l'erreur
                if (status === 404) {
                    setErrorMessage("Errer 404 ==> Le film n'a pas été trouvé dans la base !")
                } else {
                    setErrorMessage("Erreur 500 ==> Erreur lors de la communication avec l'API")
                }
            } else { //Autre erreur qui n'est pas lié à axios
                setErrorMessage("Erreur lors de la récupération des données")
            }
            console.error(error);
            setIsError(true);

        } finally {
            setIsLoading(false)
        }
    }

    return {movieDetails, movieVideo, movieRecommandations, movieActors, movieDirectors, fetchMovieDetails, isLoading, isError, errorMessage}
}

export default useFetchMovieDetails
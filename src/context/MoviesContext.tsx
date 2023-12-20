import { useState, createContext, ReactNode } from 'react';

interface MoviesContextType {
    movies:MovieProps[],
    setMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>
}

interface MovieProps {
    backdrop_path: string,
    genre_ids: number[],
    id:number,
    original_language:string,
    release_date:string,
    poster_path:string,
    title:string,
    vote_average:number,
}

// Création d'un contexte avec une valeur par défaut
export const MoviesContext = createContext<MoviesContextType>({
    movies:[],
    setMovies:() => {}
});

// Passage des states au Provider
export const MoviesProvider: React.FC<{ children: ReactNode }> = ({children} ) => {
	
	//Création des states
	const [movies, setMovies] = useState<MovieProps[]>([]);

	//Fournir le contexte aux enfants
	return (
		<MoviesContext.Provider value={{movies, setMovies}}>
			{children}
		</MoviesContext.Provider>
	)
}
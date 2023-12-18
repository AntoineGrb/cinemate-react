import { useState, createContext, ReactNode } from 'react';

interface UserContextProps {
    userList:MovieListedProps[],
    setUserList: React.Dispatch<React.SetStateAction<MovieListedProps[]>>
}

interface MovieListedProps {
    id:number,
    posterPath:string,
    isWished:boolean,
    isLiked:boolean,
    isDisliked:boolean
}

// Création d'un contexte avec une valeur par défaut
export const UserContext = createContext<UserContextProps>({
    userList:[],
    setUserList:() => {}
});

// Passage des states au Provider
export const UserProvider: React.FC<{ children: ReactNode }> = ({children} ) => {
	
	//Création des states
	const [userList, setUserList] = useState<MovieListedProps[]>(() => {
        const savedUserList = localStorage.getItem('userList');
        return savedUserList ? JSON.parse(savedUserList) : [];
    });

	//Fournir le contexte aux enfants
	return (
		<UserContext.Provider value={{userList, setUserList}}>
			{children}
		</UserContext.Provider>
	)
}
import styled from 'styled-components'
import {colors, spacing} from '../data/styleVariables.js'
import { useEffect, useState } from 'react'

const IconsContainer = styled.div`
    display: flex;
    gap: calc(${spacing} * 1.5);
    justify-content: flex-end;
    align-items:center;

    .on {
        color:lightgreen;
    }
`

const Icon = styled.i`
    color: whitesmoke;
    font-size: 1.5rem;
    cursor: pointer;
    min-width: 30px; //Pour éviter le déplcement des icones adjacentes lors du hover

    &:hover {
        // color:${colors.second};
    }
`

interface CardIconsProps {
    movieId: number;
}

interface UserListObjectProps {
    id:number,
    isWished:boolean,
    isLiked:boolean,
    isDisliked:boolean
}

const CardIcons = ({movieId}: CardIconsProps) => {

    const [userList, setUserList] = useState<UserListObjectProps[] | []>([]);

    const [movieWished, setMovieWished] = useState(false);
    const [movieLiked, setMovieLiked] = useState(false);
    const [movieDisliked, setMovieDisliked] = useState(false);

    useEffect(() => {
        console.log(userList);
    },[userList]);

    const toggleWishedList = () => {
        //On déclare des constantes pour maj les statuts, sinon React n'a pas le temps de mettre à jour les states pour les utiliser au sein de la fonction
        const isWishedUpdated = !movieWished //On ne toggle que celui ci
        const isLikedUpdated = false;
        const isDislikedUpdated = false;

        //Gérer les states
        setMovieWished(isWishedUpdated);
        setMovieLiked(isLikedUpdated);
        setMovieDisliked(isDislikedUpdated);

        //Créer l'objet film à ajouter
        const movieToAdd = {
            id:movieId,
            isWished:isWishedUpdated,
            isLiked:isLikedUpdated,
            isDisliked:isDislikedUpdated
        }

        //Retirer le film de la liste s'il existe
        const userListCleaned = userList.filter(movie => movie.id !== movieId);

        //Ajouter le film si le state est à true
        if (isWishedUpdated) {
            setUserList([...userListCleaned, movieToAdd]);
        } else {
            setUserList(userListCleaned)
        }
    };

    const toggleLikedList = () => {
        //On déclare des constantes pour maj les statuts, sinon React n'a pas le temps de mettre à jour les states pour les utiliser au sein de la fonction
        const isWishedUpdated = false
        const isLikedUpdated = !movieLiked; //On ne toggle que celui ci
        const isDislikedUpdated = false;

        //Gérer les states
        setMovieWished(isWishedUpdated);
        setMovieLiked(isLikedUpdated);
        setMovieDisliked(isDislikedUpdated);

        //Créer l'objet film à ajouter
        const movieToAdd = {
            id:movieId,
            isWished:isWishedUpdated,
            isLiked:isLikedUpdated,
            isDisliked:isDislikedUpdated
        }

        //Retirer le film de la liste s'il existe
        const userListCleaned = userList.filter(movie => movie.id !== movieId);

        //Ajouter le film si le state passe à true
        if (isLikedUpdated) {
            setUserList([...userListCleaned, movieToAdd]);
        } else {
            setUserList(userListCleaned)
        }
    }

    const toggleDislikedList = () => {
       //On déclare des constantes pour maj les statuts, sinon React n'a pas le temps de mettre à jour les states pour les utiliser au sein de la fonction
       const isWishedUpdated = false
       const isLikedUpdated = false; 
       const isDislikedUpdated = !movieDisliked; //On ne toggle que celui ci

       //Gérer les states
       setMovieWished(isWishedUpdated);
       setMovieLiked(isLikedUpdated);
       setMovieDisliked(isDislikedUpdated);

       //Créer l'objet film à ajouter
       const movieToAdd = {
           id:movieId,
           isWished:isWishedUpdated,
           isLiked:isLikedUpdated,
           isDisliked:isDislikedUpdated
       }

       //Retirer le film de la liste s'il existe
       const userListCleaned = userList.filter(movie => movie.id !== movieId);

       //Ajouter le film si le state passe à true
       if (isDislikedUpdated) {
           setUserList([...userListCleaned, movieToAdd]);
       } else {
           setUserList(userListCleaned)
       }
    }

    return (
        <>
            <IconsContainer>

                {movieWished ? <Icon onClick={toggleWishedList} className='on fa-solid fa-eye' title="Je veux voir !"/>  
                    : <Icon onClick={toggleWishedList} className='off fa-regular fa-eye' title="Je veux voir !"/>}

                {movieLiked ? <Icon onClick={toggleLikedList} className='on fa-solid fa-thumbs-up' title="J'ai aimé !" />  
                    : <Icon onClick={toggleLikedList} className='off fa-regular fa-thumbs-up' title="J'ai aimé !" />}

                {movieDisliked ? <Icon onClick={toggleDislikedList} className='on fa-solid fa-thumbs-down' title="Je n'ai psa aimé !" />  
                    : <Icon onClick={toggleDislikedList} className='off fa-regular fa-thumbs-down' title="Je n'ai pas aimé !" />}
                
            </IconsContainer>
        </>
    )
}

export default CardIcons
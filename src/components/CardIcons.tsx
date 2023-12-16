import styled from 'styled-components'
import {colors, spacing} from '../data/styleVariables.js'
import { useState } from 'react'

const IconsContainer = styled.div`
    display: flex;
    gap: calc(${spacing} * 1.5);
    justify-content: flex-end;
    align-items:center;
`

const Icon = styled.i`
    color: whitesmoke;
    font-size: 1.5rem;
    cursor: pointer;
    min-width: 30px; //Pour éviter le déplcement des icones adjacentes lors du hover

    &.on {
        color:${colors.second};
    }

    &:hover {
        color:${colors.second};
    }
`

const CardIcons = () => {

    // const [userList, setUserList] = useState([]);

    const [movieWished, setMovieWished] = useState(false);
    const [movieLiked, setMovieLiked] = useState(false);
    const [movieDisliked, setMovieDisliked] = useState(false);

    const toggleWishedList = (e:unknown) => {
        console.log('wished' , movieWished, 'liked' , movieLiked, 'disliked', movieDisliked)
        console.log(e);
        //Gérer les states
        setMovieWished(!movieWished);
        setMovieLiked(false);
        setMovieDisliked(false);

        //!Ajouter à la liste de l'utilisateur
    }

    const toggleLikedList = (e:unknown) => {
        console.log('wished' , movieWished, 'liked' , movieLiked, 'disliked', movieDisliked)
        console.log(e);
        //Gérer les states
        setMovieWished(false);
        setMovieLiked(!movieLiked);
        setMovieDisliked(false);

        //!Ajouter à la liste de l'utilisateur
    }

    const toggleDislikedList = (e:unknown) => {
        console.log('wished' , movieWished, 'liked' , movieLiked, 'disliked', movieDisliked)
        console.log(e);
        //Gérer les states
        setMovieWished(false);
        setMovieLiked(false);
        setMovieDisliked(!movieDisliked);

        //!Ajouter à la liste de l'utilisateur
    }

    return (
        <>
            <IconsContainer>

                {movieWished ? <Icon onClick={e => toggleWishedList(e)} className='on fa-solid fa-eye' title="Je veux voir !"/>  
                    : <Icon onClick={e => toggleWishedList(e)} className='off fa-regular fa-eye' title="Je veux voir !"/>}

                {movieLiked ? <Icon onClick={e => toggleLikedList(e)} className='on fa-solid fa-thumbs-up' title="J'ai aimé !" />  
                    : <Icon onClick={e => toggleLikedList(e)} className='off fa-regular fa-thumbs-up' title="J'ai aimé !" />}

                {movieDisliked ? <Icon onClick={e => toggleDislikedList(e)} className='on fa-solid fa-thumbs-down' title="Je n'ai psa aimé !" />  
                    : <Icon onClick={e => toggleDislikedList(e)} className='off fa-regular fa-thumbs-down' title="Je n'ai pas aimé !" />}
                
            </IconsContainer>
        </>
    )
}

export default CardIcons
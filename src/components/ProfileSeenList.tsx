import styled from "styled-components"
import { spacing, mediaSizes, colors } from "../data/styleVariables"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const UserSeenListContainer = styled.section`
    margin-bottom: calc(${spacing} * 5);
`

const UserSeenListTitle = styled.h2`
    display:inline-block;
    margin-bottom: calc(${spacing} * 2.5);
    border-bottom: 1px solid white;

    i {
        color:white;
        cursor: pointer;
        font-size:1rem;
    }
`

const UserSeenList = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    @media (min-width: ${mediaSizes.tablet}) {
        gap: 30px;
    }

    img {
        width:100%;
    }
`

const Movie = styled.div`
    position:relative;
    width: clamp(100px, 30%, 200px);
`

const IconContainer = styled.div`
    position:absolute;
    top: 15px;
    right: 10px;
    z-index:3;
    display:flex;
    justify-content:center;
    align-items:center;
    color: whitesmoke;
    width:35px;
    height:35px;
    border-radius:50px;
    background-color:white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Icon = styled.i`
    position:relative;
    left:3px;
    top:-0.5px;
    font-size: 1.5rem;
    min-width: 30px; //Pour éviter le déplcement des icones adjacentes lors du hover

    &.on {
        color:${colors.second};
    }
`

const ProfileSeenList = () => {

    const {userList} = useContext(UserContext);

    const seenList = () => {
        return userList.filter(movie => movie.isLiked || movie.isDisliked)
    }

    return (
        <>
            <UserSeenListContainer>
                <UserSeenListTitle>J'ai vu ces films <i className="fa-solid fa-chevron-down"></i> </UserSeenListTitle>
                <UserSeenList>
                    {seenList().length > 0 
                        ? seenList().map(movie => (
                                <Movie>
                                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                                        <img key={movie.id} src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`} alt="movie" />
                                        {movie.isLiked && <IconContainer> <Icon className='on fa-solid fa-thumbs-up' title="J'ai aimé !" /> </IconContainer> }
                                        {movie.isDisliked && <IconContainer> <Icon className='on fa-solid fa-thumbs-down' title="Je n'ai psa aimé !" /> </IconContainer> }
                                    </Link>
                                </Movie>
                            )) 
                        : <p> Aucun film dans la liste... </p>}
                </UserSeenList>
            </UserSeenListContainer>
        </>
    )
}

export default ProfileSeenList
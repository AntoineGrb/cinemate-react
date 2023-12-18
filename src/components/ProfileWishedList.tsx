import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const UserWishedListContainer = styled.section`
    margin-bottom: calc(${spacing} * 5);
`

const UserWishedListTitle = styled.h2`
    display:inline-block;
    margin-bottom: calc(${spacing} * 2.5);
    border-bottom: 1px solid white;

    i {
        color:white;
        cursor: pointer;
        font-size:1rem;
    }
`

const UserWishedList = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    @media (min-width: ${mediaSizes.tablet}) {
        gap: 30px;
    }

    a {
        display:flex;
        width: clamp(100px, 30%, 200px);
    }

    img {
        width: 100%;
        height:auto;
    }
`

const ProfileWishedList = () => {

    const {userList} = useContext(UserContext);

    const wishedList = () => {
        return userList.filter(movie => movie.isWished)
    }

    return (
        <>
            <UserWishedListContainer>
                <UserWishedListTitle>Je veux voir ces films <i className="fa-solid fa-chevron-down"></i> </UserWishedListTitle>
                <UserWishedList>
                    {wishedList().length > 0 
                        ? wishedList().map(movie => (
                                <Link key={movie.id} to={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`} alt="movie" />
                                </Link>
                            )) 
                        : <p> Aucun film dans la liste... </p>}
                </UserWishedList>
            </UserWishedListContainer>
        </>
    )
}

export default ProfileWishedList
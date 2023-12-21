import '../styles/paginate-container.scss'
import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"
import { UserContext } from "../context/UserContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"

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

const ITEMS_PER_PAGE = 5; //Nb items pagination

const ProfileWishedList = () => {

    const {userList} = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(0);

    const wishedList = userList.filter(movie => movie.isWished)

    //Calculer les films à afficher sur la currentPage
    const displayedMovies = wishedList.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1 ) * ITEMS_PER_PAGE
    );

    //Gestion changement de page
    const handlePageClick = (e: {selected: number}) => {
        setCurrentPage(e.selected);
    }

    return (
        <>
            <UserWishedListContainer>
                <UserWishedListTitle>Je veux voir ces films <i className="fa-solid fa-chevron-down"></i> </UserWishedListTitle>
                <UserWishedList>
                    {displayedMovies.length > 0 ? (
                         displayedMovies.map(movie => (
                                <Link key={movie.id} to={`/movie/${movie.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`} alt="movie" />
                                </Link>
                            )) 
                    ) : ( <p> Aucun film dans la liste... </p> )}
                </UserWishedList>
                <ReactPaginate 
                    previousLabel={"Précédent"}
                    nextLabel={"Suivant"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(wishedList.length) / ITEMS_PER_PAGE}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />

            </UserWishedListContainer>
        </>
    )
}

export default ProfileWishedList
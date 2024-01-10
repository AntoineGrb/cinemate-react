import '../styles/paginate-container.scss'
import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"
import { UserContext } from "../context/UserContext"
import { useContext, useState , useEffect } from "react"
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
    gap: 15px;
    aspect-ratio: 2; //Permet de maintenir la hauteur de la liste (en responsive) le temps que les affiches soient chargées 
    max-height: 550px;
    flex-wrap: wrap;
    @media (min-width: ${mediaSizes.tablet}) {
        gap: 30px;
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        aspect-ratio: 4;
        max-height: 400px;
    }

    img {
        width: 100%;
    }

    p {
        margin-bottom: calc(${spacing} * 2.5);
    }
`

const Movie = styled.div`
    position:relative;
    width: clamp(100px, 30%, 300px);
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: clamp(100px, 17%, 200px);
    }
`

const ProfileWishedList = () => {

    const {userList} = useContext(UserContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3); //Le nb d'items par page, variable en fonction de la width de l'écran 

    const updateItemsPerPage = () => {
        const screenWidth = window.innerWidth;
        screenWidth < 1000 ? setItemsPerPage(3) : setItemsPerPage(5);
    }

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => {
            window.removeEventListener("resize", updateItemsPerPage);
        }
    }, [])

    const wishedList = userList.filter(movie => movie.isWished)

    //Calculer les films à afficher sur la currentPage
    const displayedMovies = wishedList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1 ) * itemsPerPage
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
                                <Movie>
                                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                                        <img src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`} alt="movie" />
                                    </Link>
                                </Movie>
                            )) 
                    ) : ( <p> Aucun film dans la liste... </p> )}
                </UserWishedList>
                <ReactPaginate 
                    previousLabel={"Précédent"}
                    nextLabel={"Suivant"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(wishedList.length) / itemsPerPage}
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
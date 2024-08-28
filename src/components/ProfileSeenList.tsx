import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserContext";
import { colors, mediaSizes, spacing } from "../data/styleVariables";

interface UserSeenListProps {
  isEmpty: boolean;
}

const UserSeenListContainer = styled.section`
  margin-bottom: calc(${spacing} * 5);
`;

const UserSeenListTitle = styled.h2`
  display: inline-block;
  margin-bottom: calc(${spacing} * 2.5);
  border-bottom: 1px solid white;

  i {
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const UserSeenList = styled.div<UserSeenListProps>`
  display: flex;
  gap: 15px;
  aspect-ratio: 2; //Permet de maintenir la hauteur de la liste (en responsive) le temps que les affiches soient chargées
  max-height: ${(props) => (props.isEmpty ? "100px" : "550px")};
  flex-wrap: wrap;
  @media (min-width: ${mediaSizes.tablet}) {
    gap: 30px;
  }
  @media (min-width: ${mediaSizes.smallscreen}) {
    aspect-ratio: 4;
    max-height: ${(props) => (props.isEmpty ? "50px" : "400px")};
  }

  img {
    width: 100%;
  }

  p {
    margin-bottom: calc(${spacing} * 2.5);
    display: block;
  }
`;

const Movie = styled.div`
  position: relative;
  width: clamp(100px, 30%, 300px);
  @media (min-width: ${mediaSizes.smallscreen}) {
    width: clamp(100px, 17%, 200px);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Icon = styled.i`
  position: relative;
  left: 3px;
  top: -0.5px;
  font-size: 1.5rem;
  min-width: 30px; //Pour éviter le déplcement des icones adjacentes lors du hover

  &.on {
    color: ${colors.second};
  }

  &.liked {
    color: ${colors.liked};
}   

&.disliked {
    color: ${colors.disliked};
`;

const ProfileSeenList = () => {
  const { userList } = useContext(UserContext); //Provient du local Storage
  const [currentPage, setCurrentPage] = useState(0); //La page courante
  const [itemsPerPage, setItemsPerPage] = useState(3); //Le nb d'items par page, variable en fonction de la width de l'écran

  const updateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    screenWidth < 1000 ? setItemsPerPage(3) : setItemsPerPage(5);
  };

  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const seenList = userList.filter(
    (movie) => movie.isLiked || movie.isDisliked
  );

  //Calculer les films à afficher sur la currentPage
  const displayedMovies = seenList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  //Gestion changement de page
  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected);
  };

  return (
    <>
      <UserSeenListContainer>
        <UserSeenListTitle>
          J'ai vu ces films <i className="fa-solid fa-chevron-down"></i>{" "}
        </UserSeenListTitle>
        <UserSeenList isEmpty={displayedMovies.length === 0}>
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
              <Movie key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w780/${movie.posterPath}`}
                    alt="movie"
                  />
                  {movie.isLiked && (
                    <IconContainer>
                      {" "}
                      <Icon
                        className="on liked fa-solid fa-thumbs-up"
                        title="J'ai aimé !"
                      />{" "}
                    </IconContainer>
                  )}
                  {movie.isDisliked && (
                    <IconContainer>
                      {" "}
                      <Icon
                        className="on disliked fa-solid fa-thumbs-down"
                        title="Je n'ai pas aimé !"
                      />{" "}
                    </IconContainer>
                  )}
                </Link>
              </Movie>
            ))
          ) : (
            <p> Aucun film dans la liste... </p>
          )}
        </UserSeenList>
        <ReactPaginate
          previousLabel={"Précédent"}
          nextLabel={"Suivant"}
          breakLabel={"..."}
          pageCount={Math.ceil(seenList.length) / itemsPerPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </UserSeenListContainer>
    </>
  );
};

export default ProfileSeenList;

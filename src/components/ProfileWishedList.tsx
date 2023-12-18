import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"

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

    img {
        width: clamp(100px, 30%, 200px);
    }
`

const ProfileWishedList = () => {
    return (
        <>
            <UserWishedListContainer>
                <UserWishedListTitle>Je veux voir ces films <i className="fa-solid fa-chevron-down"></i> </UserWishedListTitle>
                <UserWishedList>
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                </UserWishedList>
            </UserWishedListContainer>
        </>
    )
}

export default ProfileWishedList
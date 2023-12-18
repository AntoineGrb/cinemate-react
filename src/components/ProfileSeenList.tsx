import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"

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
        width: clamp(100px, 30%, 200px);
    }
`

const ProfileSeenList = () => {
    return (
        <>
            <UserSeenListContainer>
                <UserSeenListTitle> J'ai vu ces films <i className="fa-solid fa-chevron-down"></i> </UserSeenListTitle>
                <UserSeenList>
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                    <img src="/tests/inception-affiche.jpg" alt="affiche" />
                </UserSeenList>
            </UserSeenListContainer>
        </>
    )
}

export default ProfileSeenList
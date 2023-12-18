import styled from "styled-components"
import { spacing, mediaSizes } from "../data/styleVariables"
import ProfileUserInfos from "../components/ProfileUserInfos"
import ProfileWishedList from "../components/ProfileWishedList"
import ProfileSeenList from "../components/ProfileSeenList"

const ProfilePageContainer = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: auto;
`

const ProfileTitle = styled.h1`
    margin-bottom: calc(${spacing} * 5);
    text-align: center;
    @media (min-width: ${mediaSizes.smallscreen}) {
        text-align: left;
    }

    span {
        font-size: 2rem;
        position: relative;
        top: -5px;
    }
`

const ProfilePage = () => {
    return (
        <>
            <ProfilePageContainer>
                <ProfileTitle> <span>🙋‍♂️</span> AntoineGrb <span>🙋‍♀️</span> </ProfileTitle>
                <ProfileUserInfos />
                <ProfileWishedList />
                <ProfileSeenList />
            </ProfilePageContainer>
        </>
    )
}

export default ProfilePage
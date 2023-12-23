import styled from "styled-components"
import { colors, spacing } from "../data/styleVariables"

const UserInfoContainersContainer = styled.section`
    margin-bottom: calc(${spacing} * 5);;
`

const UserInfoContainersTitle = styled.h2`
    display:inline-block;
    margin-bottom: calc(${spacing} * 2.5);;
    border-bottom: 1px solid white;

    i {
        color:white;
        cursor: pointer;
        font-size:1rem;
    }
`

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    padding: ${spacing} 0;
`

const UserInfoLabel = styled.p`
    width : clamp(120px, 30% , 150px);
`

const UserInfoValue = styled.p`
    width: clamp(100px, 70%, 500px);
    padding: calc(${spacing} * .5) calc(${spacing});
    border-radius: 15px;
    background-color: ${colors.elements};   
`

const UserActionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:5px;
    margin-top:calc(${spacing} * 3);
`

const UserAction = styled.p`
    text-decoration: underline;
`

const ProfileUserInfoContainers = () => {
    return (
        <>
            <UserInfoContainersContainer>
                <UserInfoContainersTitle> Mon profil <i className="fa-solid fa-chevron-down"></i> </UserInfoContainersTitle>
                <UserInfoContainer>
                    <UserInfoLabel> Pseudo : </UserInfoLabel>
                    <UserInfoValue> AntoineGrb </UserInfoValue>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoLabel> Email : </UserInfoLabel>
                    <UserInfoValue> antoine.grubert@google.io </UserInfoValue>
                </UserInfoContainer>
                <UserInfoContainer>
                    <UserInfoLabel> Mot de passe : </UserInfoLabel>
                    <UserInfoValue> xxxxxxxx </UserInfoValue>
                </UserInfoContainer>
                <UserActionsContainer>
                    <UserAction> Modifier ses informations </UserAction>
                    <UserAction style={{color:`${colors.second}`}}> Se déconnecter </UserAction>
                </UserActionsContainer>

            </UserInfoContainersContainer>
        </>
    )
}

export default ProfileUserInfoContainers
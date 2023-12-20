import styled from "styled-components"
import { Link } from "react-router-dom"
import { spacing, mediaSizes } from "../data/styleVariables"
import ProfileIcon from "../components/ProfileIcon"
import ProfileUserInfos from "../components/ProfileUserInfos"
import ProfileWishedList from "../components/ProfileWishedList"
import ProfileSeenList from "../components/ProfileSeenList"
import { useState, useEffect } from "react"

const ProfilePageContainer = styled.div`
    width: 90%;
    max-width: 1300px;
    margin: auto;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 95%;
    }
`

const ProfileHeader = styled.header`
    min-height: 50px;
    margin: calc(${spacing} * 4) auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (min-width: ${mediaSizes.smallscreen}) {
        max-width: 100%;
    }
`

const HomeButtonContainer = styled.div`
    display:flex;
    align-items:center;
    gap: ${spacing};

     p {
        cursor: pointer;
        font-size:1rem;
        @media (min-width: ${mediaSizes.phone}) {
            font-size:1.1rem; 
        }
    }
`

const HomeIcon = styled.i`
    color:white;
    font-size:1rem;
    @media (min-width: ${mediaSizes.phone}) {
        font-size:1rem; 
    }
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

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000)
        }
        window.addEventListener('resize' , handleResize)

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[])

    return (
        <>
            <ProfilePageContainer>
                <ProfileHeader>
                <Link to='/'>
                    <HomeButtonContainer> 
                        <HomeIcon className="fa-solid fa-chevron-left" /> <p>Accueil</p>
                    </HomeButtonContainer> 
                </Link>
                    <ProfileIcon isMobile={isMobile} />
                </ProfileHeader>
                <ProfileTitle> <span>🙋‍♂️</span> AntoineGrb <span>🙋‍♀️</span> </ProfileTitle>
                <ProfileUserInfos />
                <ProfileWishedList />
                <ProfileSeenList />
            </ProfilePageContainer>
        </>
    )
}

export default ProfilePage
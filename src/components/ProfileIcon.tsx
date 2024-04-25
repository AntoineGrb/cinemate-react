import { Link } from "react-router-dom"
import {spacing , colors, mediaSizes} from '../data/styleVariables.ts'
import styled from "styled-components"

const IconContainer = styled.div`
    display: flex;
    gap:${spacing};
    align-items: center;
    cursor: pointer;

    i {
        font-size:1.3rem;
    }

    p {
        font-size:1rem;
        @media (min-width: ${mediaSizes.smallscreen}) {
            font-size:1.1rem; 
        }
    }

    &:active i , &:active p {
        color:${colors.secondHover};
    }

    @media (min-width: ${mediaSizes.smallscreen}) {
        &:hover i , &:hover p {
            color:${colors.secondHover};
        }
    }  
`

interface ProfileIconProps {
    isMobile: boolean
}


const ProfileIcon = ({isMobile}: ProfileIconProps) => {
    return (
        <>
           <Link to='/profile'>
                <IconContainer>
                    <i className="fa-solid fa-user"></i>
                    {!isMobile && <p className="" >Mon profil</p>}
                </IconContainer>
           </Link> 
        </>
    )
}

export default ProfileIcon
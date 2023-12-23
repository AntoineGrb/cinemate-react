import styled from 'styled-components'
import {colors} from '../data/styleVariables.js'
import { genresFormatted } from '../data/formattedData.js'

const TagPills = styled.p`
    border: none;
    border-radius: 20px;
    background-color: ${colors.elements};
    color: white;
    padding: 5px 10px;
    font-size: 0.9rem;
`

interface TagProps {
    genre:number
}

const Tag = ({genre}: TagProps) => {

    //Récupérer le genre formaté => utilisation du tableau genresFormatted dans un module
    const getFormattedGenre = () => {
        const formattedGenre = genresFormatted.find(el => el.value === genre);

        if (formattedGenre) {
            return formattedGenre.name
        } else {
            return genre
        }
    }

    return (
        <>
            <TagPills> {getFormattedGenre()} </TagPills>        
        </>
    )
}

export default Tag
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled.article`
    img {
        width: 100%;

        &:active {
            filter: brightness(0.7);
        }
    }
`

interface RecommandationItemProps {
    id:number,
    posterPath:string
}

const RecommandationItem = ({id, posterPath}: RecommandationItemProps) => {
    return (
        <>
            <Item>
                <Link to={`/movie/${id}`}>
                    <img src={`https://image.tmdb.org/t/p/w780/${posterPath}`} alt="" />
                </Link>
            </Item>
        </>
    )
}

export default RecommandationItem
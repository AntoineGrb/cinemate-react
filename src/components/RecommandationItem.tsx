import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled.article`
    img {
        width: 100%;
    }
`

interface RecommandationItemProps {
    posterPath:string
}

const RecommandationItem = ({posterPath}: RecommandationItemProps) => {
    return (
        <>
            <Item>
                <Link to={`/movie/1`}>
                    <img src={`https://image.tmdb.org/t/p/w780/${posterPath}`} alt="" />
                </Link>
            </Item>
        </>
    )
}

export default RecommandationItem
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled.article`
    img {
        width: 100%;
    }
`

const RecommandationItem = () => {
    return (
        <>
            <Item>
                <Link to={`/movie/1`}>
                    <img src="/tests/inception-affiche.jpg" alt="" />
                </Link>
            </Item>
        </>
    )
}

export default RecommandationItem
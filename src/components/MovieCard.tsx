import styled from 'styled-components'
import {mediaSizes, spacing} from '../utils/styleVariables.js'
import Tag from './Tag.js'
import Rate from './Rate.js'
import { Link } from 'react-router-dom'
import CardIcons from './CardIcons.js'

const Card = styled.article`
    margin-bottom: calc(${spacing} * 3);  
    @media (min-width: ${mediaSizes.smallscreen}) {
        padding-bottom: calc(${spacing} * 2);
        height: 100%;
        margin-bottom: 0;
    }
`

const Cover = styled.div`
    width: 100%;
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 60%;
    }

    img {
        width: 100%;
        @media (min-width: ${mediaSizes.smallscreen}) {
            border-radius: 5px;
            width: 100%;
            max-height: 100%;
        }
    }
`

const Content = styled.div`
    padding: ${spacing} calc(${spacing} * 2);
    @media (min-width: ${mediaSizes.tablet}) {
        padding: calc(${spacing} * 2) 0;
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        height: 40%;
    }
`

const MainInfos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`

const SecondaryInfos = styled.div`
    margin-bottom: calc(${spacing});
`

const Tags = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:${spacing};
    margin-bottom: calc(${spacing} * 1.5);
`

// const Icons = styled.div`

// `



const MovieCard = () => {
    return (
        <>
            <Card>
                <Cover>
                    <Link to={`movie/1`}>
                        <img src="/tests/inception.jpg" alt="cover" />
                    </Link>
                </Cover>
                <Content>
                    <MainInfos>
                        <Link to={`movie/1`}>
                            <h2> Inception </h2> 
                        </Link>
                        <Rate />
                    </MainInfos>
                    <SecondaryInfos>
                        <p> 2009 </p>
                        <p> USA </p>
                    </SecondaryInfos>
                    <Tags>
                        <Tag/>
                        <Tag/>
                    </Tags>
                    <CardIcons />
                </Content>
            </Card>
        </>
    )
}

export default MovieCard
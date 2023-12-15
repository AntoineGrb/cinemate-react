import styled from 'styled-components'
import {mediaSizes} from '../data/styleVariables.js'
import RecommandationItem from './RecommandationItem.js'

const Title = styled.h2`
    margin: 50px 0 20px;
    @media (min-width: ${mediaSizes.smallscreen}) {
        margin: 75px 0 30px;
    }
`

const RecommandationsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (min-width: ${mediaSizes.phone}) {
        grid-template-columns: repeat(3,1fr);
    }
    @media (min-width: ${mediaSizes.smallscreen}) {
        grid-template-columns: repeat(4,1fr);
    }
`

interface RecommandationsProps {
    recommandations: RecommandationObjectProps[]
}

interface RecommandationObjectProps {
    id:number,
    poster_path:string
}

const MovieRecommandations = ({recommandations}: RecommandationsProps) => {
    return (
        <>
            {recommandations.length !== 0 && (
                <> 
                <Title> Films recommandés </Title>
                <RecommandationsList>
                    {recommandations.map(reco => (
                        <RecommandationItem key={reco.id} id={reco.id} posterPath={reco.poster_path} />
                    ))}
                </RecommandationsList>
                </>
            )}
        </>
    )
}

export default MovieRecommandations
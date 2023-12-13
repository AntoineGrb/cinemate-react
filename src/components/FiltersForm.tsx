import styled from "styled-components"
import {mediaSizes, spacing} from '../data/styleVariables.js'
import { genres , years, countries, durations } from "../data/filtersOptions.js"
import ButtonGetList from "./ButtonGetList"
import ButtonGetLucky from "./ButtonGetLucky"
import Filter from "./Filter"


const Filters = styled.section`
    max-width: 90%;
    margin: 0 auto calc(${spacing} * 6);
    @media (min-width: ${mediaSizes.smallscreen}) {
        max-width: 100%;
        margin: 0 0 calc(${spacing} * 6) 0;
    }
`

const FiltersInputs = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom:calc(${spacing} * 3);
    width: 100%;
    @media (min-width: ${mediaSizes.tablet}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

const FiltersButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(${spacing} * 1.5);
    position: relative;
    overflow: hidden;
`

const FiltersForm = () => {
    return (
        <>
            <Filters>
                <FiltersInputs>
                    <Filter label="Genre:" options={genres} />
                    <Filter label="Année:" options={years}/>
                    <Filter label="Pays:" options={countries}/>
                    <Filter label="Durée:" options={durations}/>
                </FiltersInputs>
                <FiltersButtons>
                    <ButtonGetList />
                    <ButtonGetLucky />
                </FiltersButtons>
            </Filters>
        </>
    )
}

export default FiltersForm
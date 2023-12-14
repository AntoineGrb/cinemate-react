import styled from "styled-components"
import {mediaSizes, spacing} from '../data/styleVariables.js'
import { genresOptions , yearsOptions, countriesOptions, durationsOptions, popularityOptions, ratingsOptions } from "../data/filtersOptions.js"
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

interface FiltersFormProps {
    clickToFetch: () => void,
    setGenre:React.Dispatch<React.SetStateAction<string>>,
    setYear:React.Dispatch<React.SetStateAction<Range>>,
    setCountry:React.Dispatch<React.SetStateAction<string>>,
    setDuration:React.Dispatch<React.SetStateAction<Range>>,
    setPopularity:React.Dispatch<React.SetStateAction<Range>>,
    setRating:React.Dispatch<React.SetStateAction<Range>>,
}

interface Range {
    valueMin:number,
    valueMax:number
}

const FiltersForm = ({clickToFetch, setGenre, setYear, setCountry, setDuration, setPopularity, setRating}:FiltersFormProps) => {

    //! - la sélection des filtres change les states locaux des inputs. Au clic sur le bouton

    return (
        <>
            <Filters>
                <FiltersInputs>
                    <Filter setValue={setGenre} label="Genre:" options={genresOptions} />
                    <Filter setValueMinMax={setYear} label="Année:" options={yearsOptions}/>
                    <Filter setValue={setCountry} label="Pays:" options={countriesOptions}/>
                    <Filter setValueMinMax={setDuration} label="Durée:" options={durationsOptions}/>
                    <Filter setValueMinMax={setPopularity} label="Popularité:" options={popularityOptions}/>
                    <Filter setValueMinMax={setRating} label="Notation:" options={ratingsOptions}/>
                </FiltersInputs>
                <FiltersButtons>
                    <ButtonGetList clickToFetch={clickToFetch} />
                    <ButtonGetLucky clickToFetch={clickToFetch}/>
                </FiltersButtons>
            </Filters>
        </>
    )
}

export default FiltersForm
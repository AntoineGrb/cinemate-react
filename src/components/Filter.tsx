import styled from "styled-components"
import {mediaSizes, spacing, colors} from '../data/styleVariables.js'


const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: ${mediaSizes.tablet}) {
        width: 48%;
    }
` 

const Label = styled.label`
    margin-bottom: calc(${spacing} * .8);
`

const Select = styled.select`
    margin-bottom: ${spacing};
    padding: ${spacing} calc(${spacing} * 0.8);
    border:1px solid ${colors.back};
    border-radius: 2px;
    background-color: ${colors.elements};
    color:white;
    cursor: pointer;
    transition: border-color 0.1s ease-out;
    @media (min-width: ${mediaSizes.tablet}) {
        margin-bottom: calc(${spacing} * 2);
    }

    &:hover {
        border-color:${colors.secondHover};
    }
`

const Option = styled.option`
    color:black;
    background-color: rgb(248,240,251);
`
interface FilterProps {
    label: string,
    options: OptionsObjects[],
    setValue?: React.Dispatch<React.SetStateAction<string>>,
    setValueMinMax?: React.Dispatch<React.SetStateAction<Range>>,
}

interface Range {
    valueMin: number,
    valueMax: number
}

interface OptionsObjects {
    name:string,
    value?:string,
    valueMin?:number,
    valueMax?:number
}

const Filter = ({setValue, setValueMinMax, label , options}: FilterProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

        //On cherche dans les options du filtre si on attends une valeur au format 'value' ou une plage au format 'min-max'
        const selectedOption = options.find(option => 
            option.value === e.target.value || `${option.valueMin}-${option.valueMax}` === e.target.value
        );

        if (selectedOption) {
            // S'assurer que valueMin et valueMax sont définis avant de les utiliser
            if (setValueMinMax && selectedOption.valueMin !== undefined && selectedOption.valueMax !== undefined) {
                setValueMinMax({ valueMin: selectedOption.valueMin, valueMax: selectedOption.valueMax });
            
            // S'assurer que la value est définie
            } else if (setValue && selectedOption.value) {
                setValue(selectedOption.value);
            }
        }
    };

    return (
        <>
            <FilterWrapper>
                <Label> {label} </Label>
                <Select onChange={handleChange}>
                    {options.map((option, index) => (
                        // Ici l'option sera soit une valeur simple, soit une plage de deux valeurs 
                        <Option value={option.value || `${option.valueMin}-${option.valueMax}`} key={index}> 
                            {option.name}
                        </Option>
                    ))}
                </Select>
            </FilterWrapper>
        </>
    )
}

export default Filter
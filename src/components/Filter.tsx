import styled from "styled-components"
import {mediaSizes, spacing, colors} from '../utils/styleVariables.js'


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
    margin-bottom: $spacing;
    padding: $spacing calc($spacing * 0.8);
    border:1px solid $color-back;
    border-radius: 2px;
    background-color: $color-elements;
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

const Filter = ({label , options}) => {
    return (
        <>
            <FilterWrapper>
                <Label> {label} </Label>
                <Select>
                    {options.map((option, index) => (
                        <Option key={index}> {option.name} </Option>
                    ))}
                </Select>
            </FilterWrapper>
        </>
    )
}

export default Filter
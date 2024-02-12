import styled from "styled-components"
import {spacing, colors} from '../data/styleVariables.js'
import {useState } from 'react'

interface TooltipIconProps {
    colorTooltipIcon: boolean;
}

const TooltipWrapper = styled.div`
    position: relative;
    display: inline-block;
    cursor: pointer;
`

const TooltipIcon = styled.span<TooltipIconProps>`
    color: ${props => props.colorTooltipIcon ? colors.second : 'white'};
`

const TooltipMessage = styled.span`
    margin-left: ${spacing};
    color: ${colors.second};
`

const Tooltip = () => {

    const [showTooltipMessage, setShowTooltipMessage] = useState(false);
    const [colorTooltipIcon, setColorTooltipIcon] = useState(false);

    const handleClick = () => { 
        setShowTooltipMessage(!showTooltipMessage);
        setColorTooltipIcon(!colorTooltipIcon);
    }

    return (
        <>
            <TooltipWrapper>
                <TooltipIcon colorTooltipIcon={colorTooltipIcon} title="Cliquez pour voir le message" onClick={handleClick}>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </TooltipIcon>
                {showTooltipMessage && <TooltipMessage>Problème avec ce champ sur l'API TMDB </TooltipMessage>}
            </TooltipWrapper>
        </>
    )
}

export default Tooltip
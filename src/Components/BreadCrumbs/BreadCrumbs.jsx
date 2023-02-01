import React from 'react'
import styled from 'styled-components'
import Home from '../../Assets/Images/home-icon.png'

export const BreadCrumbs = () => {
  return (
    <StyledBread>
        <img src={Home} /><p>Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs/Crumbs...</p>
    </StyledBread>
  )
}
const StyledBread = styled.div`
grid-area: BRED;

margin-top: 2vw;
border-top: 1px solid ${props => props.theme.colors.interaction}40;
border-bottom: 1px solid ${props => props.theme.colors.interaction}40;
height: 2vw;
p {
    font-size: 1vw;
    margin-left: 0.8vw;
    display: inline-block;
    color: ${props => props.theme.colors.onBackground};
}
`
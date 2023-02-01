import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import NavLogo from '../../Assets/Images/header-bg.png'

export const NavBar = () => {
  return (
      <StyledNav>
        <Link to="/"><img src={NavLogo} alt="Navigation Bar Logo" /></Link>
        <div className="nav-items">
          <Link to="/">Forside</Link>
          <Link to="/sales-and-trading-conditions">Salgs- og handelsbetingelser</Link>
          <Link to="/login">Login</Link>
        </div>
      </StyledNav>
  )
}

const StyledNav = styled.nav`
grid-area: NBAR;
margin-top: 1.3vw;
img {
  width: 100%;
}
.nav-items {
  margin-top: -7.7%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  a {
    vertical-align: center;
    text-decoration: none;
    margin-right: 2vw;
    margin-top: 0.3vw;
    font-size: 1.3vw;
    color: ${props => props.theme.colors.onBackground};
    :nth-child(3) {
      margin-top: 0vw;
      background-color: ${props => props.theme.colors.interaction};
      color: ${props => props.theme.colors.darkInteraction};
      padding: 0.3vw 0.8vw;
      border-radius: 4px;
    }
  }
}
`
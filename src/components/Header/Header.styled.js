import {AppBar, Toolbar, styled } from "@mui/material"
import { NavLink, Link } from "react-router-dom"

export const StyledAppBar = styled(AppBar)`
    position: sticky;
    background-color: #7B586B;
    max-width: 800px;
    margin: 0 auto;
`

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    display: flex;    
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover, &:focus{
        color: #1D0F0F;
    }
`

export const StyledNavLink = styled(NavLink)`
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: inherit;

    & .active {
        text-decoration: underline;
    }

    &:hover, &:focus{
        color: #1D0F0F;       
    }
`
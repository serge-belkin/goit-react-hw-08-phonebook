import styled from '@emotion/styled';
import { IconButton, styled as styledMui } from "@mui/material"

export const StyledList = styled.ul`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`

export const StyledIconButton = styledMui(IconButton)`
    position: sticky;
    top: 75px;
    left: 500px;
    z-index: 1000;
        color: #7B586B;
        border: 2px solid #7B586B;
        background-color: #fff;

    &:hover, &:focus{

        color: white;
    background-color: #7B586B;
        
    }

    @media screen and (min-width: 500px) {  
        left: 50%;
    }
`
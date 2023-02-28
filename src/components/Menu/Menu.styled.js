import { Button, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledButton = styled(Button)`
    &:hover, &:focus{
        color: #453C41;
    }
`

export const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: inherit;
`
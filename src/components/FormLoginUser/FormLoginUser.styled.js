import { Grid, IconButton, Button, styled } from "@mui/material"
import { TextField as TextFieldFormik } from 'formik-mui';
import { Link } from "react-router-dom"

export const StyledTextField = styled(TextFieldFormik)`
  /* & label.Mui-focused {
    color: #1D0F0F;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #7B586B;
    }
  } */
`;

export const StyledGrid = styled(Grid)`
  position: relative;
`

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 23px;
  right: 10px;
`

export const StyledButton = styled(Button)`
    padding: 6px 6px;
    background-color: #7B586B;

    &:hover, &:focus{
        background-color: #1D0F0F;
    }
`

export const StyledLink = styled(Link)`
    color: inherit;
`
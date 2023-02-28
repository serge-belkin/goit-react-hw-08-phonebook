import { Grid, IconButton, Button, styled } from "@mui/material"
import { TextField as TextFieldFormik } from 'formik-mui';

import { Link } from "react-router-dom"

export const StyledTextField = styled(TextFieldFormik)`
/* MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-dbcl7b-MuiFormControl-root-MuiTextField-root */


/* MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-colorPrimary Mui-error Mui-required MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root */
  /* & label.Mui-focused {
    color: #1D0F0F;
  }  */

  /* MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-error MuiInputBase-fullWidth MuiInputBase-formControl css-md26zr-MuiInputBase-root-MuiOutlinedInput-root{
    border-color: green;   
  } */

  /* &.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
    border-color: #7B586B;  
  }    
       */
  /* &.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {      
    border-color: green;        
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
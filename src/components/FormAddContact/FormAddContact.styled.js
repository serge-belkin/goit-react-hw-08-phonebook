import { Button, styled } from "@mui/material"
import { TextField as TextFieldFormik } from 'formik-mui';

export const StyledTextField = styled(TextFieldFormik)`
  /* & label.Mui-focused {
    color: #1D0F0F;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: 7B586B;
    }
  } */
`;

export const StyledButton = styled(Button)`
    background-color: 7B586B;

    &:hover, &:focus{
        background-color: #1D0F0F;
    }
`

import styled from '@emotion/styled';
import {TextField, styled as styledMui } from "@mui/material"

export const StyledWrap = styled.div`

    display: inline-block;
    top: 70px;
    transform: translateX(140px);
    z-index: 1000;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #fff;
`

export const StyledTextField = styledMui(TextField)`
  & label.Mui-focused {
    color: #1D0F0F;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #7B586B;
    }
  }
`;
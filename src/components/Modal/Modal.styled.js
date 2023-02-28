import { Box, Button, styled as styledMui } from '@mui/material';

export const StyledBox = styledMui(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    padding: 8px;
    min-width: 320px;
    color: #1D0F0F;
    background-color: #D4DBE2;
    border: 2px solid #000;
    box-shadow: 24px;
    border-radius: 8px;
`

export const StyledButton = styledMui(Button)`
    position: absolute;
    right: 10px;
    padding: 6px 6px;
    min-width: auto;
    color: #7B586B;
    background-color: #D4DBE2;

    &:hover, &:focus{
        background-color: #7B7C81;
    }
`
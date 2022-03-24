import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';
import { SnackbarProvider } from 'notistack';
import React, { FC, ReactNode } from 'react';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary:  {
            main: teal[200],
        }, 
        secondary: {
            main: purple[500],
        },
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    padding: '12px 16px',
                },
                startIcon: {
                    marginRight: 8,
                },
                endIcon: {
                    marginLeft: 8,
                },
            },
        },
    },
});

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <SnackbarProvider>{children}</SnackbarProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

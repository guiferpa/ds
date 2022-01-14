import React from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import * as tokens from './tokens';
import GlobalStyle from './global-style';

interface ThemeProviderProps {}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = (props) => {
  const theme: DefaultTheme = { ...tokens };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>
        {props.children}
      </StyledThemeProvider>
    </>
  );
}

export default ThemeProvider;
import { ThemeProvider as BaseThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';
import theme from './theme';

type Props = { children: ReactNode };

const ThemeProvider = ({ children }: Props) => {
  return (
    <>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </>
  );
};

export default ThemeProvider;

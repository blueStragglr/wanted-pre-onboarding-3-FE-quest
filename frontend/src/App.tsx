import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { ThemeState } from './context/ThemeContext';
import { useThemeContext } from './hooks/useThemeContext';
import { GlobalStyle } from './util/style/globalStyle';
import { darkTheme, lightTheme } from './util/style/theme';


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

function App() {
  const {isDark} : ThemeState = useThemeContext()

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Outlet />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

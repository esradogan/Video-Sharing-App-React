import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu"
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";
import { Home } from "./pages/Home"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Video } from "./pages/Video";


const Container = styled.div`
display : flex;
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
`

const Main = styled.div`
flex: 7`

const Wrapper = styled.div``


function App () {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" index element={<Home/>}></Route>
                <Route path="video">
                  <Route path=":id" element={<Video/>}></Route>

                </Route>

              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

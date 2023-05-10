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
import { SignIn } from "./pages/SignIn";


const Container = styled.div`
display : flex;
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text};
`

const Main = styled.div`
flex: 7`

const Wrapper = styled.div`
padding: 16px 24px;
`


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
                <Route path="/">
                  <Route index element={<Home type="random" />}></Route>
                  <Route path="trend" element={<Home type="trend" />}></Route>
                  <Route path="subscribe" element={<Home type="subscribe" />}></Route>
                  <Route path="signin" index element={<SignIn />}></Route>
                </Route>

                <Route path="video">
                  <Route path=":id" element={<Video />}></Route>

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

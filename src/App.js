import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/sign-up/SignupPage";
// import SigninPage from "./components/SignInPage";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <GlobalStyles />

      <UserContext.Provider value={{ user, setUser }}>
        <Content>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />}></Route>
              <Route path="/cadastro" element={<SignupPage />}></Route>
            </Routes>
          </BrowserRouter>
        </Content>
      </UserContext.Provider>
    </>
  );
}

const Content = styled.div`
  max-width: 375px;
  width: 100vw;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;

  font-family: "Lexend Deca", sans-serif;

  * {
    box-sizing: border-box;
  }
`;

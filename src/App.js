import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

import LoginPage from "./components/LoginPage";
import SignupPage from "./components/sign-up/SignupPage";
import Home from "./components/home/Home";
import MyCart from "./components/cart/Cart";
import ProductPage from "./components/product/ProductPage";
// import SigninPage from "./components/SignInPage";

export default function App() {
    const [user, setUser] = useState({});
    const [myCart, setMyCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(0);
    const [isSearching, setIsSearching] = useState(false);

    return (
        <>
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                    myCart,
                    setMyCart,
                    products,
                    setProducts,
                    reload,
                    setReload,
                    isSearching,
                    setIsSearching,
                }}
            >
                <Content>
                    <GlobalStyles />

                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<LoginPage />}></Route>
                            <Route
                                path='/cadastro'
                                element={<SignupPage />}
                            ></Route>
                            <Route path='/home' element={<Home />}></Route>
                            <Route path='/cart' element={<MyCart />}></Route>
                            <Route
                                path='/home/:id'
                                element={<ProductPage />}
                            ></Route>
                        </Routes>
                    </BrowserRouter>
                </Content>
            </UserContext.Provider>
        </>
    );
}

const Content = styled.div`
    max-width: 375px;
    min-width: 100vw;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    overflow-y: scroll;

    font-family: "Lexend Deca", sans-serif;

    * {
        box-sizing: border-box;
    }
`;

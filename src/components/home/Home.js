import styled from "styled-components";
import Header from "./Header";
import Searches from "./Searches";
import Results from "./Results";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Home() {
    const { products, setProducts } = useContext(UserContext);

    return (
        <Wrapper>
            <Header />
            <Searches products={products} setProducts={setProducts} />
            <Results products={products} setProducts={setProducts} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 18px;

    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;

    min-height: 100vh;
`;

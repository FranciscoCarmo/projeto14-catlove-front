import styled from "styled-components";
import Header from "./Header";
import Searches from "./Searches";
import Results from "./Results";
import { useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

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

  background-color: #fcdacc;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

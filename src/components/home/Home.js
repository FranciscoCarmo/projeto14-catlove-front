import styled from "styled-components";
import Header from "./Header";
import Searches from "./Searches";
import Results from "./Results";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Searches />
      <Results />
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

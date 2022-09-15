import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { RiFilterFill } from "react-icons/ri";

export default function Searches() {
  return (
    <Wrapper>
      <IconDiv>
        <FiSearch />
      </IconDiv>
      <TextSearch type="text" placeholder="Pesquisa"></TextSearch>
      <Filter>
        <RiFilterFill />
      </Filter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;

  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconDiv = styled.div`
  position: absolute;
  left: 18px;
  display: flex;
  align-items: center;
`;

const TextSearch = styled.input`
  height: 30px;
  width: 290px;

  border: none;
  border-radius: 5px;
  padding-left: 40px;

  :placeholder {
  }

  :active {
  }
`;

const Filter = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 6px;
`;

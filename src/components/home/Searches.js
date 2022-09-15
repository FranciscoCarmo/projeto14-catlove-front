import styled from "styled-components";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiFilterFill } from "react-icons/ri";
import { getTextFilteredProducts } from "../../service/axiosCatLove";

export default function Searches({ products, setProducts }) {
  const [textSearch, setTextSearch] = useState("");

  function handleEnter(e) {
    if (e.key === "Enter") {
      const requisicao = getTextFilteredProducts(textSearch);

      requisicao
        .then((resposta) => {
          console.log("Deu certo");
          setProducts([...resposta.data]);

          // setTextSearch("");
        })
        .catch(() => {
          alert("Falha ao pegar os produtos filtrados");

          console.log(requisicao);
          setTextSearch("");
        });
    }
  }

  return (
    <Wrapper>
      <IconDiv>
        <FiSearch />
      </IconDiv>
      <TextSearch
        type="text"
        placeholder="Pesquisa"
        onChange={(e) => setTextSearch(e.target.value)}
        value={textSearch}
        onKeyDown={(e) => handleEnter(e)}
      ></TextSearch>
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

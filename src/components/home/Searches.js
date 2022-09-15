import styled from "styled-components";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiFilterFill } from "react-icons/ri";
import { getTextFilteredProducts } from "../../service/axiosCatLove";

import MenuFilter from "./MenuFilter";

export default function Searches({ products, setProducts }) {
  const [textSearch, setTextSearch] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  function handleEnter(e) {
    if (e.key === "Enter") {
      const requisicao = getTextFilteredProducts(textSearch);

      requisicao
        .then((resposta) => {
          console.log("Deu certo");
          setProducts([...resposta.data]);
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
      <Filter
        onClick={() => {
          setIsFiltering(true);
          console.log(isFiltering);
        }}
      >
        <RiFilterFill />
      </Filter>

      {/* Pagina do filtro */}

      <Fosco active={isFiltering} onClick={() => setIsFiltering(false)}></Fosco>
      <Menu active={isFiltering}>
        <MenuFilter products={products} setProducts={setProducts} />
      </Menu>
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

const Fosco = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  display: ${(props) => (props.active ? "flex" : "none")};

  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  position: absolute;
  bottom: -200px;
  left: calc(50vw - 150px);
  display: ${(props) => (props.active ? "flex" : "none")};

  justify-content: center;
  align-items: center;
`;

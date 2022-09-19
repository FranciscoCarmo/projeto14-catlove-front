import styled from "styled-components";
import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiFilterFill } from "react-icons/ri";
import { BsFillHandbagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import { getTextFilteredProducts } from "../../service/axiosCatLove";

import MenuFilter from "./MenuFilter";

export default function Searches() {
  const { products, setProducts } = useContext(UserContext);
  const [textSearch, setTextSearch] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);
  const { isSearching, setIsSearching } = useContext(UserContext);

  const navigate = useNavigate();

  function handleEnter(e) {
    if (e.key === "Enter") {
      const requisicao = getTextFilteredProducts(textSearch);
      requisicao
        .then((resposta) => {
          setIsSearching(true);
          setProducts([...resposta.data]);
        })
        .catch(() => {
          alert("Falha ao pegar os produtos filtrados");
          setTextSearch("");
        });
    }
  }

  function handleClick() {
    const requisicao = getTextFilteredProducts(textSearch);
    requisicao
      .then((resposta) => {
        setIsSearching(true);
        setProducts([...resposta.data]);
      })
      .catch(() => {
        alert("Falha ao pegar os produtos filtrados");
        setTextSearch("");
      });
  }

  return (
    <Wrapper>
      <Filter
        onClick={() => {
          setIsFiltering(true);
        }}
      >
        <RiFilterFill />
      </Filter>
      <TextBox>
        <TextSearch
          type="text"
          placeholder="Pesquisa"
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          onKeyDown={(e) => handleEnter(e)}
        ></TextSearch>
        <IconDiv
          onClick={() => {
            handleClick();
          }}
        >
          <FiSearch />
        </IconDiv>
      </TextBox>
      <Filter
        onClick={() => {
          navigate("/cart");
        }}
      >
        <BsFillHandbagFill />
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
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  position: relative;

  display: flex;

  align-items: center;
`;

const IconDiv = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TextSearch = styled.input`
  height: 45px;
  width: 55vw;
  border: none;
  border-radius: 10px;
  padding-left: 40px;

  outline: 0;

  ::placeholder {
    font-size: 16px;
  }

  :active {
  }
`;

const Filter = styled.div`
  height: 45px;
  width: 45px;
  background-color: white;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);

  :hover {
    box-shadow: none;
    filter: brightness(1.2);
  }

  :active {
    transform: translateY(7px);
    transition: all 0.5s ease-in;
  }
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

const TextBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0 10px;
  box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);
`;

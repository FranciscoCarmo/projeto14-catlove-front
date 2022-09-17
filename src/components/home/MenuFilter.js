import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { getProductsOfCategory } from "../../service/axiosCatLove";

export default function MenuFilter() {
  const { products, setProducts } = useContext(UserContext);

  function handleSelect(e) {
    // if (!e.target.value) return;

    const requisicao = getProductsOfCategory(e.target.value);

    requisicao
      .then((resposta) => {
        console.log("Deu certo");

        setProducts([...resposta.data]);
      })
      .catch(() => {
        alert("Falha ao pegar os produtos filtrados por categoria");

        console.log(requisicao);
      });
  }

  return (
    <Wrapper onChange={(e) => handleSelect(e)}>
      <h1>Categorias</h1>
      <Inputs>
        <div>
          <input type="radio" value="higiene" name="category" /> Higiene
        </div>
        <div>
          <input type="radio" value="rações" name="category" /> Rações
        </div>
        <div>
          <input type="radio" value="brinquedos" name="category" /> Brinquedos
        </div>
        <div>
          <input type="radio" value="petiscos" name="category" /> Petiscos
        </div>
        <div>
          <input type="radio" value="" name="category" /> Todas
        </div>
      </Inputs>
    </Wrapper>
  );
}
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  div {
    display: flex;
    align-items: center;
  }

  /* & > :last-child {
    margin-right: 30px;
  } */

  input {
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    cursor: pointer;
    height: 20px;
    width: 20px;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
  }

  input:before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
  }

  input:checked:before {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 250px;
  width: 250px;

  background-color: pink;
  border-radius: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    align-self: center;
  }

  input {
    margin-right: 25px;
    font-weight: bold;

    margin-left: 30%;
  }
`;

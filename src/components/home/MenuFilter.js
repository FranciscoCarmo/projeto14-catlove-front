import styled from "styled-components";
import { getProductsOfCategory } from "../../service/axiosCatLove";

export default function MenuFilter({ products, setProducts }) {
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
        <input type="radio" value="" name="category" checked /> Todas
      </div>
    </Wrapper>
  );
}

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

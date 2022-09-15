import styled from "styled-components";
import OneProduct from "./OneProduct";
import { useState, useEffect } from "react";
import { getProducts } from "../../service/axiosCatLove";

export default function Results() {
  const [products, setProducts] = useState([]);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);

  const arr1 = [];
  const arr2 = [];

  let arrayProdutos = [];

  function displayProducts() {
    const requisicao = getProducts();

    requisicao
      .then((resposta) => {
        console.log("Deu certo");
        arrayProdutos = [...resposta.data];
        console.log(resposta.data);

        for (let i = 0; i < resposta.data.length; i++) {
          if (i % 2 == 0) arr1.push(resposta.data[i]);
          else arr2.push(resposta.data[i]);
        }
        setArray1([...arr1]);
        setArray2([...arr2]);
      })
      .catch(() => {
        alert("Falha ao pegar os produtos");

        console.log(requisicao);
      });

    // Divide o array
  }

  useEffect(displayProducts, []);

  return (
    <Wrapper>
      <Fila>
        <Title>
          <h1>Produtos encontrados</h1>
        </Title>
        {array1.map((produto) => {
          return <OneProduct produto={produto} key={produto._id} />;
        })}
      </Fila>
      <Fila>
        {array2.map((produto) => {
          return <OneProduct produto={produto} key={produto._id} />;
        })}
      </Fila>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;

  overflow-y: scroll;

  display: flex;
  justify-content: space-around;
`;

const Fila = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

const Title = styled.div`
  width: 90%;
  height: 50px;
  text-overflow: wrap;
  margin-top: 20px;

  h1 {
    font-size: 18px;
    font-weight: bold;
  }
`;

const Product = styled.div`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 8px;

  margin-top: 20px;
`;

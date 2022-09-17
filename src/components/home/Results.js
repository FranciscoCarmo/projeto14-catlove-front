import styled from "styled-components";
import OneProduct from "./OneProduct";
import { useState, useEffect, useContext } from "react";
import { getProducts } from "../../service/axiosCatLove";
import UserContext from "../../contexts/UserContext";
import MyCart from "../cart/Cart";

export default function Results() {
    const { products, setProducts } = useContext(UserContext);
    const { isSearching, setIsSearching } = useContext(UserContext);

    function displayProducts() {
        const requisicao = getProducts();

        requisicao
            .then((resposta) => {
                console.log("Deu certo");
                setProducts([...resposta.data]);
                console.log(resposta.data);
            })
            .catch(() => {
                alert("Falha ao pegar os produtos");

                console.log(products);
            });
    }

    useEffect(displayProducts, []);

    return (
        <Wrapper>
            <Fila>
                <Title>
                    <h1>
                        {isSearching
                            ? `Produtos Encontrados: ${products.length}`
                            : "Todos os Produtos"}
                    </h1>
                </Title>
                {products.map((produto, i) => {
                    if (i % 2 === 0) {
                        return;
                    }
                    return <OneProduct produto={produto} key={produto._id} />;
                })}
            </Fila>
            <Fila>
                {products.map((produto, i) => {
                    if (i % 2 !== 0) {
                        return;
                    }
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
    width: 45%;
`;

const Title = styled.div`
    width: 90%;
    height: 50px;
    text-overflow: wrap;
    margin: 20px 0;

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

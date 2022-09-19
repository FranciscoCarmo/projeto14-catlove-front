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
                setProducts([...resposta.data]);
            })
            .catch(() => {
                alert("Falha ao pegar os produtos");
            });
    }

    useEffect(displayProducts, []);

    return (
        <Wrapper>
            <Fila>
                <Title>
                    <h1>
                        {isSearching
                            ? `${products.length} Produtos Encontrados`
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
    width: 95%;
    min-height: 30px;
    text-overflow: wrap;
    margin: 20px 0 5px;

    h1 {
        font-size: 20px;
        font-weight: bold;
        line-height: 30px;
    }
`;

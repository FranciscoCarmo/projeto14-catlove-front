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

    const navigate = useNavigate();

    function handleEnter(e) {
        if (e.key === "Enter") {
            const requisicao = getTextFilteredProducts(textSearch);
            console.log(textSearch);

            requisicao
                .then((resposta) => {
                    console.log("Deu certo");
                    setProducts([...resposta.data]);
                    console.log([...resposta.data]);
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
            <Filter
                onClick={() => {
                    setIsFiltering(true);
                    console.log(isFiltering);
                }}
            >
                <RiFilterFill />
            </Filter>
            <TextBox>
                <TextSearch
                    type='text'
                    placeholder='Pesquisa'
                    onChange={(e) => setTextSearch(e.target.value)}
                    value={textSearch}
                    onKeyDown={(e) => handleEnter(e)}
                ></TextSearch>
                <IconDiv>
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

            <Fosco
                active={isFiltering}
                onClick={() => setIsFiltering(false)}
            ></Fosco>
            <Menu active={isFiltering}>
                <MenuFilter products={products} setProducts={setProducts} />
            </Menu>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-around;

    padding: 0 20px;
    margin-top: 10px;
    position: relative;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const IconDiv = styled.div`
    position: absolute;
    left: 10px;
    display: flex;
    align-items: center;
`;

const TextSearch = styled.input`
    height: 45px;
    width: 60vw;
    border: none;
    border-radius: 10px;
    padding-left: 40px;

    :placeholder {
    }

    :active {
    }
`;

const Filter = styled.div`
    height: 45px;
    width: 45px;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 10px;
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
    margin: 0 10px;
`;

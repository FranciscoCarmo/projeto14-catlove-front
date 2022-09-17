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
                    <input type='radio' value='higiene' name='category' />
                    <label>Higiene</label>
                </div>
                <div>
                    <input type='radio' value='rações' name='category' />
                    <label>Rações</label>
                </div>
                <div>
                    <input type='radio' value='brinquedos' name='category' />
                    <label>Brinquedos</label>
                </div>
                <div>
                    <input type='radio' value='petiscos' name='category' />
                    <label>Petiscos</label>
                </div>
                <div>
                    <input type='radio' value='' name='category' />
                    <label>Todas</label>
                </div>
            </Inputs>
        </Wrapper>
    );
}
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    transform: translateX(-40px);

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    label {
        transform: translateX(-10px);
    }

    /* & > :last-child {
    margin-right: 30px;
  } */

    input {
        appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        height: 20px;
        width: 20px;
        border: 2px solid #ff6b64;
        border-radius: 50%;
    }

    input:before {
        content: "";
        height: 10px;
        width: 10px;
        background-color: #ff6b64;
        border-radius: 50%;
        opacity: 0;
    }

    input:checked:before {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    height: 200px;
    width: 80vw;
    max-width: 200px;
    position: fixed;
    top: 20vh;
    left: 0;
    box-shadow: 3px 6px 11px 3px rgba(75, 75, 75, 0.64);

    background-color: #f0f0f0;
    border-radius: 0 20px 20px 0;

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

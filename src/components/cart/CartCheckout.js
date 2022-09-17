import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CheckOutCart } from "../../service/axiosCatLove";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { postCart } from "../../service/axiosCatLove";

export default function Checkout({ products, value, visible, setVisible }) {
    const name = localStorage.getItem("name");
    const [payment, setPayment] = useState("");
    console.log(payment);

    const { myCart, setMyCart } = useContext(UserContext);

    const navigate = useNavigate();

    const body = {
        name,
        payment,
        value,
        products: [...products],
    };

    function submit() {
        if (payment === "") {
            return alert("escolha uma forma de pagamento");
        }

        CheckOutCart(body)
            .then(() => {
                alert("Compra realizada");

                setTimeout(() => {
                    navigate("/home");
                }, 500);
                setMyCart([]);

                const newCart = { products: [] };
                postCart(newCart);
            })
            .catch((err) => {
                alert("Falha ao realizar compra");
                console.log(err.message);
            });
    }

    return (
        <Wrapper visible={visible}>
            <Tela>
                <h1>Nome: {name}</h1>
                <h1>
                    Valor total: R${" "}
                    {(value / 100).toFixed(2).toString().replace(".", ",")}
                </h1>
                <h2>Tipo de pagamento:</h2>
                <Inputs>
                    <div>
                        <input
                            name='payment'
                            type='radio'
                            onClick={() => {
                                setPayment("credit");
                            }}
                        ></input>
                        <label>Crédito</label>
                    </div>
                    <div>
                        <input
                            name='payment'
                            type='radio'
                            onClick={() => {
                                setPayment("debit");
                            }}
                        ></input>
                        <label>Débito</label>
                    </div>
                    <div>
                        <input
                            name='payment'
                            type='radio'
                            onClick={() => {
                                setPayment("pix");
                            }}
                        ></input>
                        <label>Pix</label>
                    </div>
                </Inputs>
                <button
                    onClick={() => {
                        submit();
                    }}
                >
                    Confirmar Compra
                </button>
            </Tela>

            <Back onClick={() => setVisible(false)} />
        </Wrapper>
    );
}

const Inputs = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    div {
        display: flex;
        align-items: center;
    }

    & > :last-child {
        margin-right: 30px;
    }

    input {
        display: flex;
        align-items: center;
        justify-content: center;
        appearance: none;
        cursor: pointer;
        height: 30px;
        width: 30px;
        border: 2px solid #ff6b64;
        border-radius: 50%;
        position: relative;
    }

    input:before {
        content: "";
        position: absolute;
        height: 15px;
        width: 15px;
        background-color: #ff6b64;
        border-radius: 50%;
        opacity: 0;
    }

    input:checked:before {
        opacity: 1;
    }
`;

const Back = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    opacity: 0.7;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
`;
const Tela = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 80vw;
    position: absolute;
    top: 30vw;
    left: 8vw;
    background-color: #f0f0f0;
    border-radius: 10px;
    z-index: 2;

    font-weight: 400;
    display: flex;
    justify-content: space-evenly;
    height: 70%;
    border-bottom: 2px solid white;
    box-shadow: -3px 5px 9px -3px rgba(75, 75, 75, 0.64);

    && button {
        color: #ff6b64;
        background-color: white;
        box-shadow: -3px 4px 10px -3px rgba(75, 75, 75, 0.64);
        cursor: pointer;

        :hover {
            transform: translateY(-1px);
            transition: all 0.1s ease-in;
        }

        :active {
            box-shadow: none;
        }
    }
`;

const Wrapper = styled.div`
    height: 80vh;
    position: absolute;
    display: ${(props) => (props.visible ? "visible" : "none")};
`;

import { useState } from "react";
import styled from "styled-components";
import { CheckOutCart } from "../../service/axiosCatLove";

export default function Checkout({ products, value, visible, setVisible }) {
  const name = localStorage.getItem("name");
  const [payment, setPayment] = useState("");
  console.log(payment);

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
              name="payment"
              type="radio"
              onClick={() => {
                setPayment("credit");
              }}
            ></input>
            <label>Crédito</label>
          </div>
          <div>
            <input
              name="payment"
              type="radio"
              onClick={() => {
                setPayment("debit");
              }}
            ></input>
            <label>Débito</label>
          </div>
          <div>
            <input
              name="payment"
              type="radio"
              onClick={() => {
                setPayment("pix");
              }}
            ></input>
            <label>Pix</label>
          </div>
        </Inputs>
        <button onClick={submit}>Confirmar Compra</button>
      </Tela>

      <Back onClick={() => setVisible(false)} />
    </Wrapper>
  );
}

const Inputs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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
  left: 5vw;
  background-color: #f08080;
  border-radius: 10px;
  z-index: 2;

  font-weight: 700;
  color: white;
  display: flex;
  justify-content: space-evenly;
  height: 70%;
  border-bottom: 2px solid white;

  && button {
    color: #f08080;
    background-color: white;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  height: 80vh;
  position: absolute;
  display: ${(props) => (props.visible ? "visible" : "none")};
`;

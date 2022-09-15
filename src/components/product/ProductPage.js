import { useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import HeaderProduct from "./HeaderProduct";
import { getCart } from "../../service/axiosCatLove";

export default function ProductPage() {
  const { id } = useParams();
  const { products, setProducts, myCart, setMyCart } = useContext(UserContext);
  const product = products.find((product) => product._id === id);
  const { name, price, image, category, _id } = product;

  const categoryUpper = category[0].toUpperCase() + category.substring(1);

  const [quantity, setQuantity] = useState(1);

  function updateCart() {
    const requisicao = getCart();

    requisicao
      .then((resposta) => {
        console.log("Deu certo");
        setMyCart([...resposta.data]);
        console.log(resposta.data);

        if (myCart.find((product) => product._id === id)) {
          const productInCart = myCart.find((product) => product._id === id);
          productInCart.amount = product.amount + quantity;
        } else {
          const productInCart = {
            amount: quantity,
            ...product,
          };

          setMyCart([productInCart, ...myCart]);
          console.log(myCart);
        }
      })
      .catch(() => {
        alert("Falha ao pegar o carrinho");
      });

    let hasProduct = false;

    console.log(myCart);
  }

  return (
    <Wrapper>
      <HeaderProduct />
      <img src={image}></img>
      <BottomMenu>
        <h1>{name}</h1>
        <h2>{categoryUpper}</h2>
        <PriceAndCart>
          <h1>R$ {(price / 100).toFixed(2).replace(".", ",")}</h1>
          <Buttons>
            <QuantityButton>
              <div
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                -
              </div>
              <p>{quantity}</p>
              <div onClick={() => setQuantity(quantity + 1)}>+</div>
            </QuantityButton>
            <button
              onClick={() => {
                updateCart();
              }}
            >
              Add
            </button>
          </Buttons>
        </PriceAndCart>
      </BottomMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;

  > img {
    margin-top: 10px;
    height: 30%;
  }
`;

const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fcdacc;

  width: 100%;
  height: 30%;
  border-radius: 10% 10% 0 0;

  position: fixed;
  bottom: 0;

  padding-top: 30px;
  padding-right: 30px;
  padding-left: 30px;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const PriceAndCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 18px;

    border: none;
    border-radius: 10px;

    width: 60px;
    height: 40px;

    margin-left: 15px;
  }
`;

const QuantityButton = styled.div`
  border-radius: 25%;

  width: 75px;
  height: 28px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 22px;
    color: gray;

    width: 25px;

    display: flex;
    justify-content: center;
  }

  p {
    font-size: 18px;
    color: gray;

    width: 25px;

    display: flex;
    justify-content: center;
  }
`;

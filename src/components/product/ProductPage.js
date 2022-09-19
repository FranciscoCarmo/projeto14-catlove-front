import { useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import styled from "styled-components";
import HeaderProduct from "./HeaderProduct";
import { getCart, postCart } from "../../service/axiosCatLove";

export default function ProductPage() {
    const { id } = useParams();
    const { products, setProducts, myCart, setMyCart } =
        useContext(UserContext);
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

                if (resposta.data.find((prod) => prod._id === id)) {
                    const productInCart = resposta.data.find(
                        (prod) => prod._id === id
                    );
                    console.log("productInCart: ");
                    console.log(productInCart);
                    productInCart.amount = productInCart.amount + quantity;

                    const newCart = { products: [...resposta.data] };

                    setMyCart([...resposta.data]);
                    postCart(newCart);
                    console.log(newCart);
                } else {
                    const productInCart = {
                        amount: quantity,
                        ...product,
                    };
                    console.log("productInCart: ");
                    console.log(productInCart);
                    const newCart = {
                        products: [productInCart, ...resposta.data],
                    };

                    setMyCart([productInCart, ...resposta.data]);
                    postCart(newCart);
                    console.log(newCart);
                }
                setQuantity(1);
            })
            .catch(() => {
                alert("Falha ao pegar o carrinho");
            });

        let hasProduct = false;
    }

    return (
        <Wrapper>
            <HeaderProduct />
            <ProductImage>
                <img src={image}></img>
            </ProductImage>

            <BottomMenu>
                <h1>{name}</h1>
                <h2>{categoryUpper}</h2>
                <PriceAndCart>
                    <h3>R$ {(price / 100).toFixed(2).replace(".", ",")}</h3>
                    <Buttons>
                        <QuantityButton>
                            <div
                                onClick={() => {
                                    if (quantity > 1) setQuantity(quantity - 1);
                                }}
                            >
                                –
                            </div>
                            <p>{quantity}</p>
                            <div onClick={() => setQuantity(quantity + 1)}>
                                +
                            </div>
                        </QuantityButton>
                        <button
                            onClick={() => {
                                updateCart();
                                alert("Adicionado no carrinho");
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
    justify-content: space-around;
    box-shadow: 0 5px 11px 3px rgba(75, 75, 75, 0.64);
    background-color: #f0f0f0;

    width: 100%;
    height: 40%;
    border-radius: 10% 10% 0 0;

    position: fixed;
    bottom: 0;

    padding: 30px 30px;
    padding-top: 30px;
    padding-right: 30px;
    padding-left: 30px;

    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        line-height: 23px;
    }

    h3 {
        color: #ff6b64;
        font-size: 22px;
        font-weight: bold;
    }
    h2 {
        color: #8a8a8a;

        font-size: 20px;
        margin-bottom: 15px;
    }
`;

const PriceAndCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        font-size: 24px;
        font-weight: bold;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;

    button {
        cursor: pointer;
        background-color: #1c1c1c;
        color: white;
        font-weight: bold;
        font-size: 18px;

        border: none;
        border-radius: 10px;

        width: 70px;
        height: 40px;

        box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);
        margin-left: 15px;

        :hover {
            box-shadow: none;
            filter: brightness(2);
        }

        :active {
            transform: translateY(7px);
            transition: all 0.5s ease-in;
        }
    }
`;

const QuantityButton = styled.div`
    border-radius: 25%;
    box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);
    width: 80px;
    height: 40px;
    background-color: white;
    user-select: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
    :hover {
        transform: translateY(-2px);
        transition: all 0.1s ease-in;
    }

    :active {
        transform: translateY(7px);
        transition: all 0.2s ease-in;
    }
    cursor: pointer;

    div {
        font-size: 18px;
        color: #8a8a8a;

        width: 35px;

        display: flex;
        justify-content: center;
    }

    p {
        font-size: 18px;

        width: 25px;

        display: flex;
        justify-content: center;
    }
`;

const ProductImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60vh;

    img {
        height: 50%;
    }
`;

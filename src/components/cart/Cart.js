import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartProduct from "./CartProduct";
import { getCart } from "../../service/axiosCatLove";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";

const frete = 999;

export default function MyCart() {
    const { myCart, setMyCart } = useContext(UserContext);
    const { reload } = useContext(UserContext);
    let subtotal = 0;

    myCart.forEach((e) => {
        let price = Number(e.price);
        let amount = Number(e.amount);
        subtotal += amount * price;
        console.log(subtotal);
    });

    useEffect(() => {
        getCart()
            .then((res) => {
                console.log("get card concluído");
                setMyCart([...res.data]);
            })
            .catch((err) => {
                alert("Falha ao pegar o carrinho");
                console.log(err);
            });
    }, [reload]);

    return (
        <Wrapper>
            <CartHeader num={myCart.length} />
            {myCart.length > 0 ? (
                <>
                    {myCart.map((produto, i) => {
                        return (
                            <CartProduct index={i} produto={produto} key={i} />
                        );
                    })}
                </>
            ) : (
                <NoProducts>
                    <h1>
                        Você não possúi produtos no carrinho. Vamos as compras!
                    </h1>
                </NoProducts>
            )}

            <PurchaseInfo>
                <div>
                    <span>Subtotal</span>
                    <h3>R$ {(subtotal / 100).toFixed(2)}</h3>
                </div>
                <div>
                    <span>Frete</span>
                    <h3>R$ {(frete / 100).toFixed(2)}</h3>
                </div>
                {subtotal > 0 ? (
                    <div>
                        <span>Total</span>
                        <h3>R$ {((frete + subtotal) / 100).toFixed(2)}</h3>
                    </div>
                ) : (
                    <></>
                )}
            </PurchaseInfo>
            <button> Proceder para o CheckOut</button>
        </Wrapper>
    );
}

const NoProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    height: 300px;
    width: 100%;
    margin-bottom: 30px;
    padding: 20px;

    h1 {
        text-align: center;
        max-width: 90%;
        color: #f08080;
        font-size: 20px;
    }
`;

const PurchaseInfo = styled.div`
    color: #1c1c1c;
    div {
        display: flex;
        align-items: center;
        height: 50px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid white;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 20px;

    background-color: #fcdacc;
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
        background-color: #f08080;
        color: white;
        font-size: 17px;
        font-weight: 700;
        border-radius: 20px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    }
`;

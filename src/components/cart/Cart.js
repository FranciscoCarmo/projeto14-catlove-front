import styled from "styled-components";
import CartHeader from "./CartHeader";
import CartProduct from "./CartProduct";
import { getCart } from "../../service/axiosCatLove";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Checkout from "./CartCheckout";

const frete = 999;

export default function MyCart() {
    const [visible, setVisible] = useState(false);
    const { myCart, setMyCart } = useContext(UserContext);
    const { reload } = useContext(UserContext);

    let subtotal = 0;

    if (visible) {
        window.scrollTo(0, 0);
        // Scrola pro topo da página quando os produtos são muitos
        // e a janela de checkout aparece
    }

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
            <Checkout
                visible={visible}
                setVisible={setVisible}
                products={myCart}
                value={subtotal + frete}
            />
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
                    <h3>
                        R${" "}
                        {(subtotal / 100)
                            .toFixed(2)
                            .toString()
                            .replace(".", ",")}
                    </h3>
                </div>
                <div>
                    <span>Frete</span>
                    <h3>
                        R${" "}
                        {(frete / 100).toFixed(2).toString().replace(".", ",")}
                    </h3>
                </div>
                {subtotal > 0 ? (
                    <div>
                        <span>Total</span>
                        <h3>
                            R${" "}
                            {((frete + subtotal) / 100)
                                .toFixed(2)
                                .toString()
                                .replace(".", ",")}
                        </h3>
                    </div>
                ) : (
                    <></>
                )}
            </PurchaseInfo>
            <button
                onClick={() => {
                    if (subtotal === 0) {
                        return alert("Insira produtos no carrinho primeiro!");
                    }
                    setVisible(true);
                }}
            >
                {" "}
                Proceder para o CheckOut
            </button>
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
    box-shadow: -3px 5px 8px -3px rgba(75, 75, 75, 0.64);

    h1 {
        text-align: center;
        max-width: 90%;
        color: #ff6b64;
        font-size: 20px;
    }
`;

const PurchaseInfo = styled.div`
    padding: 0 10px;

    div {
        display: flex;
        align-items: center;
        height: 50px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-bottom: 2px solid white;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    padding: 30px 10px;

    background-color: #f0f0f0;
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
